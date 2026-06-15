# 📦 EP1-escalator-FULL.md — 단일 통합본

> `harness/act-01-discovery/ep1-escalator` 의 문서를 한 파일로 묶음.
> 화풍=수정된 2D 애니(NOT photorealistic). 핸드오프는 **원문 그대로(verbatim) 투입**(요약 금지).


---

## 📄 00-anchors.md

# §A. 마스터 앵커 블록 (MASTER ANCHORS) — 단일 소스

> 이 파일이 **유일한 원본**이다. 컷 프롬프트(`shots/cut-NN.md`)·코덱스 핸드오프의 영어 LOCK 문구는
> 모두 여기서 복사된 것이며, 토씨 하나 바꾸지 않는다. 고칠 일이 생기면 **여기만 고치고** 전체를 다시 조립한다.
>
> **개정 배경:** 실제 시설은 은행동 노인용이 아니라 **중원구 금광동 성남동초등학교 앞 경사로**에 설치된
> 성남시 최초 **도로 에스컬레이터(길이 28m·상행/하행 1개소씩)** 로, **성남동초·성남동중 학생 통학**이 핵심 대상.
> → 주인공을 **성남동초 초등학생**으로, 장소를 **학교 앞 경사 계단길**로 교체. (콘티 비트도 등굣길로 재구성)

---

## A-1. STYLE LOCK — 화풍 (절대 변경 금지)

```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look
```

## A-2. CHARACTER LOCK — 초등학생 (C1)

> 한 단어만 달라져도 얼굴/복장이 흔들린다. **글자 단위로 동일**하게 유지할 것.

```
the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands
```

**식별 디테일 (일관성 닻 — 시트·체크리스트에 반드시 포함):**
- **큰 빨간 책가방**, 양어깨로 멤 (메인 식별 닻)
- 가슴에 **둥근 노란 안전 명찰(배지)**
- **네이비 패딩 후드 점퍼** + 흰 카라 셔츠 (색 대비 포인트)
- 까만 짧은 머리 + 살짝 뻗친 가마(cowlick), 흰 운동화, 회색 반바지

## A-3. LOCATION LOCK — 금광동 성남동초 앞 경사로

```
a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill
```

## A-4. LIGHT LOCK — 등굣길 아침

```
clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood
```

> ⚠️ 빛 방향은 **항상 화면 좌상단(upper-left)**. 컷마다 광원 위치가 바뀌면 같은 시간대로 보이지 않는다.

## A-5. ESCALATOR ASSET LOCK — 도로 에스컬레이터 (컷6 원경 도입 → 컷8·9·10 본격 등장)

```
Seongnam's first outdoor road escalator beside the school staircase, two parallel escalators running side by side (one ascending, one descending), about 28 meters long climbing the slope, clean stainless-steel steps, glass side panels, a sloped transparent weather canopy overhead, rubber handrails, yellow safety markings, blending into the old school-zone neighborhood
```

---

### 어느 컷에 어떤 LOCK이 들어가는가 (요약)

| LOCK | 들어가는 컷 |
|---|---|
| A-1 STYLE | **전 컷 (1–10)** |
| A-2 CHARACTER | **전 컷 (1–10)** |
| A-3 LOCATION | **전 컷 (1–10)** |
| A-4 LIGHT | **전 컷 (1–10)** — 광원 항상 upper-left |
| A-5 ESCALATOR | 컷 6(원경 한 줄), 8, 9, 10 |

> 컷별 완성 프롬프트는 `shots/cut-01.md` ~ `cut-10.md`. 워크플로우는 `03-workflow.md`.


---

## 📄 01-sheets.md

# §B. 기준 시트 — 최우선 생성물 (전 공정의 닻)

> **순서가 중요하다.** 아래 시트들을 *먼저* 확정한 뒤에 10컷 키프레임을 만든다.
> 캐릭터 시트가 흔들리면 10컷 전체가 흔들린다. 시트 = 모든 컷의 레퍼런스 슬롯에 매번 투입되는 기준판.

생성 도구: GPT Image 2 (또는 이 세션의 `runway_mcp generate_image`).

