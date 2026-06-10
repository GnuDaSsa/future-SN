/* SNFM — live HUD layer: mission clock, status lamp, scanline
   scheduler, pointer-tracking coordinate readout & spotlight. */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  var clockTimer = null;
  var scanTimer = null;
  var scanEl = null;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tickClock(el) {
    var d = new Date();
    el.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }

  SNFM.hud = {
    startClock: function (el) {
      this.stopClock();
      tickClock(el);
      clockTimer = setInterval(function () { tickClock(el); }, 1000);
    },

    stopClock: function () {
      if (clockTimer) { clearInterval(clockTimer); clockTimer = null; }
    },

    setLamp: function (lampEl, textEl, tone, text) {
      lampEl.dataset.tone = tone;
      textEl.textContent = text;
    },

    startScan: function (el, intervalMs) {
      this.stopScan();
      scanEl = el;
      function fire() {
        el.classList.remove('on');
        void el.offsetWidth; /* restart the CSS animation */
        el.classList.add('on');
      }
      scanTimer = setInterval(fire, intervalMs);
      fire();
    },

    stopScan: function () {
      if (scanTimer) { clearInterval(scanTimer); scanTimer = null; }
      if (scanEl) { scanEl.classList.remove('on'); scanEl = null; }
    },

    /* Maps cursor position into the SVG space and renders a plausible
       lat/lon + grid cell readout. Purely theatrical telemetry. */
    bindPointer: function (stage, svg, readoutEl) {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      var pending = false;
      var px = 0;
      var py = 0;
      stage.addEventListener('pointermove', function (event) {
        px = event.clientX;
        py = event.clientY;
        stage.style.setProperty('--mx', px + 'px');
        stage.style.setProperty('--my', py + 'px');
        if (pending) return;
        pending = true;
        requestAnimationFrame(function () {
          pending = false;
          var ctm = svg.getScreenCTM();
          if (!ctm) return;
          var p = new DOMPoint(px, py).matrixTransform(ctm.inverse());
          var lat = (37.5 - ((p.y - 64) / 630) * 0.14).toFixed(4);
          var lon = (127.02 + (p.x / 1000) * 0.18).toFixed(4);
          var col = 'ABCDEFGHIJ'[Math.max(0, Math.min(9, Math.floor(p.x / 100)))];
          var row = Math.max(1, Math.min(7, 1 + Math.floor((p.y - 64) / 90)));
          readoutEl.textContent = lat + 'N · ' + lon + 'E · GRID ' + col + row;
        });
      });
    },

    stop: function () {
      this.stopClock();
      this.stopScan();
    }
  };
})();
