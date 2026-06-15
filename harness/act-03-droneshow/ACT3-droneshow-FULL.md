# 📦 ACT3-droneshow-FULL.md — 단일 통합본

> `harness/act-03-droneshow` 의 문서를 한 파일로 묶음.
> 화풍=수정된 2D 애니(NOT photorealistic). 핸드오프는 **원문 그대로(verbatim) 투입**(요약 금지).


---

## 📄 00-anchors.md

# §A. 마스터 앵커 — ACT3 「드론쇼 피날레」 (단일 소스)

> 기획서 v2.1 ACT3(컷 41~45). 밤, 탄천 드론쇼. 빛 = LIGHT-NIGHT.
> **스토리:** 드론쇼 시작, 시민들 눈망울에 불빛. 드론이 하늘에 "Thank you, 민선 8기" → 분산 → "Welcome, 민선 9기" → 페이드아웃.

## A-1. STYLE LOCK (repo 공통 · 수정된 2D 애니)
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, brilliant lens flare and soft bloom, glowing night bokeh, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look
```

## A-2. CHARACTER — 군중(실루엣) + 눈동자 클로즈업
- 군중은 실루엣 위주(개별 인물 식별 불필요). 컷42 눈동자 클로즈업은 익명의 시민 눈(드론 불빛 반사).

## A-3. SETTING — 밤 탄천, 드론 군집 밤하늘 + 수면 반사
```
night Tancheon riverside, a large crowd silhouette, hundreds of glowing drones over the stream, city skyline silhouette, reflections on dark water
```

## A-4. LIGHT LOCK — 밤 (LIGHT-NIGHT)
```
deep navy night sky, city lights bokeh, hundreds of glowing colorful drone lights, cool ambient with warm drone glow on faces
```

## A-5. ⚠️ 드론 글자 — 이미지 생성 금지, CapCut 합성
> 컷43 "Thank you, 민선 8기" / 컷44 "Welcome, 민선 9기" 문구는 **키프레임에서 만들지 않는다**(글자 깨짐 방지).
> 드론은 **추상적 빛 군집**으로만 생성하고, **글자·로고·슬로건·AI 제작 표기는 CapCut 텍스트로 합성**.

---
### 특수기법
- 컷41 수면 리플렉션 → 틸트업(드론이 떠오름).
- 컷42 눈동자 익스트림 클로즈업(동공에 드론 불빛, 음악 클라이맥스).
- 컷43→44 빛 입자 분산 → 재집결(슬로우 줌인). 컷45 엔드카드(별 하나 + 시 로고).


---

## 📄 codex-image-requests.md

# 🖼️ GPT 이미지 생성 요청 — ACT3 「드론쇼 피날레」 (총 5장)

> 이미지 작업 전용. 기획서 ACT3(컷 41~45). 빛 = 밤.

## ⛔ 원문 그대로(verbatim) · 실사 금지 · 드론 글자 금지
- **[STYLE]** + **[LIGHT-NIGHT]** 를 각 컷 맨 앞에 그대로 붙여 투입. 요약 금지.
- ⚠️ **드론으로 글자/로고를 만들지 말 것** — 추상적 빛 군집만 생성. `"Thank you, 민선 8기"`·`"Welcome, 민선 9기"`·시 로고·AI 제작 표기는 **CapCut 합성**.

### [STYLE]
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, brilliant lens flare and soft bloom, glowing night bokeh, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look
```
### [LIGHT-NIGHT]
```
deep navy night sky, city lights bokeh, hundreds of glowing colorful drone lights, warm drone glow on faces
```

---
## STEP 1 — 컷 5장 (앞에 [STYLE]+[LIGHT-NIGHT] 붙일 것, 시트 불필요)

### 컷41 · `cut41.png` · 💬 군중 "와아…!"
```
reflection of hundreds of glowing drone lights on dark rippling Tancheon water, inverted city lights, ready to tilt up to the real night sky.
```
### 컷42 · `cut42.png` (눈동자 익스트림 클로즈업)
```
extreme close-up of a human eye, the iris reflecting hundreds of colorful drone lights, backlit eyelashes, a single tear glint.
```
### 컷43 · `cut43.png` (군중 후방 와이드 · 글자 없음)
```
wide shot from behind a large night crowd, hundreds of drones forming an abstract glowing light cluster over the stream, city skyline silhouette. NO letters, NO text — abstract light only (text added later in CapCut).
```
### 컷44 · `cut44.png` (재집결)
```
same night sky, scattered light particles regathering into a bright glowing cluster at center frame, crowd raising phones, slow-zoom feel. NO letters or text.
```
### 컷45 · `cut45.png` (엔드카드)
```
minimal end card, deep navy sky with one twinkling star, soft vignette, empty center for a logo/slogan to be added in CapCut.
```

---
## 생성물 (5장): `cut41`~`cut45`
## 확인: 드론은 추상 빛만(글자 X) · 밤 네이비+드론 글로우 · 컷45 중앙 비워둠(로고 합성용)
## CapCut 합성: 컷43 위 "Thank you, 민선 8기" → 1초 홀드 → 분산 / 컷44 위 "Welcome, 민선 9기" / 컷45 시 로고·슬로건 + "본 영상은 AI로 제작되었습니다"


---

## 📄 conti.md

# §C. 콘티 — ACT3 「드론쇼 피날레」 (5컷 · 기획서 41~45)

| 컷 | 카메라 | 연출·대사 | 기법 | 비고 |
|---|---|---|---|---|
| 41 | 수면 리플렉션→틸트업 | 수면 드론빛→밤하늘. 💬 군중 "와아…!" | 틸트업 | — |
| 42 | 눈동자 익스트림 클로즈업 | 동공에 드론 불빛 (음악 클라이맥스) | 마이크로 모션 | — |
| 43 | 군중 후방 와이드 | 드론 추상 빛 군집 → 1초 홀드 → 분산 | — | **글자=CapCut** "Thank you, 민선 8기" |
| 44 | 슬로우 줌인 | 빛 입자 재집결 | 줌인 | **글자=CapCut** "Welcome, 민선 9기" |
| 45 | 페이드→엔드카드 | 별 하나 반짝, 페이드아웃 | 페이드 | 시 로고·슬로건 + AI 제작 표기(CapCut) |

## 클립 (기획서 S18)
- S18-1=컷41 / S18-2=컷42 / S18-3=컷43~45.
- ⚠️ 드론 글자는 전부 CapCut 합성(이미지 생성 금지). 컷45 중앙은 로고용으로 비워둔다.
- 정서: ACT2 '올려다보는 눈' → 컷42 동공 반사로 클라이맥스 → 메시지 전달 후 페이드.
