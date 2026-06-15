# §B. 기준 시트 — 최우선 생성물 (전 공정의 닻)

> **순서가 중요하다.** 아래 시트들을 *먼저* 확정한 뒤에 10컷 키프레임을 만든다.
> 캐릭터 시트가 흔들리면 10컷 전체가 흔들린다. 시트 = 모든 컷의 레퍼런스 슬롯에 매번 투입되는 기준판.

생성 도구: GPT Image 2 (또는 이 세션의 `runway_mcp generate_image`).

---

## B-1. 캐릭터 시트 (최우선 · 4뷰 + 표정 3종) ▶ COPY BLOCK

```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9.
Character reference sheet, 16:9 single sheet, clean light-gray background, model sheet layout:
the same elderly Korean man, age 73, slim build, gentle deeply-wrinkled face, warm complexion, short white hair, round thin-framed glasses, a beige zip-up windbreaker over a brown knit vest, dark gray trousers, brown worn sneakers, holding a wooden cane in his right hand, kind tired eyes.
Show the same man in one consistent design across: full-body front view, full-body side profile (facing right), 3/4 back view, and a row of three head close-ups below — neutral expression, exhausted/breathless expression, and a warm satisfied smile. Identical face, hair, glasses, and outfit in every view. Consistent proportions. No text labels.
```

**🔎 생성 후 검수 (하나라도 어긋나면 재생성):**
- ☐ 안경 = 둥근 **얇은 테** (뿔테 아님)가 4뷰 모두 동일한가
- ☐ 조끼-바람막이 **2겹** 색 대비가 4뷰 모두 동일한가
- ☐ 지팡이가 **오른손**에 있고 그립 모양이 동일한가
- ☐ 흰머리 길이·옆머리 눌림이 4뷰 동일한가
- ☐ 표정 3종(중립 / 지친 숨참 / 흐뭇한 미소)이 **같은 얼굴**인가

---

## B-2. 소품 시트 (보조 · 클로즈업 컷 디테일 일관성용) ▶ COPY BLOCK

> 컷2·3(발·손 클로즈업)에서 소품 디테일이 흔들리지 않게 단독 클로즈업을 미리 확정.

```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, soft lens flare, high color saturation, cinematic film still, 16:9.
Prop reference sheet, clean light-gray background, no text labels:
(1) a single wooden cane, close-up, worn smooth grip, natural wood grain, the same cane the elderly man holds;
(2) a beige zip-up windbreaker laid flat, close-up of fabric and zipper, with a brown knit vest beside it showing the two-layer combination.
Consistent colors and materials.
```

---

## B-3. 로케이션 키 비주얼 (보조 · 배경 기준판 = 스타일 보드) ▶ COPY BLOCK

> 모든 컷의 레퍼런스 슬롯2로 재투입. 골목 레이아웃·무드·광원 방향의 기준.

```
Makoto Shinkai anime film style, painterly photorealistic rendering, hand-painted background art, dramatic volumetric god rays, detailed cumulus clouds, soft lens flare, high color saturation, delicate atmospheric haze, cinematic film still, 16:9.
Wide establishing shot, no characters:
a steep narrow residential hillside alley in an old Korean neighborhood, weathered low-rise houses with rooftop water tanks, cracked concrete pavement, power lines crossing overhead, a metal handrail along one side, potted plants beside doorways, the alley curving upward.
early dawn, low warm sun from the upper-left, long soft shadows stretching down the slope, pale blue sky turning gold near the horizon, gentle morning mist in the distance, cool shadow areas with warm highlights.
```

**🔎 검수:** ☐ 광원이 **upper-left** 인가  ☐ 골목이 위로 굽어 오르는가  ☐ 옥상 물탱크·전선·난간·화분이 보이는가

---

> 시트 확정 후 → `shots/cut-01.md` 부터 키프레임 생성. 레퍼런스 투입 규칙은 `03-workflow.md` §D-1 참조.
