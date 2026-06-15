# 🎞️ 시댄스 멀티레퍼런스 배치 플랜 — 씬2, 3런 (4 / 3 / 3)

> 영상화 단계용. 이미지(스틸) 작업 후 사용. 이미지 생성은 `codex-image-requests.md`.

`codex-image-requests.md`로 만든 스틸 14장을 시댄스 멀티샷 3런에 투입. 각 컷=1샷(스타트 프레임=컷 키프레임).
매치컷(컷7→8)만 스타트=`cut07`/엔드=`cut08`.

## 🔒 전 런 공통 멀티레퍼런스
- `sheet_character.png` (인물 고정)
- `sheet_bins.png` (쓰레기통 색·디자인 고정)
- `cut05.png` (얼굴·색감 기준판 — 런 간 통일)

**고정 문구:**
```
maintain the same young woman's face from the reference, 2D Makoto Shinkai anime illustration (hand-drawn, not photorealistic), consistent lighting from upper-left, identical beige trench coat and brown shoulder bag, keep the orange/lime-green street bins exactly, same color grading across all shots, 16:9
```

## 🅰️ RUN 1 — 컷 1~4 (추가 ref: `sheet_location`, `sheet_prop`)
| 샷 | 스타트 | 모션 |
|---|---|---|
| 1 | `cut01` | slow drone descent over the golden-hour Jungwon-gu street |
| 2 | `cut02` | walking steps on the sidewalk, coffee cup swaying at her side |
| 3 | `cut03` | she looks at the empty cup and crumpled wrapper in her hands |
| 4 | `cut04` | glancing around searching for a bin, finding none |

SFX/대사: 1 교통·바람 / 2 발걸음 / 3 💬 "다 마셨는데… 버릴 데가 없네." / 4 차 소리

## 🅱️ RUN 2 — 컷 5~7 (추가 ref: `sheet_location`)
| 샷 | 스타트 | 모션 |
|---|---|---|
| 5 | `cut05` | a small troubled sigh, holding the trash, unsure |
| 6 | `cut06` | walking a bit further down the long sidewalk (bins faint far ahead) |
| 7 | `cut07` | eyes closing in mild resignation, about to pocket the trash |

SFX/대사: 5 💬 "하아… 그냥 들고 가야 하나." / 6 도시 앰비언스 / 7 💬 "에이…"

## 🅲 RUN 3 — 컷 8~10 (추가 ref: `sheet_location`, `sheet_bins`)
| 샷 | 스타트 | 엔드 | 모션 |
|---|---|---|---|
| 8 ★매치컷 | `cut07` | `cut08` | eyes snap open, surprised, as the bin set appears on the sidewalk beside her |
| 9 | `cut09` | — | sorting trash into the lime-green recycling and orange general bins, satisfied smile |
| 10 | `cut10` | — | walking on with a smile, crane pulls up/back revealing the clean street, god rays |

SFX/대사: 8 💬 "어, 쓰레기통!" / 9 투입음 / 10 💬 "성남, 진짜 좋아졌다."

## ✅ 체크
- ☐ 세 런 모두 `sheet_character`+`sheet_bins`+`cut05` 넣었나
- ☐ 샷8 스타트=`cut07`, 엔드=`cut08`
- ☐ 통 색(주황/라임그린) 전 샷 동일, 광원 좌상단, 고정 문구 포함
