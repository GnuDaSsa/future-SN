# 🖼️ Codex 이미지 생성 요청 — EP1 (시댄스 멀티레퍼런스 4/3/3 큐 대비)

> **사용처:** 이 파일을 Codex에 넘겨 아래 이미지를 **순서대로** 생성한다.
> 생성된 스틸은 곧바로 **시댄스 멀티레퍼런스 멀티샷 3런(4컷 / 3컷 / 3컷)** 의
> **스타트프레임 · 엔드프레임**으로 투입된다. 배치 플랜은 `seedance-batches.md`.
>
> **설계 원칙 (일관성 최우선):**
> 1. 모든 컷은 **스타트 프레임 + 엔드 프레임** 2장. 엔드 프레임은 **스타트의 최소 편집**(얼굴·복장·프레임·광원·색감 100% 고정, 모션 델타만 변경) → 시댄스가 start→end를 보간할 때 인물 드리프트가 없다.
> 2. **매치컷(컷7→8)** 은 프레임을 공유한다: `cut07_end`(눈 감음·골목) = `cut08_start`. 컷8은 새로 생성하지 않고 이 이미지를 편집.
> 3. 모든 생성에 **레퍼런스 첨부**(멀티레퍼런스): 캐릭터 시트 + 로케이션(+소품/에스컬레이터) + 직전 컷 → 색감·정체성 고정.
> 4. 영어 프롬프트는 `00-anchors.md`의 LOCK 문구를 **토씨 그대로** 박아 넣음. 광원은 전 컷 **upper-left**.

---

## STEP 0 — 기준 시트 3장 (가장 먼저, 레퍼런스 닻)

> 이 3장이 이후 모든 컷의 레퍼런스로 들어간다. 시트가 흔들리면 전체가 흔들리니 검수 후 다음 단계로.

### IMG `sheet_character.png` (최우선)
- **레퍼런스:** 없음 (최초 생성)
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Character reference sheet, 16:9 single sheet, clean light-gray background, model sheet layout: the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. Show the same man in one consistent design across: full-body front view, full-body side profile (facing right), 3/4 back view, and a row of three head close-ups below — neutral expression, exhausted/breathless expression, and a warm satisfied smile. Identical face, hair, glasses, and outfit in every view. Consistent proportions. No text labels.
```

### IMG `sheet_prop.png`
- **레퍼런스:** `sheet_character.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, soft lens flare, high color saturation, cinematic film still, 16:9. Prop reference sheet, clean light-gray background, no text labels: (1) a single wooden cane, close-up, worn smooth grip, natural wood grain, the same cane the elderly man holds; (2) a beige zip-up windbreaker laid flat, close-up of fabric and zipper, with a brown knit vest beside it showing the two-layer combination. Consistent colors and materials.
```

### IMG `sheet_location.png`
- **레퍼런스:** 없음
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Wide establishing shot, no characters: a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```

> 🔎 검수: 안경 얇은테 · 2겹 복장 · 오른손 지팡이 · 광원 upper-left. OK면 STEP 1로.

---

# 🅰️ RUN 1 대비 (시댄스 4컷: 컷1~4) — 스틸 8장

> 각 컷 = `cutNN_start.png`(풀 생성) + `cutNN_end.png`(스타트 최소 편집).
> 공통 첨부 레퍼런스: `sheet_character.png` + `sheet_location.png` (+ 명시된 추가분).

## 컷 1 — 드론 부감
### `cut01_start.png`  ·  ref: sheet_character, sheet_location
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Extreme high-angle drone bird's-eye view; the man a tiny distant figure; city-scale vista over the neighborhood. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```
### `cut01_end.png`  ·  EDIT of cut01_start.png
```
Edit cut01_start.png. Keep framing, color grading, lighting from upper-left and all content 100% identical. Only change: the drone has descended slightly closer, the distant clouds and mist have drifted a little. Makoto Shinkai anime style, same color grading.
```

## 컷 2 — 발 클로즈업 (웜즈아이)
### `cut02_start.png`  ·  ref: sheet_character, sheet_location, sheet_prop, cut01_end
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Worm's-eye low angle, extreme close-up of feet; only the brown worn sneakers and the cane tip in frame; the rear foot lifted at the start of a step on the slope. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```
### `cut02_end.png`  ·  EDIT of cut02_start.png
```
Edit cut02_start.png. Keep the same shoes, trousers, cane, framing, lighting from upper-left and color grading 100% identical. Only change: the lifted foot has now planted forward one step and the cane tip has come down to the pavement. Makoto Shinkai anime style, same color grading.
```

## 컷 3 — 지팡이 손 익스트림 클로즈업
### `cut03_start.png`  ·  ref: sheet_character, sheet_prop, sheet_location, cut02_end
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Extreme close-up of the right hand resting on the wooden cane grip; aged skin, the back of the hand relaxed. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```
### `cut03_end.png`  ·  EDIT of cut03_start.png
```
Edit cut03_start.png. Keep the hand, cane, framing, lighting from upper-left and color grading 100% identical. Only change: the fingers tighten around the grip, tendons standing out and knuckles whitening as he leans his weight on the cane. Makoto Shinkai anime style, same color grading.
```

## 컷 4 — 바닥 시선 / 그림자
### `cut04_start.png`  ·  ref: sheet_character, sheet_location, cut03_end
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Low angle looking down at the ground; the man's toes and a long cast shadow stretching down the slope; part of his bowed silhouette and lowered head visible at the top of frame. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```
### `cut04_end.png`  ·  EDIT of cut04_start.png
```
Edit cut04_start.png. Keep outfit, cane, shoes, framing, lighting from upper-left and color grading 100% identical. Only change: he has taken one slow step forward, the long cast shadow shifting accordingly down the slope. Makoto Shinkai anime style, same color grading.
```

