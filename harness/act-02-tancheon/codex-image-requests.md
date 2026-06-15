# 🖼️ GPT 이미지 생성 요청 — ACT2 「탄천 수렴」 (총 12장)

> 이미지 작업 전용. 기획서 ACT2(컷 37~40). 빛 = 매직아워. repo 주인공 전원 소집.

## ⛔ 원문 그대로(verbatim) · 실사 금지
- **[STYLE]** + **[LIGHT-MAGIC]** 를 각 컷 맨 앞에 그대로 붙여 투입.
- 인물 등장 컷은 해당 인물의 **EP 시트를 레퍼런스로 첨부**(00-anchors A-2 표 참조) → 얼굴·복장 고정.

### [STYLE]
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look
```
### [LIGHT-MAGIC]
```
magic hour, pink and purple gradient sky, glowing horizon, warm rim light, soft golden backlight from the upper-left
```

---
## STEP 0 — 시트 1장 (+ 각 인물 시트는 기존 EP에서 재사용)
### `sheet_tancheon.png` · ref: 없음 ([STYLE]+[LIGHT-MAGIC])
```
Wide establishing shot, no characters: the Tancheon stream and Seongnam city skyline at magic hour, a grassy riverside lawn (둔치), epic Shinkai clouds reflected on the water.
```

## STEP 1 — 컷 (앞에 [STYLE]+[LIGHT-MAGIC] 붙일 것)

### 컷37 · `cut37.png` · ref: sheet_tancheon
```
extreme wide cityscape of the Tancheon stream and Seongnam skyline at magic hour, pink-purple gradient sky, epic clouds, city lights just starting to twinkle.
```

### 컷38 휩팬 몽타주 — 3장 (Seedance 멀티샷 1클립으로 묶음)
- `cut38a.png` · ref: EP1 sheet_character(어린이) — `the EP1 elementary school child walking briskly toward the stream at dusk, red backpack`
- `cut38b.png` · ref: ep3-solomon sheet_c3·sheet_c4 — `the white compact car (C3 driving, C4 in passenger seat) driving toward the stream, magic-hour windshield reflection`
- `cut38c.png` · ref: ep5-clay sheet_c6·sheet_c7 — `the elderly couple (C6, C7) walking hand in hand toward the stream`
> (원하면 EP2 여성·C5도 같은 방식으로 추가 컷 생성)

### 컷39 · `cut39.png` · ref: sheet_tancheon · 💬 아이 "엄마! 시작한대!!"
```
high-angle shot of the riverside lawn filling with citizen silhouettes, picnic mats, balloons, children, magic-hour glow on the water.
```

### 컷40 클로즈업 릴레이 — 인물별 1장씩 (순서: 어린이→여성→C3→C4→C5→C6→C7)
> 공통 블록(각 인물 시트를 ref로):
```
close-up of [해당 인물] looking up at the sky with quiet anticipation, magic-hour light on the face, gentle breeze in the hair.
```
- `cut40_kid.png` (ref: EP1 sheet_character) · `cut40_woman.png` (ref: EP2 sheet_character) · `cut40_c3.png` · `cut40_c4.png` · `cut40_c5.png` · `cut40_c6.png` · `cut40_c7.png`

---
## 생성물: `sheet_tancheon` · `cut37` · `cut38a/b/c` · `cut39` · `cut40_*`(7) = 12장
## 확인: 각 인물 본인 EP 시트와 동일 · 매직아워 핑크퍼플 통일 · 광원 좌상단 백라이트