---

## B-1. 캐릭터 시트 (최우선 · 4뷰 + 표정 3종) ▶ COPY BLOCK

```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look.
Character reference sheet, 16:9 single sheet, clean light-gray background, model sheet layout:
the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands.
Show the same boy in one consistent design across: full-body front view, full-body side profile (facing right), 3/4 back view showing the red backpack, and a row of three head close-ups below — neutral expression, exhausted/out-of-breath expression, and a bright delighted smile. Identical face, hair, jacket, badge and backpack in every view. Consistent proportions. No text labels.
```

**🔎 생성 후 검수 (하나라도 어긋나면 재생성):**
- ☐ **빨간 책가방**이 4뷰 모두 같은 모양·색인가 (양어깨로 멤)
- ☐ 가슴 **노란 안전 명찰**이 일관되게 있는가
- ☐ 네이비 패딩 후드 + 흰 카라 셔츠 **색 대비**가 4뷰 동일한가
- ☐ 까만 짧은 머리·가마(cowlick)·흰 운동화가 4뷰 동일한가
- ☐ 표정 3종(중립 / 헉헉 지침 / 환한 미소)이 **같은 얼굴**인가

---

## B-2. 소품 시트 (보조 · 클로즈업 컷 디테일 일관성용) ▶ COPY BLOCK

> 컷2·3(발·가방끈 클로즈업)에서 소품 디테일이 흔들리지 않게 단독 클로즈업을 미리 확정.

```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, lush hand-painted detail, brilliant lens flare and soft bloom, vivid highly-saturated colors, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action; keep Shinkai's rich detail, not the plain flat Studio Ghibli look.
Prop reference sheet, clean light-gray background, no text labels:
(1) a large bright red school backpack, close-up, padded shoulder straps, the same backpack the boy wears;
(2) a navy padded hooded school jacket laid flat with a white collared shirt and a round yellow safety name-tag badge beside it, showing the layered school outfit;
(3) a pair of small white sneakers.
Consistent colors and materials.
```

---

## B-3. 로케이션 키 비주얼 (보조 · 배경 기준판 = 스타일 보드) ▶ COPY BLOCK

> 모든 컷의 레퍼런스 슬롯2로 재투입. 학교 앞 경사 계단길 레이아웃·무드·광원 방향의 기준.

```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look.
Wide establishing shot, no characters:
a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill.
clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood.
```

**🔎 검수:** ☐ 광원이 **upper-left** 인가  ☐ 계단+경사로가 위로 가파르게 오르는가  ☐ 노란 어린이보호구역 펜스·횡단보도·학교 정문이 보이는가

---

> 시트 확정 후 → `shots/cut-01.md` 부터 키프레임 생성. 레퍼런스 투입 규칙은 `03-workflow.md` §D-1 참조.


---

## 📄 02-matchcut-7-8.md

# §D-2. 매치컷 (컷7 → 컷8) 전용 절차 — 하네스에서 가장 중요

> 눈 질끈 감기(컷7) → 눈 번쩍 뜨기(컷8) 사이에 배경이 계단길 → 도로 에스컬레이터로 바뀌는 매치컷.
> 핵심: 컷8을 **새로 생성하지 말고**, 컷7 이미지를 **정밀편집**해 픽셀 단위로 정합시킨다.

---

## 절차

### 1) 컷7 키프레임 확정
- `shots/cut-07.md` COPY BLOCK으로 생성 (눈 질끈 감음, **계단길** 배경).
- 프레이밍·머리 위치·광원(upper-left)을 만족할 때까지 재생성. **이 이미지가 매치컷의 마스터.**

### 2) 컷7 이미지를 정밀편집 → 컷8 (GPT Image 2 edit)
입력 = 컷7 확정 키프레임. 편집 지시문 (`shots/cut-08.md`와 동일):

