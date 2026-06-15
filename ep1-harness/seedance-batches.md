# 🎞️ 시댄스 멀티레퍼런스 배치 플랜 — 3런 (4 / 3 / 3)

> ⚠️ **이 문서는 영상화(시댄스) 단계용.** 이미지(스틸) 작업이 끝난 뒤에 본다.
> 이미지 생성은 `codex-image-requests.md` 참고 (그쪽엔 시댄스 내용 없음).

`codex-image-requests.md`로 만든 스틸 13장(`cut01`~`cut10` + 시트)을 시댄스 멀티샷 3런에 투입.
각 컷 = 1샷. 컷 키프레임을 **스타트 프레임**으로 넣고 모션 프롬프트로 움직임을 만든다.
매치컷(컷7→8)만 **스타트=`cut07` / 엔드=`cut08`** 2프레임으로 묶는다.

---

## 🔒 전 런 공통
**모든 런에 첨부하는 글로벌 멀티레퍼런스 (런 간 색감·정체성 닻):**
- `sheet_character.png` — 얼굴·머리·네이비 점퍼·노란 명찰·빨간 가방 고정
- `cut05.png` — 얼굴 선명·색감 기준판 (세 런 모두 투입 → 런 간 색감 통일)

**모든 런 프롬프트 말미 고정 문구:**
```
maintain the same elementary school boy's face from the reference, strongly Makoto Shinkai photorealistic style (CoMix Wave Films), not Studio Ghibli, consistent lighting from upper-left, identical navy hooded jacket, yellow safety badge and large red backpack, same color grading across all shots, 16:9
```

---

## 🅰️ RUN 1 — 4컷 (컷 1~4) · 오프닝 + 등굣길 고생 빌드업
**추가 레퍼런스:** `sheet_location.png`

| 샷 | 스타트 프레임 | 모션 프롬프트 |
|---|---|---|
| 1 | `cut01.png` | slow drone descent over the dawn school-zone neighborhood, gentle cloud/mist drift |
| 2 | `cut02.png` | one heavy step climbing a stair, slight camera shake, tired commute |
| 3 | `cut03.png` | the small hands hitch the heavy red backpack higher, knuckles tightening |
| 4 | `cut04.png` | gaze tilting up the endless staircase, long shadow shifting down the steps |

SFX/대사: 1 새소리·예비종 / 2 발걸음·가쁜 숨 / 3 💬 "헉… 늦겠다…" / 4 예비종 "땡—땡—"

---

## 🅱️ RUN 2 — 3컷 (컷 5~7) · 고생 절정 + 눈 질끈 감기
**추가 레퍼런스:** `sheet_location.png`

| 샷 | 스타트 프레임 | 모션 프롬프트 |
|---|---|---|
| 5 | `cut05.png` | panting hard, flushed cheeks, anxious about being late, breath visible |
| 6 | `cut06.png` | trudging a few steps further up the exaggerated endless staircase |
| 7 | `cut07.png` | eyes squeezing shut in exhausted near-defeat, shoulders slumping |

SFX/대사: 5 💬 "하아… 하아…" / 6 등굣길 앰비언스 / 7 💬 "으…"

> ★ `cut07.png`(눈 감음·계단길)이 RUN 3 매치컷의 스타트가 된다.

---

## 🅲 RUN 3 — 3컷 (컷 8~10) · 매치컷 + 탑승 + 리빌
**추가 레퍼런스:** `sheet_location.png` + `cut08.png`(에스컬레이터 룩 고정)

| 샷 | 스타트 프레임 | 엔드 프레임 | 모션 프롬프트 |
|---|---|---|---|
| 8 ★매치컷 | `cut07.png` | `cut08.png` | eyes snap open with surprise as the staircase behind him morphs into the road escalator |
| 9 | `cut09.png` | — (모션) | stepping onto the ascending escalator, hands on the rail, riding up with a delighted grin, background sliding past |
| 10 | `cut10.png` | — (모션) | beaming, crane pulls up and back revealing the whole school-zone neighborhood, god rays pouring down |

SFX/대사: 8 💬 "어?!" · 기계음 / 9 기계음·바람 / 10 💬 "우와—! 안 늦겠다!"

> ★ 샷8 스타트 = `cut07.png` = 샷7과 동일 프레임 → 컷7→8 매치컷이 픽셀 단위로 끊긴다. (`02-matchcut-7-8.md`)

---

## ✅ 큐 돌리기 전 체크
- ☐ 세 런 모두에 `sheet_character.png` + `cut05.png`(색감 닻) 넣었나
- ☐ 샷8 스타트=`cut07.png`, 엔드=`cut08.png` 인가
- ☐ 모든 샷 광원 좌상단, 말미 고정 문구 포함했나
- ☐ (3런 완료 후) 10클립 나란히 놓고 동일인·동일 아침 검수 → 단일 LUT 통일
