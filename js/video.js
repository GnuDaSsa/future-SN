/* SNFM — fullscreen agenda overlay. One media slot, two modes:
   - VIDEO_SOURCES[id] set   → real <video>, finishes on `ended`
   - VIDEO_SOURCES[id] null  → demo placeholder for DEMO_VIDEO_MS
   Both modes share the same frame chrome and the same onFinish path,
   so swapping in real footage is a config.js edit only. */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  var activeTimer = null;

  function kineticChars(text) {
    var out = '';
    var chars = Array.from(text);
    for (var i = 0; i < chars.length; i += 1) {
      var ch = chars[i] === ' ' ? '&nbsp;' : chars[i];
      out += '<span class="vt-char" style="--ci:' + i + '">' + ch + '</span>';
    }
    return out;
  }

  SNFM.video = {
    play: function (layer, seg, src, onFinish) {
      var cfg = SNFM.config;
      if (activeTimer) { clearTimeout(activeTimer); activeTimer = null; }
      layer.innerHTML = '';

      var pop = document.createElement('article');
      pop.className = 'video-pop';
      pop.style.setProperty('--color', seg.color);
      var durMs = src ? 0 : cfg.DEMO_VIDEO_MS;
      pop.innerHTML =
        '<div class="video-media" data-slot></div>' +
        '<span class="video-num" aria-hidden="true">' + seg.mark + '</span>' +
        '<span class="video-beam" aria-hidden="true"></span>' +
        '<span class="video-corner tl"></span><span class="video-corner tr"></span>' +
        '<span class="video-corner bl"></span><span class="video-corner br"></span>' +
        '<div class="video-frame">' +
          '<p class="video-eyebrow"><i></i>' + seg.code + ' · 미래 영상</p>' +
          '<h3 class="video-title">' + kineticChars(seg.title) + '</h3>' +
          '<p class="video-copy">' + seg.copy + '</p>' +
        '</div>' +
        '<span class="video-mark">' + seg.mark + '</span>' +
        '<div class="video-progress"' + (src ? ' hidden' : '') + '>' +
          '<span style="--dur:' + durMs + 'ms"></span></div>';

      var finished = false;
      function finish() {
        if (finished) return;
        finished = true;
        if (activeTimer) { clearTimeout(activeTimer); activeTimer = null; }
        pop.classList.add('exit');
        onFinish();
        setTimeout(function () { pop.remove(); }, 650);
      }

      if (src) {
        var media = document.createElement('video');
        media.autoplay = true;
        media.muted = true;
        media.playsInline = true;
        media.src = src;
        media.addEventListener('ended', finish);
        media.addEventListener('error', function () {
          activeTimer = setTimeout(finish, cfg.DEMO_VIDEO_MS);
        });
        pop.querySelector('[data-slot]').appendChild(media);
        activeTimer = setTimeout(finish, cfg.VIDEO_SAFETY_MS);
      } else {
        activeTimer = setTimeout(finish, cfg.DEMO_VIDEO_MS);
      }

      layer.appendChild(pop);
      requestAnimationFrame(function () { pop.classList.add('show'); });
    }
  };
})();