```
Keep this boy's pose, framing, head position, facial features, hair, navy hooded jacket, yellow badge, red backpack and the lighting from the upper-left 100% identical. Only change two things: (1) open his eyes wide with a surprised look and raised eyebrows; (2) replace the staircase background behind him with Seongnam's first outdoor road escalator beside the school staircase, two parallel escalators running side by side (one ascending, one descending), about 28 meters long climbing the slope, clean stainless-steel steps, glass side panels, a sloped transparent weather canopy overhead, rubber handrails, yellow safety markings, blending into the old school-zone neighborhood. Everything else unchanged. 2D anime illustration style of a Makoto Shinkai anime film, hand-drawn anime, not photorealistic, not a photo, same color grading.
```

→ 컷8이 컷7과 픽셀 단위로 정합 → 매치컷이 깔끔하게 끊긴다.

### 3) Seedance 영상화 (E4 클립)
- **컷7 키프레임 = first frame / 컷8 키프레임 = last frame** 지정.
- 프롬프트: "눈 감았다 뜨는 사이 배경이 계단길에서 도로 에스컬레이터로 전환".
- 고정 문구 포함: `maintain the same elementary school boy's face from the reference, 2D Makoto Shinkai anime illustration, hand-drawn anime, not photorealistic, not a photo, consistent lighting from upper-left`

---

## 검수
- ☐ 컷7·컷8에서 **머리 위치·프레임·광원**이 일치하는가 (겹쳐 보면 윤곽이 맞는가)
- ☐ 컷8에서 바뀐 것이 **눈(뜸/놀란 눈썹)과 배경(에스컬레이터)뿐**인가
- ☐ 얼굴·머리·네이비 점퍼·노란 명찰·빨간 가방이 컷7과 동일한가
- ☐ "어?!" 표정 싱크가 맞는가


---

## 📄 03-workflow.md

# §D. 일관성 유지 워크플로우 (하네스 작동 방식)

---

## D-1. 키프레임 생성 규칙 (GPT Image 2)

모든 컷 = 해당 `shots/cut-NN.md`의 **COPY BLOCK** (STYLE+CHARACTER+LOCATION+LIGHT(+ESCALATOR)+구도+레퍼런스 지시가 이미 조립됨)
\+ **레퍼런스 이미지 3슬롯** 투입:

| 슬롯 | 투입물 | 지시문(이미 COPY BLOCK에 포함) |
|---|---|---|
| 슬롯1 | §B-1 캐릭터 시트 | "keep the boy's face, hair, navy jacket, yellow badge and red backpack exactly as reference 1" |
| 슬롯2 | §B-3 로케이션 키 비주얼 | "use reference 2 for the school-street layout, mood and light direction; repaint in the same style" |
| 슬롯3 | **직전 확정 컷 키프레임** | "match the color grading and rendering style of reference 3" ← 컷이 진행될수록 색감 드리프트 방지 |

> 슬롯3은 컷이 누적될수록 색감이 한쪽으로 흐르는 것을 막는 장치다. 컷1은 슬롯3 없음.

---

## D-2. 매치컷 (컷7→8)
→ 별도 문서 `02-matchcut-7-8.md` 참조. (가장 중요)

---

## D-3. Seedance 영상화 규칙
- 모든 클립의 [Image] 슬롯에 **해당 컷 키프레임 + §B-1 캐릭터 시트**를 함께 투입.
- 고정 문구 항상 포함:
  ```
  maintain the same elementary school boy's face from the reference, 2D Makoto Shinkai anime illustration, hand-drawn anime, not photorealistic, not a photo, consistent lighting from upper-left
  ```
- 인물 등장 클립은 얼굴이 가장 잘 보이는 키프레임을 [Image1](기준 프레임)으로.

---

## D-4. 색감 드리프트 방지 (10컷 누적 오차 차단)
- 컷1~6: §A-4 빛을 그대로.
- 컷7~10: 미소·리빌로 가며 **채도만 살짝 상승**(연출 의도) — 단 **광원 방향·색온도는 유지**.
- 편집(CapCut): EP1 전용 **단일 LUT**를 10컷에 일괄 적용해 톤 통일.
- 의심되면 10컷 키프레임을 한 화면에 나란히 놓고 '같은 학생·같은 아침인가' 육안 검수.

---

## D-5. 생성 클립 단위 (10컷 → 5클립 권장)

