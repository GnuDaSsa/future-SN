/* SNFM — bootstrap: wires DOM, drives the state machine. Loaded last. */
(function () {
  'use strict';
  var SNFM = window.SNFM;
  var cfg = SNFM.config;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function () {
    var stage = document.querySelector('#stage');
    var els = {
      introLoader: document.querySelector('#introLoader'),
      introCanvas: document.querySelector('#introCanvas'),
      introCount: document.querySelector('#introCount'),
      introPercent: document.querySelector('#introPercent'),
      introProgress: document.querySelector('#introProgress'),
      introEnter: document.querySelector('#introEnter'),
      ambientCanvas: document.querySelector('#ambientCanvas'),
      finaleCanvas: document.querySelector('#finaleCanvas'),
      districts: Array.from(document.querySelectorAll('.district')),
      videoLayer: document.querySelector('#videoLayer')
    };

    var done = new Set();
    var tl = SNFM.createTimeline();
    var machine;

    function refreshBoard() {
      els.districts.forEach(function (d) {
        d.classList.toggle('done', done.has(d.dataset.id));
      });
    }

    function runLoader() {
      var duration = reduced ? 400 : cfg.INTRO_LOAD_MS;
      var started = performance.now();
      function tick(now) {
        if (!machine.is('boot')) return;
        var p = Math.min(100, Math.round(((now - started) / duration) * 100));
        els.introCount.textContent = String(p).padStart(2, '0');
        els.introPercent.textContent = p + '%';
        els.introProgress.style.width = p + '%';
        if (p < 100) { requestAnimationFrame(tick); return; }
        machine.go('ready');
      }
      requestAnimationFrame(tick);
    }

    var hooks = {
      boot: function () {
        done.clear();
        stage.removeAttribute('data-arrived');
        els.videoLayer.innerHTML = '';
        SNFM.ambient.stop();
        SNFM.finale.clear(els.finaleCanvas);
        els.districts.forEach(function (d) { d.classList.remove('active', 'done'); });
        els.introEnter.disabled = true;
        els.introCount.textContent = '00';
        els.introPercent.textContent = '0%';
        els.introProgress.style.width = '0%';
        runLoader();
      },

      ready: function () {
        els.introEnter.disabled = false;
      },

      launch: function () {
        els.introEnter.disabled = true;
        var duration = reduced ? 200 : cfg.LAUNCH_MS;
        SNFM.launch.start(els.introCanvas, duration, null);
        /* hand off slightly before the canvas flash so the 3D map
           arrival rises through the fading particle field */
        tl.after(Math.max(0, duration - cfg.HANDOFF_OVERLAP_MS), function () {
          machine.go('map');
        });
      },

      map: function (prev) {
        if (prev === 'launch') {
          SNFM.ambient.start(els.ambientCanvas);
          tl.after(cfg.ARRIVE_MS, function () {
            stage.setAttribute('data-arrived', '');
          });
        } else {
          SNFM.ambient.setActive(true);
        }
      },

      playing: function (prev, id) {
        stage.setAttribute('data-arrived', '');
        SNFM.ambient.setActive(false);
        els.districts.forEach(function (d) {
          d.classList.toggle('active', d.dataset.id === id);
        });
        SNFM.video.play(els.videoLayer, cfg.SEGMENTS[id], cfg.VIDEO_SOURCES[id], function () {
          done.add(id);
          els.districts.forEach(function (d) { d.classList.remove('active'); });
          refreshBoard();
          if (done.size === cfg.SEGMENT_ORDER.length) {
            machine.go('fusing');
          } else {
            machine.go('map');
          }
        });
      },

      fusing: function () {
        SNFM.ambient.setActive(true);
        if (!reduced) {
          tl.after(cfg.BURST_AT_MS, function () {
            SNFM.finale.fire(els.finaleCanvas, 'burst');
          });
        }
        tl.after(reduced ? 400 : cfg.FUSE_MS, function () { machine.go('complete'); });
      },

      complete: function () {
        if (!reduced) {
          tl.after(600, function () {
            SNFM.finale.fire(els.finaleCanvas, 'embers');
          });
        }
        tl.after(cfg.AUTO_RESET_MS, function () { machine.go('resetting'); });
      },

      resetting: function () {
        SNFM.ambient.stop();
        tl.after(cfg.RESET_FADE_MS, function () { machine.go('boot'); });
      }
    };

    machine = SNFM.createMachine(stage, hooks, function () { tl.clearAll(); });

    function requestPlay(id) {
      if (!cfg.SEGMENTS[id]) return;
      if (machine.is('map')) machine.go('playing', id);
    }

    els.introEnter.addEventListener('click', function () { machine.go('launch'); });
    els.introLoader.addEventListener('click', function (event) {
      if (machine.is('ready') && event.target !== els.introEnter) machine.go('launch');
    });

    els.districts.forEach(function (d) {
      d.addEventListener('click', function () { requestPlay(d.dataset.id); });
      d.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          requestPlay(d.dataset.id);
        }
      });
    });

    machine.go('boot');
  });
})();
