# 📦 EP4 「시민 무료 독감 예방접종」 — 단일 통합본

> harness/act-01-discovery/ep4-flu/ 의 문서를 한 파일로 묶음 (앵커·콘티·코덱스 핸드오프).
> 화풍=수정된 2D 애니, 핸드오프는 **원문 그대로(verbatim) 투입** + [STYLE]/[LIGHT] 토큰을 각 컷 앞에 붙일 것. 한글 직접 렌더(성남시민 무료 독감 예방접종).

---

# 1) 마스터 앵커

# §A. 마스터 앵커 — EP4 「시민 무료 독감 예방접종」 (단일 소스)

> 기획서 v2.1 EP4(컷 23~29). 시민 무료 독감 예방접종 시책. 주인공 C5. 빛 = LIGHT-NOON→PM.
> **스토리:** 독감 걸린 시민이 병원 접수대에 카드를 내밀지만, 돌아온 건 카드와 '무료' 안내문. 동그래진 눈이 웃는 눈이 되어 가벼운 발걸음으로 나선다.

## A-1. STYLE LOCK (repo 공통 · 수정된 2D 애니)
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look
```

## A-2. CHARACTER LOCK — 환자 시민 C5
```
the same Korean man in his 30s (C5), a white face mask, a gray hooded zip-up, tired feverish eyes
```
식별: 흰 마스크 · 회색 후드집업 · 열에 들뜬 지친 눈. (마지막 컷29에서 마스크 위 눈이 웃음·후드 내림)

## A-3. SETTING — 동네 의원(클리닉) 실내 + 컷29 출입구 역광
```
inside a small tidy Korean neighborhood clinic, clean white reception counter, soft clinic interior bokeh
```

## A-4. LIGHT LOCK — 정오→오후 (LIGHT-NOON, 컷29만 PM 앰버)
```
[LIGHT-NOON] high noon daylight through clinic windows, clean white highlights, soft warm key from the upper-left
[LIGHT-PM]   (컷29) warm late-afternoon amber light, golden-hour sun flare at the clinic door
```

## A-5. ASSET — 한글 안내문 (GPT Image 2 직접 렌더링)
```
a printed notice reading exactly "성남시민 무료 독감 예방접종" in clean Korean typography
```
> 🇰🇷 영상화 후 글자 깨지면 CapCut 폴백. 컷26 키 카피.

---
### 특수기법
- **컷28 레킹포커스:** 안내문(전경 블러) → C5 눈(초점) — 단독 키프레임(초점 분리)로 생성, Seedance에서 rack focus.


---

# 2) 콘티 개요

# §C. 콘티 — EP4 「무료 독감 예방접종」 (7컷 · 기획서 23~29)

| 컷 | 카메라 | 연출·대사 | 기법 | ref |
|---|---|---|---|---|
| 23 | POV(열에 들뜬) | 흐릿한 병원 간판. 💬 C5 "으으…" | 더블노출 블러 | c5·clinic |
| 24 | 톱다운 인서트 | 카드 내미는 손. 💬 "접종… 얼마예요…?" | — | c5·clinic |
| 25 | 리버스 오버숄더 | 마스크 위 지친 눈 | — | c5·clinic |
| 26 | 인서트 클로즈업 | 안내문 **"성남시민 무료 독감 예방접종"**. 💬 간호사 "성남시민이세요? 그럼 무료예요." | 한글 렌더 | clinic |
| 27 | 매크로 | 두 손에 받쳐 돌아오는 카드 | — | c5 |
| 28 | 레킹포커스 | 안내문→눈, 동그래짐. 💬 "…네? 무료요?" | ★rack focus | c5 |
| 29 | 실루엣 역광 와이드 | 햇살 속 가벼운 발걸음. 💬 "감사합니다!" | LIGHT-PM | c5 |

## 클립 (기획서 S14)
- S14-1 = 컷23~25 멀티샷 / S14-2 = 컷26~29 멀티샷.
- 정서 라임: **지친 눈(23·25·28 전) → 동그래진 눈(28) → 웃는 눈(29)**.


---

# 3) GPT 이미지 핸드오프

# 🖼️ GPT 이미지 생성 요청 — EP4 「무료 독감 예방접종」 (총 9장)

> 이미지 작업 전용. 기획서 EP4(컷 23~29). 주인공 C5.

## ⛔ 원문 그대로(verbatim) · 실사 금지
- 아래 **[STYLE]** 와 **[LIGHT]** 블록을 각 컷 프롬프트 **맨 앞에 그대로 이어붙여** 투입한다. 요약·정규화 금지(=실사 방지).
- `NOT photorealistic / not a photo / not 3D / not live-action` 네거티브 포함된 [STYLE] 유지.
- 🇰🇷 한글 안내문 문구 `"성남시민 무료 독감 예방접종"` 정확히 렌더(깨지면 CapCut 폴백).

### [STYLE] (맨 앞 고정)
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look
```
### [LIGHT-NOON] (컷23~28) / [LIGHT-PM] (컷29)
```
[LIGHT-NOON] high noon daylight through clinic windows, clean white highlights, soft warm key from the upper-left
[LIGHT-PM]   warm late-afternoon amber light, golden-hour sun flare
```

