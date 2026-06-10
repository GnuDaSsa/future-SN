# 성남 미래지도 — Design Contract ("Civic Mission Control")

이 문서는 이 키오스크의 브랜드 계약서다. 코드를 수정할 때 여기 정의된
토큰·모션 규칙·페이즈 구조를 따른다. (디자인 시스템 형식은
`nexu-io/open-design`의 DESIGN.md 컨벤션을 차용했고, 토큰은
mission-control / hud 시스템에서 가져왔다.)

## 잠금 (절대 변경 금지 — locked-state-notes.md 참조)

- SVG 외곽 경계 path 데이터, 5개 `path.base` 내부 분할
- 라벨/핀 좌표 (재건축 660,240 · 대기업/IT 365,425 · 골목상권 627,395 · 청년 401,303 · 어르신 513,555)
- 최종 완성 텍스트 "성남 미래지도", 표시 폰트 Paperlogy
- 추가 SVG 요소(필터, border-trace, hud-tag)는 허용 — 지오메트리 변형은 불가

## 컬러 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `--bg` / `--bg-deep` | `#0B1120` / `#060b16` | 캔버스 |
| `--surface` / `--surface-hi` | `#111827` / `#1A2535` | 패널 |
| `--border` / `--border-soft` | `#1E3A5F` / `#162035` | 구분선, 브래킷 |
| `--text-hi` / `--text-mid` / `--text-lo` | `#E8F0FE` / `#8BA3C7` / `#4A6080` | 본문 / 라벨 / 메타 |
| `--data` | `#FFB800` | 텔레메트리 값 (클록, 완성도 숫자) |
| `--accent` | `#00D4FF` | 활성/스캔/트레이스 |
| `--ok` / `--alert` | `#26DE81` / `#FF4757` | 상태 램프 |
| 의제 5색 | `#ffa94d` `#4cc3ff` `#ff7d9c` `#b69bff` `#3fe0b5` | 재건축/IT/골목상권/청년/어르신 |

다크 모드 전용. 팔레트 밖 색 도입 금지.

## 타이포그래피

- `--font-display`: Paperlogy (한글 헤드라인, 지도 라벨, 의제명)
- `--font-mono`: 시스템 모노 스택 (텔레메트리 값·코드·마이크로 라벨 전용,
  오프라인 키오스크이므로 네트워크 폰트 금지)
- 마이크로 라벨: 10–11px, 대문자, letter-spacing `.18em` 이상, `--text-mid/lo`
- 텔레메트리 숫자는 반드시 모노 + `tabular-nums`

## 모션 규칙

- 운영 상태 변화(호버, 배지, 진행도): 100–300ms, `--ease-out`
- 시네마틱 페이즈 전환(등장/퓨징/완성)은 안무로 간주 — 길어도 된다
- 상태 램프·LIVE 배지 펄스: 2s ease-in-out 무한
- 위계는 그림자 대신 글로우로 표현
- `prefers-reduced-motion`: 무한 애니메이션 제거, 등장은 즉시 정착

## 인터페이스 원칙 (2026-06-10 미니멀 개편)

화면에 남는 UI는 5분할 지도, 좌상단 성남시 엠블렘, 우하단 제작 표기뿐이다.
패널·상태표시·버튼·안내문 등 어떤 크롬도 추가하지 않는다 — 모든 표현은
모션(등장 안무, 호버 글로우, 피날레)으로 한다. 진행도는 점등된 구역
자체가 보여준다.

## 페이즈 구조 (js/machine.js가 `main[data-phase]`의 유일한 작성자)

```
boot → ready → launch → map → playing(id) → map | fusing
fusing → complete → resetting → boot   (완성 90초 후 무음 자동 리셋)
```

피날레 타임라인(fusing, 5.4s): 차지(0–0.95s, 5구역 동기 펄스) →
임플로전(0.95s, 중심으로 붕괴) → 폭발(1.45s, 화이트 플래시 + 3중
쇼크웨이브 + 캔버스 파티클 버스트) → 점화(1.6s, 경계 트레이스 +
그라데이션 충전) → 상승(2.6s, 줌 + 오로라) → complete에서 타이틀이
글자 단위 블러 리빌로 등장.

CSS 안무 계약: 모든 원샷 애니메이션은 `[data-phase=…]` 선택자에 게이트하고
(등장은 추가로 `:not([data-arrived])`), 정착 상태는 일반 선언으로 명시한다.
페이즈가 바뀌면 선택자가 해제되어 fill 충돌이 구조적으로 불가능하다.
등장 fill은 `backwards`만 사용한다.

## 영상 교체 방법

`js/config.js`의 `VIDEO_SOURCES`에 경로만 채우면 된다 (그 외 수정 불필요):

```js
VIDEO_SOURCES: {
  renovation: 'videos/01-reconstruction.mp4',
  enterprise: 'videos/02-enterprise-it.mp4',
  market:     'videos/03-local-market.mp4',
  youth:      'videos/04-youth.mp4',
  senior:     'videos/05-senior.mp4',
},
```

소스가 null이면 `DEMO_VIDEO_MS`(1초) 데모 카드가 같은 프레임 크롬으로 재생된다.
실영상은 `ended` 이벤트로 종료되며 `VIDEO_SAFETY_MS` 안전 타임아웃이 있다.

## 파일 구조

| 파일 | 책임 |
|---|---|
| `index.html` | 마크업 + SVG (지오메트리 잠금) |
| `styles.css` | 토큰 시트 + data-phase 안무 |
| `js/config.js` | 콘텐츠·타이밍·영상 매니페스트 (`window.__SNFM_OVERRIDES`로 테스트 오버라이드) |
| `js/timeline.js` | 취소 가능 스케줄러 + 단일 rAF 루프 소유자 |
| `js/machine.js` | 페이즈 상태 기계 |
| `js/ambient.js` | 배경 별 필드 캔버스 (프레임당 할당 0, 가시성 일시정지) |
| `js/launch.js` | 인트로 파티클 발사 캔버스 |
| `js/finale.js` | 피날레 파티클 버스트/엠버 캔버스 |
| `js/video.js` | 영상 오버레이 슬롯 |
| `js/app.js` | 부트스트랩·이벤트 배선 (마지막 로드) |

주의: `file://`로 구동되므로 `<script type="module">` 금지 —
defer 클래식 스크립트 + `window.SNFM` 네임스페이스만 사용한다.
