/* SNFM — intro launch canvas: particles fly in from the screen edges
   and assemble the Seongnam boundary, which then ignites and hands
   off to the live SVG map. Ported from the original inline version;
   palette retuned to the mission-control tokens (cyan/amber/white).  */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  var CYAN = '0,212,255';
  var AMBER = '255,184,0';
  var WHITE = '255,255,255';

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  function clamp(v, min, max) {
    if (min === undefined) min = 0;
    if (max === undefined) max = 1;
    return Math.max(min, Math.min(max, v));
  }

  function resizeCanvas(canvas, ctx) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return { width: width, height: height };
  }

  function sampleMapTargets(total) {
    var path = document.querySelector('.outer-border');
    var svg = document.querySelector('.map-shell svg');
    if (!path || !svg) return [];
    var matrix = svg.getScreenCTM();
    if (!matrix) return [];
    var length = path.getTotalLength();
    var targets = [];
    for (var i = 0; i < total; i += 1) {
      var point = path.getPointAtLength((length * i) / total);
      var screenPoint = new DOMPoint(point.x, point.y).matrixTransform(matrix);
      targets.push({ x: screenPoint.x, y: screenPoint.y });
    }
    return targets;
  }

  function createParticles(width, height) {
    var targets = sampleMapTargets(96);
    var centerX = width / 2;
    var centerY = height / 2;
    return targets.map(function (target, index) {
      var side = index % 4;
      var margin = 120;
      var startX = side === 0 ? -margin : side === 1 ? width + margin : Math.random() * width;
      var startY = side === 2 ? -margin : side === 3 ? height + margin : Math.random() * height;
      var depth = Math.random();
      return {
        x: startX, y: startY,
        sx: startX, sy: startY,
        tx: target.x, ty: target.y,
        cx: centerX + (Math.random() - 0.5) * width * 0.46,
        cy: centerY + (Math.random() - 0.5) * height * 0.42,
        delay: Math.random() * 0.18,
        depth: depth,
        seq: index,
        lane: (index % 11) / 10,
        hue: index % 3,
        phase: Math.random() * Math.PI * 2
      };
    });
  }

  function particleColor(hue) {
    return hue === 0 ? CYAN : hue === 1 ? AMBER : WHITE;
  }

  function strokeBoundary(ctx, boundary, visible, offsetX, offsetY) {
    offsetX = offsetX || 0;
    offsetY = offsetY || 0;
    var count = Math.max(0, Math.min(boundary.length, Math.floor(boundary.length * visible)));
    if (count < 2) return;
    ctx.beginPath();
    for (var i = 0; i < count; i += 1) {
      var point = boundary[i];
      if (i === 0) ctx.moveTo(point.x + offsetX, point.y + offsetY);
      else ctx.lineTo(point.x + offsetX, point.y + offsetY);
    }
    ctx.stroke();
  }

  function fillBoundary(ctx, boundary, width, height, alpha) {
    if (boundary.length < 3 || alpha <= 0) return;
    var gradient = ctx.createLinearGradient(width * 0.24, height * 0.22, width * 0.78, height * 0.76);
    gradient.addColorStop(0, 'rgba(' + CYAN + ',' + alpha * 0.5 + ')');
    gradient.addColorStop(0.45, 'rgba(' + WHITE + ',' + alpha * 0.16 + ')');
    gradient.addColorStop(1, 'rgba(' + AMBER + ',' + alpha * 0.42 + ')');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    boundary.forEach(function (point, index) {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
    ctx.fill();
  }

  function drawRibbons(ctx, width, height, progress) {
    var reveal = clamp((progress - 0.08) / 0.52);
    var vanish = 1 - clamp((progress - 0.74) / 0.18);
    var alpha = reveal * vanish;
    if (alpha <= 0) return;

    for (var i = 0; i < 8; i += 1) {
      var lane = i / 7;
      var color = i % 3 === 0 ? CYAN : i % 3 === 1 ? AMBER : WHITE;
      var phase = progress * (1.4 + lane * 0.8) + lane * Math.PI * 2;
      var y = height * (0.28 + lane * 0.48) + Math.sin(phase * 2.2) * height * 0.055;
      var sweep = easeOutCubic(reveal) * width * 1.45;
      var x = -width * 0.22 + sweep - lane * width * 0.24;
      ctx.strokeStyle = 'rgba(' + color + ',' + (0.04 + lane * 0.1) * alpha + ')';
      ctx.lineWidth = 1.1 + lane * 3.6;
      ctx.beginPath();
      ctx.moveTo(x - width * 0.24, y + Math.sin(phase) * 42);
      ctx.bezierCurveTo(
        x + width * 0.08, y - height * (0.2 + lane * 0.06),
        x + width * 0.34, y + height * (0.18 - lane * 0.04),
        x + width * 0.76, y + Math.cos(phase) * 54
      );
      ctx.stroke();
    }
  }

  function drawLens(ctx, width, height, progress) {
    var pulse = Math.sin(progress * Math.PI);
    var centerX = width / 2;
    var centerY = height / 2;
    var radius = Math.max(width, height);
    var glow = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, radius * 0.56);
    glow.addColorStop(0, 'rgba(' + WHITE + ',' + 0.1 * pulse + ')');
    glow.addColorStop(0.22, 'rgba(' + CYAN + ',' + 0.18 * pulse + ')');
    glow.addColorStop(0.55, 'rgba(' + AMBER + ',' + 0.1 * pulse + ')');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    var ringAlpha = clamp((progress - 0.18) / 0.26) * (1 - clamp((progress - 0.82) / 0.16));
    if (ringAlpha <= 0) return;
    for (var i = 0; i < 4; i += 1) {
      var size = radius * (0.08 + i * 0.075 + progress * 0.24);
      ctx.strokeStyle = 'rgba(' + (i % 2 ? AMBER : CYAN) + ',' + (0.12 - i * 0.018) * ringAlpha + ')';
      ctx.lineWidth = 1 + i * 0.7;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, size * 1.55, size, progress * 0.8 + i * 0.7, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function drawFrame(ctx, width, height, particles, progress) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(4, 8, 15, ' + (0.24 + 0.34 * (1 - progress)) + ')';
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = 'lighter';
    drawLens(ctx, width, height, progress);
    drawRibbons(ctx, width, height, progress);

    var boundary = [];
    for (var i = 0; i < particles.length; i += 1) {
      var p = particles[i];
      var local = clamp((progress - p.delay) / 0.68);
      var e = easeInOutCubic(local);
      var mid = clamp(progress / 0.42);
      var depthPush = 1 + p.depth * 2.5;
      var parallaxX = (p.lane - 0.5) * width * 0.08 * (1 - e);
      var parallaxY = Math.sin(p.phase + progress * 4) * height * 0.028 * (1 - e);
      var orbitX = p.cx + parallaxX + Math.cos(p.phase + progress * (8 + p.depth * 6)) * (120 * depthPush * (1 - e));
      var orbitY = p.cy + parallaxY + Math.sin(p.phase + progress * (6 + p.depth * 4)) * (78 * depthPush * (1 - e));
      var ix = p.sx + (orbitX - p.sx) * easeOutCubic(mid);
      var iy = p.sy + (orbitY - p.sy) * easeOutCubic(mid);
      p.x = ix + (p.tx - ix) * e;
      p.y = iy + (p.ty - iy) * e;

      var color = particleColor(p.hue);
      var alpha = clamp(local * 1.8) * (1 - clamp((progress - 0.94) / 0.06));
      var trail = 1 - e;
      if (trail > 0.1 && progress > 0.16 && p.seq % 8 === 0) {
        ctx.strokeStyle = 'rgba(' + color + ',' + (0.12 + p.depth * 0.24) * trail + ')';
        ctx.lineWidth = 1.4 + p.depth * 2.8;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(
          p.x - (p.tx - p.sx) * 0.045 * depthPush,
          p.y - (p.ty - p.sy) * 0.045 * depthPush
        );
        ctx.stroke();
      }

      if (progress > 0.34 && progress < 0.84 && p.seq % 12 === 0) {
        var glint = Math.sin(clamp((progress - 0.34) / 0.5) * Math.PI);
        ctx.fillStyle = 'rgba(' + color + ',' + (0.22 + alpha * 0.44) * glint + ')';
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.phase + progress * 1.8);
        ctx.fillRect(-8 - p.depth * 8, -1, 16 + p.depth * 16, 2 + p.depth * 2);
        ctx.restore();
      }

      if (progress > 0.26 && progress < 0.72 && p.seq % 6 === 0 &&
          ((Math.floor(p.phase * 1000) + Math.floor(progress * 60)) % 7) === 0) {
        ctx.strokeStyle = 'rgba(' + color + ',' + (0.05 + alpha * 0.13) + ')';
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.tx, p.ty);
        ctx.stroke();
      }
      boundary.push({ x: p.tx, y: p.ty });
    }

    if (progress > 0.52) {
      fillBoundary(ctx, boundary, width, height, clamp((progress - 0.52) / 0.28) * 0.58);
    }

    if (progress > 0.38) {
      var draw = clamp((progress - 0.38) / 0.42);
      var colorOffset = 1 - clamp((progress - 0.78) / 0.16);
      ctx.lineWidth = 2.8;
      if (colorOffset > 0) {
        ctx.strokeStyle = 'rgba(' + CYAN + ',' + (0.16 + 0.38 * draw) * colorOffset + ')';
        strokeBoundary(ctx, boundary, draw, -5 * colorOffset, -2 * colorOffset);
        ctx.strokeStyle = 'rgba(' + AMBER + ',' + (0.14 + 0.34 * draw) * colorOffset + ')';
        strokeBoundary(ctx, boundary, draw, 5 * colorOffset, 2 * colorOffset);
      }
      ctx.strokeStyle = 'rgba(' + WHITE + ',' + (0.22 + 0.58 * clamp((progress - 0.48) / 0.22)) + ')';
      ctx.lineWidth = 2.1;
      strokeBoundary(ctx, boundary, draw);
    }

    if (progress > 0.9) {
      var flash = clamp((progress - 0.9) / 0.1);
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = 'rgba(' + WHITE + ',' + Math.sin(flash * Math.PI) * 0.055 + ')';
      ctx.fillRect(0, 0, width, height);
    }

    ctx.globalCompositeOperation = 'source-over';
  }

  SNFM.launch = {
    start: function (canvas, duration, onDone) {
      var ctx = canvas.getContext('2d');
      if (!ctx) { if (onDone) onDone(); return; }
      var size = resizeCanvas(canvas, ctx);
      var particles = createParticles(size.width, size.height);
      var started = performance.now();
      var finished = false;

      function renderer(now) {
        var progress = clamp((now - started) / duration);
        if (canvas.width !== window.innerWidth) {
          size = resizeCanvas(canvas, ctx);
          particles = createParticles(size.width, size.height);
        }
        drawFrame(ctx, size.width, size.height, particles, progress);
        if (progress >= 1 && !finished) {
          finished = true;
          SNFM.loop.remove(renderer);
          if (onDone) onDone();
        }
      }

      SNFM.loop.add(renderer);
    }
  };
})();
