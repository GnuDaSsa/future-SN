/* SNFM — finale particle canvas. One spectacular burst when the five
   districts fuse: sparks erupt from the city boundary, streak outward,
   then drift and die as embers. A softer second wave shimmers when the
   completion title lands. Finite by design — every burst self-removes
   from the shared rAF loop when its last particle dies. */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  var PALETTE = ['255,169,77', '76,195,255', '255,125,156', '182,155,255', '63,224,181', '255,255,255', '255,184,0'];

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
      pts.push(new DOMPoint(p.x, p.y).matrixTransform(matrix));
    }
    return pts;
  }

  function makeBurst(width, height, mode) {
    var pts = sampleBoundary(mode === 'burst' ? 160 : 90);
    if (!pts) return null;
    var cx = 0;
    var cy = 0;
    pts.forEach(function (p) { cx += p.x; cy += p.y; });
    cx /= pts.length;
    cy /= pts.length;

    var particles = [];
    pts.forEach(function (p, i) {
      var nx = p.x - cx;
      var ny = p.y - cy;
      var len = Math.max(1, Math.hypot(nx, ny));
      nx /= len; ny /= len;
      var count = mode === 'burst' ? 2 : 1;
      for (var k = 0; k < count; k += 1) {
        var spread = (Math.random() - 0.5) * 0.9;
        var cos = Math.cos(spread);
        var sin = Math.sin(spread);
        var dx = nx * cos - ny * sin;
        var dy = nx * sin + ny * cos;
        var speed = mode === 'burst' ? 2.5 + Math.random() * 9 : 0.4 + Math.random() * 1.4;
        particles.push({
          x: p.x, y: p.y,
          vx: dx * speed,
          vy: dy * speed - (mode === 'embers' ? 0.6 + Math.random() * 0.9 : 0),
          life: 0,
          ttl: (mode === 'burst' ? 1400 : 2600) + Math.random() * (mode === 'burst' ? 2200 : 1800),
          size: mode === 'burst' ? 1 + Math.random() * 2.6 : 0.6 + Math.random() * 1.6,
          color: PALETTE[(i + k) % PALETTE.length],
          tw: Math.random() * Math.PI * 2,
          streak: mode === 'burst' && Math.random() < 0.3
        });
      }
    });
    return { particles: particles, cx: cx, cy: cy };
  }

  SNFM.finale = {
    /* mode: 'burst' (fuse explosion) | 'embers' (title shimmer) */
    fire: function (canvas, mode) {
      var ctx = canvas.getContext('2d');
      if (!ctx) return;
      var width = canvas.width = window.innerWidth;
      var height = canvas.height = window.innerHeight;
      var burst = makeBurst(width, height, mode);
      if (!burst) return;
      var particles = burst.particles;
      var alive = particles.length;
      var prev = performance.now();

      function renderer(now, dt) {
        ctx.clearRect(0, 0, width, height);
        ctx.globalCompositeOperation = 'lighter';
        alive = 0;
        for (var i = 0; i < particles.length; i += 1) {
          var p = particles[i];
          p.life += dt;
          if (p.life >= p.ttl) continue;
          alive += 1;
          var t = p.life / p.ttl;
          p.vx *= 0.985;
          p.vy = p.vy * 0.985 + (mode === 'burst' ? 0.018 * dt * 0.06 : -0.002 * dt * 0.06);
          p.x += p.vx * dt * 0.06;
          p.y += p.vy * dt * 0.06;
          var fade = t < 0.12 ? t / 0.12 : 1 - (t - 0.12) / 0.88;
          var twinkle = 0.65 + 0.35 * Math.sin(now * 0.012 + p.tw);
          var alpha = Math.max(0, fade * twinkle);
          if (p.streak && t < 0.5) {
            ctx.strokeStyle = 'rgba(' + p.color + ',' + alpha * 0.5 + ')';
            ctx.lineWidth = p.size * 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - p.vx * 3.2, p.y - p.vy * 3.2);
            ctx.stroke();
          }
          ctx.fillStyle = 'rgba(' + p.color + ',' + alpha + ')';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (1 - t * 0.5), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalCompositeOperation = 'source-over';
        if (!alive) {
          ctx.clearRect(0, 0, width, height);
          SNFM.loop.remove(renderer);
        }
      }

      SNFM.loop.add(renderer);
    },

    clear: function (canvas) {
      var ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
})();
