/* SNFM — ambient starfield canvas. Replaces the old CSS aurora blur
   layers (expensive to composite for hours). Stars are preallocated;
   the draw loop allocates nothing per frame. */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  var STAR_COUNT = 140;

  var canvas = null;
  var ctx = null;
  var stars = null;
  var renderer = null;
  var width = 0;
  var height = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function makeStars() {
    stars = new Array(STAR_COUNT);
    for (var i = 0; i < STAR_COUNT; i += 1) {
      stars[i] = {
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.4 + Math.random() * 1.3,
        tw: Math.random() * Math.PI * 2,
        twSpeed: 0.0006 + Math.random() * 0.0012,
        vx: 0.004 + Math.random() * 0.012
      };
    }
  }

  function draw(now, dt) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#cfe4ff';
    for (var i = 0; i < stars.length; i += 1) {
      var s = stars[i];
      s.x -= s.vx * dt;
      if (s.x < -2) s.x = width + 2;
      ctx.globalAlpha = 0.18 + 0.4 * (0.5 + 0.5 * Math.sin(now * s.twSpeed + s.tw));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function onResize() {
    resize();
  }

  SNFM.ambient = {
    start: function (el) {
      this.stop();
      canvas = el;
      ctx = canvas.getContext('2d');
      resize();
      makeStars();
      window.addEventListener('resize', onResize);
      renderer = draw;
      SNFM.loop.add(renderer);
    },
    /* pause drawing while a fullscreen overlay hides the stage */
    setActive: function (active) {
      if (!renderer) return;
      if (active) SNFM.loop.add(renderer);
      else SNFM.loop.remove(renderer);
    },
    stop: function () {
      if (renderer) {
        SNFM.loop.remove(renderer);
        renderer = null;
      }
      window.removeEventListener('resize', onResize);
      if (ctx) ctx.clearRect(0, 0, width, height);
    }
  };
})();