---
## STEP 0 — 시트 2장
### `sheet_c5.png` · 레퍼런스: 없음 ([STYLE] 앞에 붙여)
```
Character reference sheet, 16:9 single sheet, clean light-gray background, model sheet layout: the same Korean man in his 30s (C5), a white face mask, a gray hooded zip-up, tired feverish eyes. Front / side / back views in a row, plus three expressions below — sick/weary, surprised wide eyes, relieved smiling eyes (mask on). Identical design in every view. No text labels.
```
### `sheet_clinic.png` · 레퍼런스: 없음 ([STYLE]+[LIGHT-NOON])
```
Wide establishing interior of a small tidy Korean neighborhood clinic, no characters: clean white reception counter, waiting chairs, soft interior bokeh.
```

## STEP 1 — 컷 7장 (앞에 [STYLE]+[LIGHT] 붙일 것)

### 컷23 · `cut23.png` · ref: sheet_c5, sheet_clinic · 💬 C5 "으으…"
```
blurry feverish first-person POV approaching a Korean clinic entrance sign, hazy double-exposure blur, swaying.
```
### 컷24 · `cut24.png` · ref: sheet_c5, sheet_clinic · 💬 "접종… 얼마예요…?"
```
top-down insert of C5's hand weakly placing a credit card on a clean white reception counter.
```
### 컷25 · `cut25.png` · ref: sheet_c5, sheet_clinic
```
reverse over-the-shoulder from behind a nurse, the masked man C5 facing camera with tired feverish eyes, clinic bokeh. (keep C5 consistent with reference)
```
### 컷26 · `cut26.png` · ref: sheet_clinic · 💬 간호사 "성남시민이세요? 그럼 무료예요."
```
insert close-up of a printed notice held by a nurse's hand reading exactly "성남시민 무료 독감 예방접종" in clean Korean typography. (keep the Korean text exact and legible)
```
### 컷27 · `cut27.png` · ref: sheet_c5
```
macro shot, shallow depth of field, a credit card returned respectfully on two open palms, warm bokeh.
```
### 컷28 · `cut28.png` (★레킹포커스) · ref: sheet_c5
```
close-up of C5's eyes above the mask, the "성남시민 무료 독감 예방접종" notice paper blurred in the foreground, his eyes widening in surprise (focus on the eyes). 💬 "…네? 무료요?"
```
### 컷29 · `cut29.png` (앞에 [STYLE]+[LIGHT-PM]) · ref: sheet_c5 · 💬 "감사합니다!"
```
backlit silhouette wide shot, C5 stepping out of the clinic doors into warm afternoon sun flare, hood pushed back, a light relieved step.
```

---
## 생성물 (9장): `sheet_c5` · `sheet_clinic` · `cut23`~`cut29`
## 확인: C5(마스크·회색후드) 일치 · 컷26 한글 또렷 · 컷28 초점=눈 · 광원 좌상단
