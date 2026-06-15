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
Makoto Shinkai (CoMix Wave Films) signature anime style, ultra-detailed photorealistic background painting, razor-sharp clarity, intense dramatic volumetric god rays and light shafts, brilliant anamorphic lens flare and soft bloom, glistening specular highlights and reflective surfaces, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric depth haze, shallow depth-of-field bokeh, semi-realistic Shinkai character rendering with detailed glossy eyes and soft realistic skin shading, emotional cinematic lighting, high-resolution cinematic film still, 16:9; NOT Studio Ghibli, not Hayao Miyazaki, no flat cel-shading, no gouache storybook look
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
