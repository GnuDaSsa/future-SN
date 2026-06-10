/* SNFM — finite state machine for the kiosk experience.
   The machine is the only writer of stage[data-phase]; all CSS
   choreography is gated on that attribute, so an invalid transition
   can never leave the UI in a mixed state.

   boot → ready → launch → map → playing(id) → map | fusing
   fusing → complete → resetting → boot                     */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  var TRANSITIONS = {
    boot: ['ready'],
    ready: ['launch'],
    launch: ['map'],
    map: ['playing', 'fusing'],
    playing: ['map', 'fusing'],
    fusing: ['complete'],
    complete: ['resetting'],
    resetting: ['boot']
  };

  SNFM.createMachine = function (stage, hooks, onTransition) {
    var phase = null;

    function go(next, detail) {
      if (phase === null) {
        if (next !== 'boot') return false;
      } else if ((TRANSITIONS[phase] || []).indexOf(next) === -1) {
        return false;
      }
      var prev = phase;
      phase = next;
      stage.dataset.phase = next;
      if (onTransition) onTransition(prev, next);
      if (hooks[next]) hooks[next](prev, detail);
      return true;
    }

    return {
      go: go,
      is: function (p) { return phase === p; },
      isAny: function () {
        for (var i = 0; i < arguments.length; i += 1) {
          if (phase === arguments[i]) return true;
        }
        return false;
      },
      get phase() { return phase; }
    };
  };
})();
