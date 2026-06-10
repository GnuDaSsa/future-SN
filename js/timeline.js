/* SNFM — cancellable scheduling + the single rAF owner.
   Every timer in the experience goes through a timeline so a phase
   change can sweep them all; every canvas goes through SNFM.loop so
   at most one requestAnimationFrame chain ever exists. */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  SNFM.createTimeline = function () {
    var timers = new Set();
    return {
      after: function (ms, fn) {
        var id = setTimeout(function () { timers.delete(id); fn(); }, ms);
        timers.add(id);
        return id;
      },
      every: function (ms, fn) {
        var id = setInterval(fn, ms);
        timers.add(id);
        return id;
      },
      clear: function (id) {
        clearTimeout(id);
        clearInterval(id);
        timers.delete(id);
      },
      clearAll: function () {
        timers.forEach(function (id) {
          clearTimeout(id);
          clearInterval(id);
        });
        timers.clear();
      }
    };
  };

  SNFM.loop = (function () {
    var renderers = new Set();
    var rafId = null;
    var last = 0;

    function frame(now) {
      /* clamp delta so suspend/visibility gaps don't slingshot motion */
      var dt = Math.min(100, now - last);
      last = now;
      renderers.forEach(function (r) { r(now, dt); });
      rafId = renderers.size ? requestAnimationFrame(frame) : null;
    }

    function arm() {
      if (rafId === null && renderers.size && !document.hidden) {
        last = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden && rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else {
        arm();
      }
    });

    return {
      add: function (r) { renderers.add(r); arm(); },
      remove: function (r) {
        renderers.delete(r);
        if (!renderers.size && rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };
  })();
})();