| 클립 | 컷 | 방식 |
|---|---|---|
| **E1** | 1 | 단독 (부감 오프닝) |
| **E2** | 2~5 | 멀티샷 (발→가방끈→시선→표정, 등굣길 고생 빌드업) |
| **E3** | 6 | 단독 (광각 뒷모습) |
| **E4** | 7→8 | **시작/끝 프레임 매치컷** |
| **E5** | 9~10 | 멀티샷 (탑승 → 크레인 리빌) |

> 시댄스 4/3/3 큐 운영은 `seedance-batches.md` 참조.

---

## (선택) 이 세션에서 바로 생성하기 — Runway MCP
COPY BLOCK은 도구 비종속이라, 원하면 이 세션의 `runway_mcp` 도구로 바로 투입 가능:
- `generate_image` — 시트/키프레임 생성 (레퍼런스 이미지 첨부 지원)
- `generate_video` — 키프레임 → 클립
- `generate_multishot_video` — E2/E5 같은 멀티샷 클립

> 자동 생성은 기본적으로 하지 않는다. 필요하면 운영자가 명시적으로 요청.


---

## 📄 04-checklist.md

# §E. 빠른 체크리스트 (생성 전 · 컷마다 · 완성 후)

---

## 생성 전 (한 번)
- ☐ §B-1 캐릭터 시트 확정 (4뷰 + 표정 3종 일관성 OK) — `01-sheets.md`
- ☐ §B-3 로케이션 키 비주얼 1장 확정 (학교 앞 경사 계단길)
- ☐ (권장) §B-2 소품 시트(빨간 책가방·점퍼·명찰) 확정
- ☐ §A 앵커 5종이 단일 소스 `00-anchors.md`에 세팅되어 있는가

## 컷마다 (10회 반복)
- ☐ COPY BLOCK에 **STYLE · CHARACTER · LOCATION · LIGHT** 4개 LOCK이 모두 들어갔는가
- ☐ 컷 6/8/9/10이면 **ESCALATOR** 가 들어갔는가
- ☐ 레퍼런스 3슬롯(캐릭터 시트 · 로케이션 · 직전 컷)을 투입했는가
- ☐ **광원이 좌상단(upper-left)** 인가
- ☐ **빨간 책가방 · 노란 명찰 · 네이비 점퍼 · 흰 운동화**가 일치하는가

## EP1 완성 후
- ☐ 10컷 키프레임을 나란히 놓고 **동일인 · 동일 아침** 검수
- ☐ 컷7·8 **매치컷 프레임 정합** 확인 (`02-matchcut-7-8.md`)
- ☐ EP1 **단일 LUT**로 톤 통일 (`03-workflow.md` D-4)

---

### 식별 디테일 닻 (매 컷 눈으로 대조)
- **큰 빨간 책가방** (양어깨로 멤) — 메인 닻
- 가슴 **둥근 노란 안전 명찰(배지)**
- **네이비 패딩 후드 점퍼** + 흰 카라 셔츠 (색 대비)
- 까만 짧은 머리 + 살짝 뻗친 가마(cowlick), 흰 운동화, 회색 반바지


---

## 📄 codex-image-requests.md

# 🖼️ GPT 이미지 생성 요청 — EP1 「금광동 성남동초 등굣길 어린이」 (총 13장)

> 이 문서 하나만 보고 순서대로 이미지를 생성하면 된다. **이미지 작업 전용.**
> 소재: 성남시 최초 도로 에스컬레이터(성남동초 앞 경사 계단길, 28m·상행/하행). 주인공: 성남동초 초등학생.

