# 📦 ACT2-tancheon-FULL.md — 단일 통합본

> `harness/act-02-tancheon` 의 문서를 한 파일로 묶음.
> 화풍=수정된 2D 애니(NOT photorealistic). 핸드오프는 **원문 그대로(verbatim) 투입**(요약 금지).


---

## 📄 00-anchors.md

# §A. 마스터 앵커 — ACT2 「탄천 수렴」 (단일 소스)

> 기획서 v2.1 ACT2(컷 37~40). 해 질 녘, 다섯 이야기 주인공이 탄천으로 모여든다. 빛 = LIGHT-MAGIC(매직아워).
> **repo 업데이트:** 수렴 인물은 repo 실제 주인공 = EP1 어린이 · EP2 시민여성 · C3 · C4 · C5 · C6 · C7.

## A-1. STYLE LOCK (repo 공통 · 수정된 2D 애니)
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look
```

## A-2. CHARACTER ROSTER — 각 EP 시트를 레퍼런스로 재사용 (재설계 금지)
| 인물 | 시트 위치 |
|---|---|
| EP1 어린이(빨간 책가방) | `../act-01-discovery/ep1-escalator/` → `sheet_character.png` |
| EP2 시민여성(베이지 트렌치) | `../act-01-discovery/ep2-trashbin/` → `sheet_character.png` |
| C3 청년남 / C4 청년녀 | `../act-01-discovery/ep3-solomon/` → `sheet_c3.png` / `sheet_c4.png` |
| C5 환자(마스크·후드) | `../act-01-discovery/ep4-flu/` → `sheet_c5.png` |
| C6 할머니 / C7 할아버지2 | `../act-01-discovery/ep5-clay/` → `sheet_c6.png` / `sheet_c7.png` |
> 각 인물은 본인 EP 시트를 그대로 투입해 얼굴·복장 고정. 매직아워 빛만 통일.

## A-3. SETTING — 탄천 둔치 + 성남 스카이라인
```
the Tancheon stream and the Seongnam city skyline, a grassy riverside lawn (둔치) with picnic mats and balloons
```

## A-4. LIGHT LOCK — 매직아워 (LIGHT-MAGIC)
```
magic hour, pink and purple gradient sky, glowing horizon, warm rim light, soft golden backlight from the upper-left
```

---
### 특수기법
- **컷38 휩팬 몽타주:** 여러 인물이 같은 방향으로 — Seedance 멀티샷 1클립(휩팬 전환). 통제 실패 시 개별 생성 후 CapCut 휩팬.
- **컷40 클로즈업 릴레이:** 인물별 하늘 올려다보는 클로즈업을 순서대로 — 각 인물 시트 일괄 투입 멀티샷.


---

## 📄 codex-image-requests.md

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


---

## 📄 conti.md

# §C. 콘티 — ACT2 「탄천 수렴」 (4컷 · 기획서 37~40)

| 컷 | 카메라 | 연출·대사 | 기법 | ref |
|---|---|---|---|---|
| 37 | 익스트림 와이드 | 탄천+스카이라인, 핑크퍼플. 음악 빌드업 | — | tancheon |
| 38 | 휩팬 몽타주 | 어린이·차(C3·C4)·노부부 모두 같은 방향 | ★멀티샷 1클립 | 각 EP 시트 |
| 39 | 부감(둔치) | 모여드는 실루엣·돗자리·풍선. 💬 아이 "엄마! 시작한대!!" | — | tancheon |
| 40 | 클로즈업 릴레이 | 어린이→여성→C3·C4→C5→C6·C7 하늘 응시 | ★멀티 레퍼런스 멀티샷 | 각 EP 시트 |

## 클립 (기획서 S17)
- S17-1 = 컷37+39 / S17-2 = 컷38+40(휩팬+릴레이).
- 휩팬 타이밍 통제 실패 시: 개별 생성 → CapCut 휩팬 트랜지션 폴백.
- 정서: 다섯 이야기가 한 곳으로 — '눈(올려다봄)' 모티프가 ACT3 드론 반사로 이어짐.
