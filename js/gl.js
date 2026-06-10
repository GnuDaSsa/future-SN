/* SNFM — WebGL effects engine (three.js r147 UMD + UnrealBloom).
   One fullscreen canvas, one scene, bloom over everything. The CSS
   layer order is driven by [data-phase] so the same canvas sits
   behind the map as a starfield and above it for the finale.

   Modes:
     stars   — 3D parallax starfield (ambient, behind the map)
     launch  — thousands of particles fly out of deep space and
               assemble the city boundary, camera dollying in
     burst   — the finale detonation: the boundary erupts into a
               14k-particle 3D explosion + expanding shock rings,
               bloom surging
     embers  — soft rising embers under the completion title

   The camera is pinned so the z=0 plane maps 1:1 to CSS pixels,
   letting us target particles at exact SVG screen coordinates.
   If a WebGL context can't be created, `available` stays false and
   app.js falls back to the 2D canvas modules.                       */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  var PALETTE = [
    [1.0, 0.66, 0.30],  /* renovation amber  */
    [0.30, 0.76, 1.0],  /* enterprise cyan   */
    [1.0, 0.49, 0.61],  /* market rose       */
    [0.71, 0.61, 1.0],  /* youth violet      */
    [0.25, 0.88, 0.71], /* senior mint       */
    [1.0, 1.0, 1.0],    /* white             */
    [1.0, 0.72, 0.0]    /* data amber        */
  ];

  var renderer = null;
  var composer = null;
  var bloomPass = null;
  var scene = null;
  var camera = null;
  var width = 0;
  var height = 0;
  var active = false;
  var frameFn = null;
  var bloomTarget = 0.9;

  var stars = null;
  var flight = null;
  var burst = null;
  var rings = null;

  function clamp(v, min, max) {
    if (min === undefined) min = 0;
    if (max === undefined) max = 1;
    return Math.max(min, Math.min(max, v));
  }
  function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function spriteTexture() {
    var c = document.createElement('canvas');
    c.width = c.height = 64;
    var ctx = c.getContext('2d');
    var g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.28, 'rgba(255,255,255,.85)');
    g.addColorStop(0.62, 'rgba(255,255,255,.22)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }

  function sampleBoundary(total) {
    var path = document.querySelector('.outer-border');
    var svg = document.querySelector('.map-shell svg');
    if (!path || !svg) return null;
    var matrix = svg.getScreenCTM();
    if (!matrix) return null;
    var length = path.getTotalLength();
    var pts = [];
    for (var i = 0; i < total; i += 1) {
      var p = path.getPointAtLength((length * i) / total);
      var s = new DOMPoint(p.x, p.y).matrixTransform(matrix);
      /* screen px → world units on the z=0 plane */
      pts.push({ x: s.x - width / 2, y: height / 2 - s.y });
    }
    return pts;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height;
    camera.position.z = (height / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    composer.setSize(width, height);
  }

  /* ------------------------------------------------ starfield */

  function makeStars(texture) {
    var COUNT = 2400;
    var pos = new Float32Array(COUNT * 3);
    var col = new Float32Array(COUNT * 3);
    for (var i = 0; i < COUNT; i += 1) {
      pos[i * 3] = (Math.random() - 0.5) * width * 3.2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * height * 3.0;
      pos[i * 3 + 2] = -300 - Math.random() * 2400;
      var tint = Math.random();
      var c = tint < 0.72 ? [0.78, 0.87, 1.0] : tint < 0.9 ? [0.3, 0.76, 1.0] : [1.0, 0.78, 0.4];
      var lum = 0.25 + Math.random() * 0.75;
      col[i * 3] = c[0] * lum;
      col[i * 3 + 1] = c[1] * lum;
      col[i * 3 + 2] = c[2] * lum;
    }
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    var mat = new THREE.PointsMaterial({
      size: 3.2,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    var points = new THREE.Points(geo, mat);
    points.visible = false;
    return { obj: points, mat: mat, targetOpacity: 0 };
  }

  function updateStars(now, dt) {
    if (!stars.obj.visible) return;
    stars.mat.opacity += (stars.targetOpacity - stars.mat.opacity) * clamp(dt * 0.0012);
    stars.obj.rotation.z = now * 0.000014;
    stars.obj.position.x = Math.sin(now * 0.00005) * 40;
    stars.obj.position.y = Math.cos(now * 0.00004) * 26;
    if (stars.targetOpacity === 0 && stars.mat.opacity < 0.01) stars.obj.visible = false;
  }

  /* ------------------------------------------------ launch flight */

  function makeFlight(texture) {
    var COUNT = 5200;
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COUNT * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(COUNT * 3), 3));
    var mat = new THREE.PointsMaterial({
      size: 14,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    var points = new THREE.Points(geo, mat);
    points.visible = false;
    points.frustumCulled = false;
    return {
      obj: points, mat: mat, count: COUNT,
      data: null, started: 0, duration: 1, onDone: null, fading: false
    };
  }

  function startFlight(duration, onDone) {
    var targets = sampleBoundary(240);
    if (!targets) { if (onDone) onDone(); return; }
    var d = new Float32Array(flight.count * 12); /* sx,sy,sz, tx,ty, delay, phase, curl, colorIdx, depth, _, _ */
    for (var i = 0; i < flight.count; i += 1) {
      var t = targets[i % targets.length];
      var o = i * 12;
      d[o] = (Math.random() - 0.5) * width * 2.0;
      d[o + 1] = (Math.random() - 0.5) * height * 1.8;
      d[o + 2] = -1500 + Math.random() * 1900;
      d[o + 3] = t.x + (Math.random() - 0.5) * 5;
      d[o + 4] = t.y + (Math.random() - 0.5) * 5;
      d[o + 5] = Math.random() * 0.24;
      d[o + 6] = Math.random() * Math.PI * 2;
      d[o + 7] = 90 + Math.random() * 320;
      d[o + 8] = i % 7 < 3 ? 1 : (i % 7 === 3 ? 6 : i % 7 === 4 ? 5 : i % 7 === 5 ? 0 : 5);
      d[o + 9] = Math.random();
    }
    flight.data = d;
    flight.started = performance.now();
    flight.duration = duration;
    flight.onDone = onDone;
    flight.fading = false;
    flight.mat.opacity = 1;
    flight.obj.visible = true;
    bloomTarget = 1.6;
  }

  function updateFlight(now, dt) {
    if (!flight.obj.visible) return;
    if (flight.fading) {
      flight.mat.opacity -= dt * 0.0011;
      if (flight.mat.opacity <= 0) { flight.obj.visible = false; flight.mat.opacity = 1; }
      return;
    }
    if (!flight.data) return;
    var p = clamp((now - flight.started) / flight.duration);
    var pos = flight.obj.geometry.attributes.position.array;
    var col = flight.obj.geometry.attributes.color.array;
    var d = flight.data;
    for (var i = 0; i < flight.count; i += 1) {
      var o = i * 12;
      var local = clamp((p - d[o + 5]) / 0.72);
      var e = easeInOutCubic(local);
      var swirl = (1 - e) * d[o + 7];
      var ang = d[o + 6] + p * (5 + d[o + 9] * 5);
      var x = d[o] + (d[o + 3] - d[o]) * e + Math.cos(ang) * swirl;
      var y = d[o + 1] + (d[o + 4] - d[o + 1]) * e + Math.sin(ang) * swirl;
      var z = d[o + 2] * (1 - e);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      var c = PALETTE[d[o + 8] | 0];
      var lum = (0.5 + 0.5 * clamp(local * 1.6)) * (0.72 + 0.28 * Math.sin(d[o + 6] + now * 0.004));
      col[i * 3] = c[0] * lum;
      col[i * 3 + 1] = c[1] * lum;
      col[i * 3 + 2] = c[2] * lum;
    }
    flight.obj.geometry.attributes.position.needsUpdate = true;
    flight.obj.geometry.attributes.color.needsUpdate = true;

    /* the assembled outline flares as the flight completes */
    bloomTarget = 1.6 + easeOutCubic(clamp((p - 0.62) / 0.38)) * 1.1;

    if (p >= 1) {
      flight.data = null;
      flight.fading = true;
      bloomTarget = 0.9;
      if (flight.onDone) { var fn = flight.onDone; flight.onDone = null; fn(); }
    }
  }

  /* ------------------------------------------------ finale burst & embers */

  function makeBurst(texture) {
    var COUNT = 14000;
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COUNT * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(COUNT * 3), 3));
    var mat = new THREE.PointsMaterial({
      size: 6.5,
      map: texture,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    var points = new THREE.Points(geo, mat);
    points.visible = false;
    points.frustumCulled = false;
    return { obj: points, mat: mat, count: COUNT, data: null, mode: 'burst', alive: 0 };
  }

  function seedBurst(mode) {
    var targets = sampleBoundary(280);
    if (!targets) return false;
    var n = mode === 'embers' ? 1500 : burst.count;
    var d = new Float32Array(burst.count * 10); /* x,y,z, vx,vy,vz, life, ttl, colorIdx, tw */
    var cx = 0, cy = 0;
    targets.forEach(function (t) { cx += t.x; cy += t.y; });
    cx /= targets.length;
    cy /= targets.length;
    for (var i = 0; i < burst.count; i += 1) {
      var o = i * 10;
      if (i >= n) { d[o + 6] = 1; d[o + 7] = 1; continue; } /* dead slot */
      var t = targets[i % targets.length];
      d[o] = t.x + (Math.random() - 0.5) * 14;
      d[o + 1] = t.y + (Math.random() - 0.5) * 14;
      d[o + 2] = (Math.random() - 0.5) * 60;
      var nx = t.x - cx;
      var ny = t.y - cy;
      var nl = Math.max(1, Math.hypot(nx, ny));
      if (mode === 'embers') {
        d[o + 3] = (Math.random() - 0.5) * 26;
        d[o + 4] = 18 + Math.random() * 52;
        d[o + 5] = (Math.random() - 0.5) * 30;
        d[o + 7] = 2600 + Math.random() * 3400;
      } else {
        var speed = 140 + Math.random() * 620;
        var spread = (Math.random() - 0.5) * 0.8;
        var cos = Math.cos(spread);
        var sin = Math.sin(spread);
        d[o + 3] = ((nx / nl) * cos - (ny / nl) * sin) * speed;
        d[o + 4] = ((nx / nl) * sin + (ny / nl) * cos) * speed;
        d[o + 5] = (Math.random() - 0.5) * 560;
        d[o + 7] = 1500 + Math.random() * 3000;
      }
      d[o + 6] = 0;
      d[o + 8] = i % PALETTE.length;
      d[o + 9] = Math.random() * Math.PI * 2;
    }
    burst.data = d;
    burst.mode = mode;
    burst.alive = n;
    burst.obj.visible = true;
    return true;
  }

  function updateBurst(now, dt) {
    if (!burst.obj.visible || !burst.data) return;
    var pos = burst.obj.geometry.attributes.position.array;
    var col = burst.obj.geometry.attributes.color.array;
    var d = burst.data;
    var sec = dt / 1000;
    var drag = Math.pow(0.45, sec);
    var alive = 0;
    for (var i = 0; i < burst.count; i += 1) {
      var o = i * 10;
      d[o + 6] += dt;
      if (d[o + 6] >= d[o + 7]) {
        col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = 0;
        pos[i * 3 + 2] = -9000;
        continue;
      }
      alive += 1;
      var t = d[o + 6] / d[o + 7];
      if (burst.mode === 'burst') {
        d[o + 3] *= drag;
        d[o + 4] = d[o + 4] * drag - 36 * sec;
        d[o + 5] *= drag;
      }
      d[o] += d[o + 3] * sec + Math.sin(now * 0.001 + d[o + 9]) * 9 * sec;
      d[o + 1] += d[o + 4] * sec;
      d[o + 2] += d[o + 5] * sec;
      pos[i * 3] = d[o];
      pos[i * 3 + 1] = d[o + 1];
      pos[i * 3 + 2] = d[o + 2];
      var c = PALETTE[d[o + 8] | 0];
      var fade = t < 0.1 ? t / 0.1 : 1 - (t - 0.1) / 0.9;
      var twinkle = 0.6 + 0.4 * Math.sin(now * 0.011 + d[o + 9]);
      var lum = fade * twinkle;
      col[i * 3] = c[0] * lum;
      col[i * 3 + 1] = c[1] * lum;
      col[i * 3 + 2] = c[2] * lum;
    }
    burst.obj.geometry.attributes.position.needsUpdate = true;
    burst.obj.geometry.attributes.color.needsUpdate = true;
    if (!alive) { burst.obj.visible = false; burst.data = null; }
  }

  /* expanding shock rings */

  function makeRings() {
    var group = new THREE.Group();
    var colors = [0xffffff, 0x00d4ff, 0xffb800];
    for (var i = 0; i < 3; i += 1) {
      var mesh = new THREE.Mesh(
        new THREE.RingGeometry(0.986, 1, 128),
        new THREE.MeshBasicMaterial({
          color: colors[i],
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      mesh.visible = false;
      group.add(mesh);
    }
    group.position.z = 10;
    return { group: group, started: 0, active: false };
  }

  function fireRings() {
    rings.started = performance.now();
    rings.active = true;
  }

  function updateRings(now) {
    if (!rings.active) return;
    var done = true;
    for (var i = 0; i < 3; i += 1) {
      var mesh = rings.group.children[i];
      var p = clamp((now - rings.started - i * 160) / 1500);
      if (p <= 0) { done = false; continue; }
      if (p >= 1) { mesh.visible = false; continue; }
      done = false;
      mesh.visible = true;
      var r = 60 + easeOutCubic(p) * Math.max(width, height) * 0.85;
      mesh.scale.set(r, r, 1);
      mesh.material.opacity = (1 - p) * 0.42;
    }
    if (done) rings.active = false;
  }

  /* ------------------------------------------------ engine */

  function frame(now, dt) {
    updateStars(now, dt);
    updateFlight(now, dt);
    updateBurst(now, dt);
    updateRings(now);
    bloomPass.strength += (bloomTarget - bloomPass.strength) * clamp(dt * 0.004);
    composer.render();
  }

  function ensureRunning() {
    if (!active) {
      active = true;
      SNFM.loop.add(frameFn);
    }
  }

  SNFM.gl = {
    available: false,

    init: function (canvas) {
      /* any failure here (no WebGL, missing pass file, software-GL
         blocked) must leave available=false so app.js falls back to
         the 2D modules — never break boot */
      try {
        if (!window.THREE || !THREE.EffectComposer || !THREE.RenderPass || !THREE.UnrealBloomPass) return false;
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
        if (!renderer.getContext()) return false;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setClearColor(0x000000, 0);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, 1, 1, 8000);
        composer = new THREE.EffectComposer(renderer);
        composer.addPass(new THREE.RenderPass(scene, camera));
        bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.9, 0.55, 0.08);
        composer.addPass(bloomPass);
        resize();
        window.addEventListener('resize', resize);

        var texture = spriteTexture();
        stars = makeStars(texture);
        flight = makeFlight(texture);
        burst = makeBurst(texture);
        rings = makeRings();
        scene.add(stars.obj, flight.obj, burst.obj, rings.group);

        frameFn = frame;
        this.available = true;
        return true;
      } catch (err) {
        this.available = false;
        return false;
      }
    },

    stars: function () {
      ensureRunning();
      stars.obj.visible = true;
      stars.targetOpacity = 0.85;
    },

    launch: function (duration, onDone) {
      ensureRunning();
      this.stars();
      startFlight(duration, onDone);
    },

    burst: function () {
      ensureRunning();
      if (seedBurst('burst')) {
        fireRings();
        bloomTarget = 2.4;
        setTimeout(function () { bloomTarget = 0.9; }, 1600);
      }
    },

    embers: function () {
      ensureRunning();
      seedBurst('embers');
    },

    _debug: function () {
      var pos = flight.obj.geometry.attributes.position.array;
      return {
        active: active,
        flightVisible: flight.obj.visible,
        hasData: !!flight.data,
        fading: flight.fading,
        opacity: flight.mat.opacity,
        starsVisible: stars.obj.visible,
        starsOpacity: stars.mat.opacity,
        bloom: bloomPass.strength,
        p0: [pos[0], pos[1], pos[2]],
        p1: [pos[300], pos[301], pos[302]]
      };
    },

    stop: function () {
      if (!renderer) return;
      stars.targetOpacity = 0;
      stars.obj.visible = false;
      flight.obj.visible = false;
      flight.data = null;
      burst.obj.visible = false;
      burst.data = null;
      rings.active = false;
      rings.group.children.forEach(function (m) { m.visible = false; });
      bloomTarget = 0.9;
      if (active) {
        active = false;
        SNFM.loop.remove(frameFn);
        renderer.clear();
      }
    }
  };
})();