## ⛔ 가장 중요 — 프롬프트 원문 그대로 쓸 것
- **각 코드블록을 요약·정규화·의역하지 말고 그대로(verbatim) 이미지 모델에 투입한다.** (프롬프트를 "cinematic high-detail anime" 식으로 줄이면 **실사로 빠진다** — 실제로 그렇게 망가졌음)
- 맨 앞 **STYLE 문구(2D anime illustration…)를 그대로 선두에** 둘 것. `NOT photorealistic / not a photo / not 3D / not live-action` 네거티브도 반드시 포함.
- 결과가 사진처럼 나오면 STYLE 문구가 희석된 것 — 원문 그대로 다시 투입.

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
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Character reference sheet, 16:9 single sheet, clean light-gray background, model sheet layout: the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. Show the same boy in one consistent design across: full-body front view, full-body side profile (facing right), 3/4 back view showing the red backpack, and a row of three head close-ups below — neutral expression, exhausted/out-of-breath expression, and a bright delighted smile. Identical face, hair, jacket, badge and backpack in every view. Consistent proportions. No text labels.
```

### 2. `sheet_prop.png`
- 레퍼런스: `sheet_character.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, lush hand-painted detail, brilliant lens flare and soft bloom, vivid highly-saturated colors, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action; keep Shinkai's rich detail, not the plain flat Studio Ghibli look. Prop reference sheet, clean light-gray background, no text labels: (1) a large bright red school backpack, close-up, padded shoulder straps, the same backpack the boy wears; (2) a navy padded hooded school jacket laid flat with a white collared shirt and a round yellow safety name-tag badge beside it, showing the layered school outfit; (3) a pair of small white sneakers. Consistent colors and materials.
```

### 3. `sheet_location.png`
- 레퍼런스: 없음
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Wide establishing shot, no characters: a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood.
```

> 🔎 시트 검수: 빨간 책가방 · 노란 안전명찰 · 네이비 패딩 후드 · 흰 운동화 · 광원 좌상단. 통과하면 STEP 1.

---

# STEP 1 — 컷 10장

### 컷 1 · `cut01.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Extreme high-angle drone bird's-eye view; the boy a tiny distant figure at the bottom of the slope looking up toward the school; city-scale vista over the neighborhood. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Keep the boy, school-street layout, light direction and color grading consistent with the attached references.
```

### 컷 2 · `cut02.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `sheet_prop.png`, `cut01.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Worm's-eye low angle, extreme close-up of feet; only the white sneakers in frame, heavily climbing one step of the concrete staircase. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Keep the sneakers, staircase, light direction and color grading consistent with the attached references.
```

### 컷 3 · `cut03.png`
- 레퍼런스: `sheet_character.png`, `sheet_prop.png`, `sheet_location.png`, `cut02.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Extreme close-up of the small hands gripping the red backpack straps over the shoulder; the boy hitching the heavy bag higher, knuckles tight on the padded strap. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Keep the hands, red backpack and straps, light direction and color grading consistent with the attached references.
```

### 컷 4 · `cut04.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut03.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Low angle from the boy's point of view looking up the seemingly endless concrete staircase toward the distant school gate at the top; his long morning shadow cast down the steps, part of his small bowed silhouette at the bottom of frame. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Keep the outfit, red backpack, light direction and color grading consistent with the attached references.
```

### 컷 5 · `cut05.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut04.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Side medium shot, close-up of the strained out-of-breath face; flushed round cheeks, beads of sweat, mouth open panting, anxious eyes worried about being late. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Keep the face, hair, navy jacket, yellow badge, light direction and color grading consistent with the attached references.
```

### 컷 6 · `cut06.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut05.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Rear wide full shot with 24mm wide-angle distortion; the staircase exaggerated into an endless climb, the small boy with his red backpack low in frame, seen from behind. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Far up the slope, faint in the morning haze, Seongnam's first outdoor road escalator beside the school staircase, two parallel escalators running side by side, about 28 meters long climbing the slope, clean stainless-steel steps, glass side panels, a sloped transparent weather canopy overhead — distant and barely noticeable. Keep the boy, staircase, light direction and color grading consistent with the attached references.
```

### 컷 7 · `cut07.png`  (배경 = 계단길, 눈 질끈 감음)
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut05.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Side close-up of the face, eyes squeezed shut in exhausted near-defeat, shoulders slumping under the heavy backpack, a faint warm breath plume in the cool air. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Keep the face, hair, navy jacket, yellow badge, red backpack, light direction and color grading consistent with the attached references.
```

