# 🖼️ GPT 이미지 생성 요청 — EP1 「은행동 언덕 할아버지」 (총 13장)

> 이 문서 하나만 보고 순서대로 이미지를 생성하면 된다. **이미지 작업 전용.**

## 작업 규칙 (공통)
1. **순서 고정:** 시트 3장 먼저(STEP 0) → 컷 10장(STEP 1) 순서대로.
2. **레퍼런스 첨부:** 각 항목의 `레퍼런스:`에 적힌 이미지를 **첨부 이미지로 넣고** 생성한다. 인물 얼굴·복장·색감을 그 레퍼런스에 맞춘다. (← 일관성의 핵심)
3. **컷 8은 새로 생성하지 말고** 컷 7 이미지를 **편집(edit)** 한다.
4. 모든 이미지: **16:9**, 프롬프트의 화풍·인물·광원(좌상단) 문구를 **그대로** 유지, **텍스트/라벨 없음**.

---

# STEP 0 — 기준 시트 3장 (가장 먼저)

### 1. `sheet_character.png` (최우선)
- 레퍼런스: 없음
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Character reference sheet, 16:9 single sheet, clean light-gray background, model sheet layout: the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. Show the same man in one consistent design across: full-body front view, full-body side profile (facing right), 3/4 back view, and a row of three head close-ups below — neutral expression, exhausted/breathless expression, and a warm satisfied smile. Identical face, hair, glasses, and outfit in every view. Consistent proportions. No text labels.
```

### 2. `sheet_prop.png`
- 레퍼런스: `sheet_character.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, soft lens flare, high color saturation, cinematic film still, 16:9. Prop reference sheet, clean light-gray background, no text labels: (1) a single wooden cane, close-up, worn smooth grip, natural wood grain, the same cane the elderly man holds; (2) a beige zip-up windbreaker laid flat, close-up of fabric and zipper, with a brown knit vest beside it showing the two-layer combination. Consistent colors and materials.
```

### 3. `sheet_location.png`
- 레퍼런스: 없음
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Wide establishing shot, no characters: a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```

> 🔎 시트 검수: 둥근 얇은테 안경 · 베이지바람막이+갈색조끼 2겹 · 오른손 지팡이 · 광원 좌상단. 통과하면 STEP 1.

---

# STEP 1 — 컷 10장

### 컷 1 · `cut01.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Extreme high-angle drone bird's-eye view; the man a tiny distant figure; city-scale vista over the neighborhood. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Keep the man, alley layout, light direction and color grading consistent with the attached references.
```

### 컷 2 · `cut02.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `sheet_prop.png`, `cut01.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Worm's-eye low angle, extreme close-up of feet; only the brown worn sneakers and the cane tip in frame; mid-step on the slope. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Keep the shoes, cane, alley, light direction and color grading consistent with the attached references.
```

### 컷 3 · `cut03.png`
- 레퍼런스: `sheet_character.png`, `sheet_prop.png`, `sheet_location.png`, `cut02.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Extreme close-up of the right hand gripping the wooden cane; tendons standing out on the back of the aged hand, fingers tight around the worn cane grip. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Keep the hand, cane, light direction and color grading consistent with the attached references.
```

### 컷 4 · `cut04.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut03.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Low angle looking down at the ground; the man's toes and a long cast shadow stretching down the slope; part of his bowed silhouette and lowered head visible at the top of frame. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Keep the outfit, cane, light direction and color grading consistent with the attached references.
```

### 컷 5 · `cut05.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut04.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Side medium shot, close-up of the strained face; beads of sweat, furrowed brow, mouth slightly open catching his breath. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Keep the face, glasses, hair, 2-layer outfit, light direction and color grading consistent with the attached references.
```

### 컷 6 · `cut06.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut05.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Rear wide full shot with 24mm wide-angle distortion; the slope exaggerated into an endless climb, the man a small back-view figure low in frame. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Far up the slope, faint in the morning mist, a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood — distant and barely noticeable. Keep the man, alley, light direction and color grading consistent with the attached references.
```

### 컷 7 · `cut07.png`  (배경 = 골목, 눈 감음)
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut05.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Side close-up of the face, eyes slowly closing in a tired exhale; his warm breath scattering as a faint plume in the cool dawn air. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Keep the face, glasses, hair, 2-layer outfit, light direction and color grading consistent with the attached references.
```

### 컷 8 · `cut08.png`  ★ 컷7 이미지 편집 (신규 생성 아님)
- 편집 입력: `cut07.png`  /  보조 레퍼런스: `sheet_character.png`
```
Edit cut07.png. Keep this man's pose, framing, head position, facial features, glasses, hair, 2-layer outfit and the lighting from the upper-left 100% identical. Only change two things: (1) open his eyes wide with a surprised look and slightly raised eyebrows; (2) replace the alley background behind him with a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood. Everything else unchanged. Makoto Shinkai anime film style, same color grading.
```

### 컷 9 · `cut09.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut08.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Side full shot, the man stepping onto and riding the escalator; one hand resting on the rubber handrail, the old neighborhood background sliding past behind him. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Keep the face, glasses, hair, 2-layer outfit, escalator, light direction and color grading consistent with the attached references.
```

### 컷 10 · `cut10.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut09.png`
```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9. Crane pull-back rising reveal of the whole hillside neighborhood below; the man wears a warm satisfied grin, brilliant morning light rays pouring down over the slope. the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes. a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward. a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood. early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights. Keep the face, glasses, hair, 2-layer outfit, escalator, light direction and color grading consistent with the attached references.
```

---

## 생성물 (13장)
`sheet_character` · `sheet_prop` · `sheet_location` · `cut01`~`cut10`

## 컷마다 확인
- 둥근 **얇은테** 안경 · 베이지바람막이+갈색조끼 **2겹** · **오른손** 나무지팡이 · 짧은 흰머리
- 광원 **좌상단(upper-left)**
- 컷 6/9/10 에스컬레이터 포함, 컷 7 배경은 골목 / 컷 8 배경은 에스컬레이터
