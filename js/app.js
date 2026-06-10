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
      svg: document.querySelector('.map-shell svg'),
      districts: Array.from(document.querySelectorAll('.district')),
      railRows: Array.from(document.querySelectorAll('.rail-row')),
      cells: Array.from(document.querySelectorAll('.progress-cell')),
      progressCount: document.querySelector('#progressCount'),
      videoLayer: document.querySelector('#videoLayer'),
      clock: document.querySelector('#missionClock'),
      lamp: document.querySelector('#statusLamp'),
      lampText: document.querySelector('#statusLampText'),
      scanline: document.querySelector('#scanline'),
      coord: document.querySelector('#coordReadout'),
      resetCountdown: document.querySelector('#resetCountdown'),
      testRun: document.querySelector('#testRun')
    };

    var done = new Set();
    var tl = SNFM.createTimeline();
    var machine;
    var idleTimer = null;
    var shimmerIdx = 0;

    /* ------------------------------------------------ board state */

    function railRow(id) {
      return els.railRows.find(function (r) { return r.dataset.id === id; });
    }

    function setRowState(row, state, text) {
      var badge = row.querySelector('.row-state');
      badge.dataset.state = state;
      badge.textContent = text;
    }

    function refreshBoard() {
      els.districts.forEach(function (d) {
        d.classList.toggle('done', done.has(d.dataset.id));
      });
      els.railRows.forEach(function (r) {
        if (done.has(r.dataset.id)) setRowState(r, 'online', 'ONLINE');
        else setRowState(r, 'standby', 'STANDBY');
      });
      els.cells.forEach(function (c) {
        c.classList.toggle('on', done.has(c.dataset.id));
      });
      els.progressCount.textContent = String(done.size);
    }

    function setLamp(tone, text) {
      SNFM.hud.setLamp(els.lamp, els.lampText, tone, text);
    }

    /* ------------------------------------------------ idle / attract */

    function clearIdle() {
      if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; }
    }

    function armIdle() {
      clearIdle();
      idleTimer = setTimeout(function () {
        if (machine.is('map')) machine.go('attract');
      }, cfg.IDLE_ATTRACT_MS);
    }

    function shimmerNext() {
      els.districts.forEach(function (d) { d.classList.remove('shimmer'); });
      var pending = els.districts.filter(function (d) { return !done.has(d.dataset.id); });
      if (!pending.length) return;
      var target = pending[shimmerIdx % pending.length];
      shimmerIdx += 1;
      void target.getBoundingClientRect(); /* flush class removal before re-adding */
      target.classList.add('shimmer');
    }

    /* ------------------------------------------------ intro loader */

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

    /* ------------------------------------------------ phase hooks */

    var hooks = {
      boot: function () {
        clearIdle();
        SNFM.hud.stop();
        SNFM.ambient.stop();
        done.clear();
        shimmerIdx = 0;
        stage.removeAttribute('data-arrived');
        els.videoLayer.innerHTML = '';
        els.districts.forEach(function (d) {
          d.classList.remove('active', 'done', 'shimmer');
        });
        els.railRows.forEach(function (r) { r.classList.remove('live'); });
        refreshBoard();
        setLamp('ok', 'SYSTEMS NOMINAL');
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
        tl.after(duration, function () { machine.go('map'); });
      },

      map: function (prev) {
        if (prev === 'launch') {
          SNFM.hud.startClock(els.clock);
          SNFM.ambient.start(els.ambientCanvas);
          tl.after(cfg.ARRIVE_MS, function () {
            stage.setAttribute('data-arrived', '');
          });
        } else {
          SNFM.ambient.setActive(true);
        }
        SNFM.hud.startScan(els.scanline, 12000);
        setLamp('ok', 'SYSTEMS NOMINAL');
        armIdle();
      },

      attract: function () {
        clearIdle();
        SNFM.hud.startScan(els.scanline, 6000);
        shimmerNext();
        tl.every(cfg.ATTRACT_SHIMMER_MS, shimmerNext);
      },

      playing: function (prev, id) {
        clearIdle();
        SNFM.hud.stopScan();
        stage.setAttribute('data-arrived', '');
        els.districts.forEach(function (d) { d.classList.remove('shimmer'); });
        SNFM.ambient.setActive(false);
        setLamp('live', 'AGENDA LIVE — ' + SNFM.config.SEGMENTS[id].code);
        var row = railRow(id);
        if (row) { row.classList.add('live'); setRowState(row, 'live', 'LIVE'); }
        els.districts.forEach(function (d) {
          d.classList.toggle('active', d.dataset.id === id);
        });
        SNFM.video.play(els.videoLayer, cfg.SEGMENTS[id], cfg.VIDEO_SOURCES[id], function () {
          done.add(id);
          els.districts.forEach(function (d) { d.classList.remove('active'); });
          if (row) row.classList.remove('live');
          refreshBoard();
          if (done.size === cfg.SEGMENT_ORDER.length) machine.go('fusing');
          else machine.go('map');
        });
      },

      fusing: function () {
        clearIdle();
        SNFM.hud.stopScan();
        setLamp('data', 'MAP COMPLETE');
        tl.after(reduced ? 400 : cfg.FUSE_MS, function () { machine.go('complete'); });
      },

      complete: function () {
        SNFM.hud.stopClock();
        var remain = Math.round(cfg.AUTO_RESET_MS / 1000);
        function render() {
          els.resetCountdown.textContent = 'AUTO RESET T-' + String(Math.max(0, remain)).padStart(2, '0') + 'S';
        }
        render();
        tl.every(1000, function () { remain -= 1; render(); });
        tl.after(cfg.AUTO_RESET_MS, function () { machine.go('resetting'); });
      },

      resetting: function () {
        SNFM.ambient.stop();
        tl.after(cfg.RESET_FADE_MS, function () { machine.go('boot'); });
      }
    };

    machine = SNFM.createMachine(stage, hooks, function () { tl.clearAll(); });

    /* ------------------------------------------------ events */

    function requestPlay(id) {
      if (!cfg.SEGMENTS[id]) return;
      if (machine.isAny('map', 'attract')) machine.go('playing', id);
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
      d.addEventListener('pointerenter', function () {
        var row = railRow(d.dataset.id);
        if (row) row.classList.add('hover');
      });
      d.addEventListener('pointerleave', function () {
        var row = railRow(d.dataset.id);
        if (row) row.classList.remove('hover');
      });
    });

    els.railRows.forEach(function (r) {
      r.addEventListener('click', function () { requestPlay(r.dataset.id); });
      r.addEventListener('pointerenter', function () {
        var district = els.districts.find(function (d) { return d.dataset.id === r.dataset.id; });
        if (district) district.classList.add('peek');
      });
      r.addEventListener('pointerleave', function () {
        els.districts.forEach(function (d) { d.classList.remove('peek'); });
      });
    });

    els.testRun.addEventListener('click', function () {
      if (!machine.isAny('map', 'attract')) return;
      cfg.SEGMENT_ORDER.forEach(function (id) { done.add(id); });
      refreshBoard();
      machine.go('fusing');
    });

    /* any input wakes the kiosk from attract & re-arms the idle timer */
    function onActivity() {
      if (machine.is('attract')) { machine.go('map'); return; }
      if (machine.is('map')) armIdle();
    }
    stage.addEventListener('pointerdown', onActivity);
    stage.addEventListener('pointermove', onActivity);
    stage.addEventListener('keydown', onActivity);

    SNFM.hud.bindPointer(stage, els.svg, els.coord);

    machine.go('boot');
  });
})();
