# §A. 마스터 앵커 블록 (MASTER ANCHORS) — 단일 소스

> 이 파일이 **유일한 원본**이다. 컷 프롬프트(`shots/cut-NN.md`)의 영어 LOCK 문구는 모두 여기서 복사된 것이며,
> 토씨 하나 바꾸지 않는다. 문구를 고칠 일이 생기면 **여기만 고치고** 10컷 전체를 다시 조립한다.
> (얼굴/복장/빛의 드리프트를 막는 것이 하네스의 존재 이유다.)

---

## A-1. STYLE LOCK — 화풍 (절대 변경 금지)

```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9
```

## A-2. CHARACTER LOCK — 할아버지 (C1)

> 한 단어만 달라져도 얼굴/복장이 흔들린다. **글자 단위로 동일**하게 유지할 것.

```
the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes
```

**식별 디테일 (일관성 닻 — 시트·체크리스트에 반드시 포함):**
- 둥근 **얇은 테** 안경 (뿔테 아님)
- 베이지 바람막이 + 갈색 니트 조끼 = **2겹** (색 대비가 식별 포인트)
- **오른손** 나무 지팡이
- 흰머리 짧게, 옆머리 살짝 눌림

## A-3. LOCATION LOCK — 은행동 언덕

```
a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward
```

## A-4. LIGHT LOCK — 이른 새벽

```
early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights
```

> ⚠️ 빛 방향은 **항상 화면 좌상단(upper-left)**. 컷마다 광원 위치가 바뀌면 같은 시간대로 보이지 않는다.

## A-5. ESCALATOR ASSET LOCK — 에스컬레이터 (컷6 원경 도입 → 컷8·9·10 본격 등장)

```
a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood
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

> 컷별 완성 프롬프트는 `shots/cut-01.md` ~ `cut-10.md` 참조. 워크플로우는 `03-workflow.md`.
