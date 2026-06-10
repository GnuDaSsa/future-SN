/* SNFM — Seongnam Future Map: configuration & content.
   To plug in real videos later, drop files into videos/ and fill
   VIDEO_SOURCES below — that is the only edit required. */
(function () {
  'use strict';
  var SNFM = window.SNFM = window.SNFM || {};

  var config = {
    SEGMENT_ORDER: ['renovation', 'enterprise', 'market', 'youth', 'senior'],

    SEGMENTS: {
      renovation: {
        title: '재건축', code: 'SNM-01', mark: '01',
        sub: '도시를 다시 세우는 빛',
        copy: '노후 주거지의 변화가 생활 인프라와 연결되며 성남의 새 주거 축으로 살아나는 장면.',
        color: 'var(--renovation)'
      },
      enterprise: {
        title: '대기업/IT', code: 'SNM-02', mark: '02',
        sub: '판교에서 확장되는 엔진',
        copy: '판교와 첨단 산업 기반이 도시 전체로 확산되는 흐름을 데이터 라인과 빛의 속도로 표현.',
        color: 'var(--enterprise)'
      },
      market: {
        title: '골목상권', code: 'SNM-03', mark: '03',
        sub: '생활권을 잇는 경제',
        copy: '전통시장과 생활 상권이 다시 사람을 모으는 활력의 네트워크로 떠오르는 장면.',
        color: 'var(--market)'
      },
      youth: {
        title: '청년', code: 'SNM-04', mark: '04',
        sub: '기회가 머무는 도시',
        copy: '일자리, 주거, 창업, 문화가 맞물리며 청년의 시도가 도시의 속도가 되는 순간.',
        color: 'var(--youth)'
      },
      senior: {
        title: '어르신', code: 'SNM-05', mark: '05',
        sub: '돌봄과 품격의 기반',
        copy: '돌봄, 건강, 이동 편의가 하나의 안전망으로 이어져 품격 있는 일상을 밝히는 장면.',
        color: 'var(--senior)'
      }
    },

    /* Real video swap point. Example: renovation: 'videos/01-reconstruction.mp4' */
    VIDEO_SOURCES: {
      renovation: null,
      enterprise: null,
      market: null,
      youth: null,
      senior: null
    },

    DEMO_VIDEO_MS: 1000,
    VIDEO_SAFETY_MS: 90000,

    INTRO_LOAD_MS: 2500,
    LAUNCH_MS: 3000,
    ARRIVE_MS: 2200,

    IDLE_ATTRACT_MS: 45000,
    ATTRACT_SHIMMER_MS: 6000,

    FUSE_MS: 3800,
    AUTO_RESET_MS: 60000,
    RESET_FADE_MS: 1100
  };

  /* Test hook: page.addInitScript(() => { window.__SNFM_OVERRIDES = {...} }) */
  if (window.__SNFM_OVERRIDES) {
    Object.assign(config, window.__SNFM_OVERRIDES);
  }

  SNFM.config = config;
})();