---

# 🅱️ RUN 2 대비 (시댄스 3컷: 컷5~7) — 스틸 6장

> ⚠️ `cut07_end.png`(눈 감음·골목)은 **RUN 3 매치컷의 스타트 프레임으로 재사용**된다. 정밀하게.

## 컷 5 — 측면 표정 클로즈업
### `cut05_start.png`  ·  ref: sheet_character, sheet_location, cut04_end
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Side medium shot, close-up of the strained face; beads of sweat, furrowed brow, mouth open drawing in a breath. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```
### `cut05_end.png`  ·  EDIT of cut05_start.png
```
Edit cut05_start.png. Keep face, glasses, hair, 2-layer outfit, framing, lighting from upper-left and color grading 100% identical. Only change: he exhales — mouth releasing a breath, brow easing slightly, a faint warm breath plume in the cool air. Makoto Shinkai anime style, same color grading.
```

## 컷 6 — 후방 광각 풀숏 24mm (에스컬레이터 원경 첫 등장)
### `cut06_start.png`  ·  ref: sheet_character, sheet_location, cut05_end
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Rear wide full shot with 24mm wide-angle distortion; the slope exaggerated into an endless climb, the man a small back-view figure low in frame. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Far up the slope, faint in the morning mist, a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood — distant and barely noticeable.
```
### `cut06_end.png`  ·  EDIT of cut06_start.png
```
Edit cut06_start.png. Keep the back-view outfit, hair, cane, the faint distant escalator, framing, lighting from upper-left and color grading 100% identical. Only change: the man has trudged a few steps further up the slope, slightly smaller / higher in frame. Makoto Shinkai anime style, same color grading.
```

## 컷 7 — 측면 눈 감기 ★매치컷 A
### `cut07_start.png`  ·  ref: sheet_character, sheet_location, cut05_end
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Side close-up of the face, eyes still open and weary, just before a tired exhale. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```
### `cut07_end.png`  ·  EDIT of cut07_start.png ★(= cut08_start, 매치컷 기준 프레임)
```
Edit cut07_start.png. Keep pose, framing, head position, facial features, glasses, hair, 2-layer outfit, the alley background, lighting from upper-left and color grading 100% identical. Only change: his eyes are now slowly closed, with a faint warm breath plume scattering in the cool dawn air. Makoto Shinkai anime style, same color grading.
```

---

# 🅲 RUN 3 대비 (시댄스 3컷: 컷8~10) — 스틸 5장

> 매치컷: `cut08_start.png` = **`cut07_end.png` 그대로 재사용**(새 생성 금지). `cut08_end.png`만 편집 생성.

## 컷 8 — 눈 뜨기 + 배경 에스컬레이터 ★매치컷 B
### `cut08_start.png`  ·  = cut07_end.png (재사용, 생성하지 않음)
### `cut08_end.png`  ·  EDIT of cut07_end.png  ·  ref: sheet_character
```
Edit cut07_end.png. Keep this man's pose, framing, head position, facial features, glasses, hair, 2-layer outfit and the lighting from the upper-left 100% identical. Only change two things: (1) open his eyes wide with a surprised look and slightly raised eyebrows; (2) replace the alley background behind him with a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood. Everything else unchanged. Makoto Shinkai anime film style, same color grading.
```

## 컷 9 — 에스컬레이터 탑승
### `cut09_start.png`  ·  ref: sheet_character, sheet_location, cut08_end
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Side full shot, the man stepping onto the escalator, one foot up, one hand reaching for the rubber handrail. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```
### `cut09_end.png`  ·  EDIT of cut09_start.png
```
Edit cut09_start.png. Keep face, glasses, hair, 2-layer outfit, the escalator, framing, lighting from upper-left and color grading 100% identical. Only change: he is now standing fully on a step, riding upward, hand settled on the rubber handrail, the old neighborhood background slid lower behind him. Makoto Shinkai anime style, same color grading.
```

## 컷 10 — 크레인 풀백 리빌 (엔딩)
### `cut10_start.png`  ·  ref: sheet_character, sheet_location, cut09_end
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Medium shot near the man riding the escalator, beginning to crane upward; he starts to break into a warm satisfied grin. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```
### `cut10_end.png`  ·  EDIT of cut10_start.png
```
Edit cut10_start.png. Keep the man's face, warm grin, glasses, hair, 2-layer outfit, the escalator, lighting from upper-left and color grading 100% identical. Only change: the camera has craned far up and back to reveal the whole hillside neighborhood below, the man now small on the escalator, brilliant morning god rays pouring down over the slope. Makoto Shinkai anime style, same color grading.
```

---

## 📦 생성물 목록 (총 22장)

| 그룹 | 파일 |
|---|---|
| 시트 | `sheet_character.png` `sheet_prop.png` `sheet_location.png` |
| RUN1 (컷1~4) | `cut01_start/end` `cut02_start/end` `cut03_start/end` `cut04_start/end` |
| RUN2 (컷5~7) | `cut05_start/end` `cut06_start/end` `cut07_start/end` |
| RUN3 (컷8~10) | `cut08_end`(컷8 start는 cut07_end 재사용) `cut09_start/end` `cut10_start/end` |

> 다음 단계 → `seedance-batches.md` 의 3런(4/3/3)에 위 스틸을 스타트/엔드 프레임으로 투입.
