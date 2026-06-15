# 🎞️ 시댄스 멀티레퍼런스 배치 플랜 — 3런 (4 / 3 / 3)

> `codex-image-requests.md`로 생성한 스틸 22장을 **시댄스 멀티샷 3런**에 투입.
> 각 컷 = 1샷. 샷마다 **스타트 프레임 + 엔드 프레임**(코덱스 스틸)을 지정해 보간 → 인물 드리프트 차단.
> 멀티레퍼런스는 **정체성·색감 닻**으로 매 런 동일하게 첨부.

---

## 🔒 전 런 공통 (큐마다 그대로 붙일 것)

**모든 런에 첨부하는 글로벌 멀티레퍼런스 (= 크로스배치 색감/정체성 닻):**
- `sheet_character.png` — 얼굴·안경·2겹 복장 고정
- `cut05_end.png` — 얼굴이 가장 잘 보이는 컬러 그레이드 기준판 (3런 모두 동일 투입 → 런 간 색감 통일)

**모든 런 프롬프트 말미 고정 문구:**
```
maintain the same elderly man's face from the reference, Makoto Shinkai anime style, consistent lighting from upper-left, identical 2-layer outfit (beige windbreaker over brown knit vest) and round thin-framed glasses, same color grading across all shots, 16:9
```

> ⚠️ 3런은 서로 독립 실행이라 색감이 갈릴 수 있다 → 위 2장(시트·cut05_end)을 **세 런 모두**에 넣어 같은 기준에 묶는다. 최종은 CapCut 단일 LUT로 한 번 더 통일(`03-workflow.md` D-4).

---

## 🅰️ RUN 1 — 멀티샷 4컷 (컷 1~4) · 오프닝 + 고생 빌드업

**이 런 추가 레퍼런스:** `sheet_location.png`

| 샷 | 스타트 프레임 | 엔드 프레임 | 모션 프롬프트 |
|---|---|---|---|
| 1 | `cut01_start.png` | `cut01_end.png` | slow drone descent over the dawn neighborhood, gentle cloud/mist drift |
| 2 | `cut02_start.png` | `cut02_end.png` | one heavy step on the slope, cane tip planting, slight camera shake |
| 3 | `cut03_start.png` | `cut03_end.png` | the hand tightens its grip on the cane, weight leaning in |
| 4 | `cut04_start.png` | `cut04_end.png` | one slow trudging step, the long shadow shifting down the slope |

**SFX/대사 (편집 참고):** 1 새벽 새소리·바람 / 2 발걸음·거친 숨 / 3 💬 "아이고… 무릎이야…" / 4 느린 발소리

---

## 🅱️ RUN 2 — 멀티샷 3컷 (컷 5~7) · 고생 절정 + 눈 감기

**이 런 추가 레퍼런스:** `sheet_location.png`

| 샷 | 스타트 프레임 | 엔드 프레임 | 모션 프롬프트 |
|---|---|---|---|
| 5 | `cut05_start.png` | `cut05_end.png` | breathing hard, then a slow exhale, brow easing, faint breath plume |
| 6 | `cut06_start.png` | `cut06_end.png` | trudging a few steps further up the exaggerated endless slope |
| 7 | `cut07_start.png` | `cut07_end.png` | eyes slowly closing on a tired exhale, breath scattering in cool air |

**SFX/대사:** 5 💬 "후우…" / 6 도시 앰비언스 / 7 💬 "후우—"

> ★ `cut07_end.png`(눈 감음·골목)이 RUN 3 매치컷의 스타트가 된다 — 이 프레임이 정확해야 매치컷이 산다.

---

## 🅲 RUN 3 — 멀티샷 3컷 (컷 8~10) · 매치컷 + 탑승 + 리빌

**이 런 추가 레퍼런스:** `sheet_location.png` + `cut08_end.png`(에스컬레이터 룩 고정)

| 샷 | 스타트 프레임 | 엔드 프레임 | 모션 프롬프트 |
|---|---|---|---|
| 8 ★매치컷 | `cut07_end.png` | `cut08_end.png` | eyes snap open with surprise as the alley behind him morphs into the hillside escalator |
| 9 | `cut09_start.png` | `cut09_end.png` | stepping onto the escalator, hand to the rubber rail, riding upward, background sliding past |
| 10 | `cut10_start.png` | `cut10_end.png` | warm grin, crane pulls up and back revealing the whole hillside, god rays pouring down |

**SFX/대사:** 8 💬 "…어?" · 에스컬레이터 기계음 / 9 기계음·바람 / 10 💬 "허허… 세상 참 좋아졌네."

> ★ 샷8 스타트 = 샷7 엔드(`cut07_end.png`) **동일 파일** → 컷7→8 매치컷이 픽셀 단위로 끊긴다.
> 매치컷 상세는 `02-matchcut-7-8.md`.

---

## ✅ 큐 돌리기 전 체크
- ☐ 세 런 모두에 `sheet_character.png` + `cut05_end.png`(색감 닻) 넣었나
- ☐ 각 샷의 스타트/엔드 프레임 파일이 코덱스 생성분과 일치하나
- ☐ 샷8 스타트가 `cut07_end.png`(샷7 엔드와 동일)인가
- ☐ 모든 샷 광원 upper-left, 고정 문구 말미 포함했나
- ☐ (3런 완료 후) 10클립 나란히 놓고 동일인·동일 아침 검수 → 단일 LUT 통일
