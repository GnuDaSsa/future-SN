# 🖼️ GPT 이미지 생성 요청 — EP5 「율동공원 맨발 황톳길」 (총 10장)

> 이미지 작업 전용. 기획서 EP5(컷 30~36). 주인공 C6+C7.

## ⛔ 원문 그대로(verbatim) · 실사 금지
- 아래 **[STYLE]** + 해당 **[LIGHT]** 를 각 컷 프롬프트 **맨 앞에 그대로** 붙여 투입. 요약 금지.

### [STYLE]
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look
```
### [LIGHT]
```
[LIGHT-PM]  warm late-afternoon amber light, golden-hour glow, long warm shadows, key from the upper-left, lake glitter
[TV-GLOW]   dark room lit by cool TV screen glow, rim light on faces  (컷30~31)
```

---
## STEP 0 — 시트 3장 ([STYLE] 앞에 붙여)
### `sheet_c6.png` · ref: 없음
```
Character reference sheet, 16:9, clean light-gray background, model sheet: the same Korean grandmother in her 60s (C6), a floral cardigan, short permed gray hair, cheerful face. Front/side/back + three expressions (neutral, envious, delighted laughing). Identical design. No text labels.
```
### `sheet_c7.png` · ref: 없음
```
Character reference sheet, 16:9, clean light-gray background, model sheet: the same Korean grandfather in his 60s (C7), a checkered shirt, a khaki hiking hat, gruff but warm face. Front/side/back + three expressions (grumpy, surprised, laughing). Identical design. No text labels.
```
### `sheet_claypath.png` · ref: 없음 ([STYLE]+[LIGHT-PM])
```
Wide establishing shot, no characters: a vast smooth red-clay (loess) barefoot walking path in Yuldong Park beside a lake, warm earthy red-orange ground, trees and lake glitter.
```

## STEP 1 — 컷 7장 (앞에 [STYLE]+[LIGHT] 붙일 것)
### 컷30 · `cut30.png` ([TV-GLOW]) · ref: sheet_c6, sheet_c7 · 💬 C6 "아유~ 좋겠다, 저 동네 사람들은."
```
dark living room, silhouetted elderly couple (C6, C7) on a sofa watching a TV showing another city's red-clay barefoot path news segment, TV glow rim light on their faces.
```
### 컷31 · `cut31.png` ([TV-GLOW]) · ref: sheet_c6, sheet_c7 · 💬 C7 "…우리 동네는 뭐 하나 몰라."
```
close-up of the TV glass faintly reflecting the couple's envious faces over the clay-path footage.
```
### 컷32 · `cut32.png` ([LIGHT-PM]) · ref: sheet_c6, sheet_c7, sheet_claypath
```
steadicam-style following composition from behind the couple holding hands on a Yuldong Park lakeside path, amber light, lake glitter.
```
### 컷33 · `cut33.png` (★발 운율숏) · ref: sheet_claypath
```
close-up of elderly feet in walking shoes stopping abruptly on a park path, amber light, small dust puff. (rhymes with the EP1 opening foot shot)
```
### 컷34 · `cut34.png` (웜즈아이 리빌) · ref: sheet_c6, sheet_c7, sheet_claypath · 💬 C6 "여, 여보!! 이거…!!" 💬 C7 "……티비에 나온 그거잖아!"
```
worm's-eye wide reveal from red-clay surface level, the vast red-clay barefoot path, amber god rays, the couple standing astonished in the distance.
```
### 컷35 · `cut35.png` (슬로모션 인서트) · ref: 없음
```
slow-motion style insert, two pairs of shoes flying through the air against a blue-amber sky, playful arc, sun flare between them.
```
### 컷36 · `cut36.png` (★모션 레퍼런스) · ref: sheet_c6, sheet_c7, sheet_claypath · 💬 (함께) "우하하하!!"
```
dynamic side view of the elderly couple barefoot sliding on the red-clay path, clay splashing outward, both laughing like children. (Seedance: feed a sliding/running side-tracking live clip as [Video1])
```

---
## 생성물 (10장): `sheet_c6` · `sheet_c7` · `sheet_claypath` · `cut30`~`cut36`
## 확인: C6(꽃무늬 카디건)·C7(체크셔츠·등산모자) 일치 · 황톳길 붉은톤 · 광원 좌상단(PM)