### 컷 8 · `cut08.png`  ★ 컷7 이미지 편집 (신규 생성 아님)
- 편집 입력: `cut07.png`  /  보조 레퍼런스: `sheet_character.png`
```
Edit cut07.png. Keep this boy's pose, framing, head position, facial features, hair, navy hooded jacket, yellow badge, red backpack and the lighting from the upper-left 100% identical. Only change two things: (1) open his eyes wide with a surprised look and raised eyebrows; (2) replace the staircase background behind him with Seongnam's first outdoor road escalator beside the school staircase, two parallel escalators running side by side (one ascending, one descending), about 28 meters long climbing the slope, clean stainless-steel steps, glass side panels, a sloped transparent weather canopy overhead, rubber handrails, yellow safety markings, blending into the old school-zone neighborhood. Everything else unchanged. 2D anime illustration style of a Makoto Shinkai anime film, hand-drawn anime, not photorealistic, not a photo, same color grading.
```

### 컷 9 · `cut09.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut08.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Side full shot, the boy stepping onto and riding the ascending escalator; both hands on the rubber handrail, the red backpack bouncing on his back, a delighted grin, the old neighborhood background sliding past behind him. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. Seongnam's first outdoor road escalator beside the school staircase, two parallel escalators running side by side (one ascending, one descending), about 28 meters long climbing the slope, clean stainless-steel steps, glass side panels, a sloped transparent weather canopy overhead, rubber handrails, yellow safety markings, blending into the old school-zone neighborhood. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Keep the boy's face, hair, navy jacket, yellow badge, red backpack, the escalator, light direction and color grading consistent with the attached references.
```

### 컷 10 · `cut10.png`
- 레퍼런스: `sheet_character.png`, `sheet_location.png`, `cut09.png`
```
2D anime illustration in the style of a Makoto Shinkai (CoMix Wave Films) anime film, hand-drawn Japanese animation look, cel-style drawn characters with clean linework, soft anime shading and large expressive glossy anime eyes, lush hand-painted anime background art with intricate detail, dramatic volumetric god rays and light shafts, brilliant lens flare and soft bloom, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric haze, painterly anime rendering, anime movie key visual, 16:9; NOT photorealistic, not a photograph, not 3D, not CGI, not live-action, no realistic skin texture; keep Shinkai's rich detailed polish, NOT the plain flat Studio Ghibli look. Crane pull-back rising reveal of the whole school-zone hillside neighborhood below; the boy arriving at the school gate on time, beaming with a bright delighted smile, brilliant morning light rays pouring down over the slope. the same Korean elementary school boy, about 10 years old, small slight build, round soft cheeks, big bright curious eyes, neat short black hair with a slight cowlick, a navy padded hooded school jacket over a white collared shirt, a round yellow safety name-tag badge on his chest, knee-length gray shorts, white sneakers, a large bright red school backpack worn on both shoulders, gripping the backpack straps with both hands. a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill. Seongnam's first outdoor road escalator beside the school staircase, two parallel escalators running side by side (one ascending, one descending), about 28 meters long climbing the slope, clean stainless-steel steps, glass side panels, a sloped transparent weather canopy overhead, rubber handrails, yellow safety markings, blending into the old school-zone neighborhood. clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood. Keep the boy's face, smile, hair, navy jacket, yellow badge, red backpack, the escalator, light direction and color grading consistent with the attached references.
```

---

## 생성물 (13장)
`sheet_character` · `sheet_prop` · `sheet_location` · `cut01`~`cut10`

## 컷마다 확인
- 큰 **빨간 책가방** · 가슴 **노란 안전명찰** · **네이비 패딩 후드** · 흰 운동화 · 까만 짧은 머리
- 광원 **좌상단(upper-left)**
- 컷 6/9/10 에스컬레이터 포함, 컷 7 배경은 계단길 / 컷 8 배경은 도로 에스컬레이터


---

## 📄 seedance-batches.md

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
maintain the same elementary school boy's face from the reference, 2D Makoto Shinkai anime illustration, hand-drawn anime, not photorealistic, not a photo, consistent lighting from upper-left, identical navy hooded jacket, yellow safety badge and large red backpack, same color grading across all shots, 16:9
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
