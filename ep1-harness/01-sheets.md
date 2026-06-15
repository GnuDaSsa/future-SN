# §B. 기준 시트 — 최우선 생성물 (전 공정의 닻)

> **순서가 중요하다.** 아래 시트들을 *먼저* 확정한 뒤에 10컷 키프레임을 만든다.
> 캐릭터 시트가 흔들리면 10컷 전체가 흔들린다. 시트 = 모든 컷의 레퍼런스 슬롯에 매번 투입되는 기준판.

생성 도구: GPT Image 2 (또는 이 세션의 `runway_mcp generate_image`).

---

## B-1. 캐릭터 시트 (최우선 · 4뷰 + 표정 3종) ▶ COPY BLOCK

```
Makoto Shinkai (CoMix Wave Films) signature anime style, ultra-detailed photorealistic background painting, razor-sharp clarity, intense dramatic volumetric god rays and light shafts, brilliant anamorphic lens flare and soft bloom, glistening specular highlights and reflective surfaces, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric depth haze, shallow depth-of-field bokeh, semi-realistic Shinkai character rendering with detailed glossy eyes and soft realistic skin shading, emotional cinematic lighting, high-resolution cinematic film still, 16:9; NOT Studio Ghibli, not Hayao Miyazaki, no flat cel-shading, no gouache storybook look.
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
Makoto Shinkai (CoMix Wave Films) signature anime style, ultra-detailed photorealistic rendering, razor-sharp clarity, brilliant lens flare and soft bloom, glistening specular highlights, vivid highly-saturated colors, high-resolution cinematic film still, 16:9; NOT Studio Ghibli, not Hayao Miyazaki, no flat cel-shading.
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
Makoto Shinkai (CoMix Wave Films) signature anime style, ultra-detailed photorealistic background painting, razor-sharp clarity, intense dramatic volumetric god rays and light shafts, brilliant anamorphic lens flare and soft bloom, glistening specular highlights and reflective surfaces, vivid highly-saturated gradient skies with backlit detailed cumulus clouds, delicate atmospheric depth haze, shallow depth-of-field bokeh, semi-realistic Shinkai character rendering with detailed glossy eyes and soft realistic skin shading, emotional cinematic lighting, high-resolution cinematic film still, 16:9; NOT Studio Ghibli, not Hayao Miyazaki, no flat cel-shading, no gouache storybook look.
Wide establishing shot, no characters:
a steep narrow hillside street in front of an old Korean elementary school in an old Seongnam neighborhood, a long concrete staircase beside a sloped road, weathered low-rise houses and small shops, yellow school-zone safety fences and a painted crosswalk, a school gate with a banner up the slope, power lines crossing overhead, the road climbing steeply uphill.
clear bright early morning around 8am, crisp cool air, warm sunlight from the upper-left, long soft shadows stretching down the slope, pale blue sky with a light golden glow on the rooftops, faint morning haze in the distance, fresh school-commute mood.
```

**🔎 검수:** ☐ 광원이 **upper-left** 인가  ☐ 계단+경사로가 위로 가파르게 오르는가  ☐ 노란 어린이보호구역 펜스·횡단보도·학교 정문이 보이는가

---

> 시트 확정 후 → `shots/cut-01.md` 부터 키프레임 생성. 레퍼런스 투입 규칙은 `03-workflow.md` §D-1 참조.
