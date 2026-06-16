# 🎬 EP3 Seedance 영상 제작 오더 + 클립 프롬프트 (코덱스 전달용)

> EP3 「성남시 솔로몬의 선택」 8컷(15~22) → **5클립(S09~S13)** 영상화.
> 대상 도구: **Seedance 2.0** (멀티 레퍼런스 I2V · 멀티샷 · 시작/끝 프레임 · 모션 레퍼런스 · 네이티브 오디오).
> 인물 C3(청년 남)·C4(청년 녀). 빛 = LIGHT-MORN(아침), 광원 좌상단. 다(多)로케이션.

---

## ⛔ 코덱스에 그대로 줄 오더 (복붙)

```
아래 EP3 Seedance 클립 프롬프트(S09~S13)로 영상을 제작해줘.

[전제] 이미지 작업이 끝나 EP3 키프레임이 준비되어 있어야 함:
  sheet_c3.png, sheet_c4.png, sheet_car.png,
  cut15.png, cut16.png, cut17a.png, cut17b.png(=cut17a 편집),
  cut18.png, cut19L.png, cut19R.png, cut20.png, cut21.png(=cut17a 편집·조수석 C4), cut22.png
  없으면 EP3 codex-image-requests.md 먼저 생성.

[지시]
1) Seedance 2.0으로 클립 5개(S09~S13)를 각각 생성. 각 클립의 'Ref' 슬롯에
   명시된 이미지를 그대로 넣고, 'Prompt'는 한 글자도 요약/의역 말고 그대로 투입.
2) S10은 반드시 first frame=cut17a / last frame=cut17b 로 지정(레킹포커스 —
   카메라·구도 고정, 초점만 백미러→빈 조수석으로 이동).
   S12는 Image1=cut20에서 시작, last frame=cut21 로 지정(운율숏 — 빈 조수석→채워진 조수석).
   S13은 모션 레퍼런스 [Video1]=차량 사이드 트래킹을 모션 소스로 투입.
3) 화풍 유지: 키프레임의 2D 핸드드로잉 신카이 애니 룩을 유지하고
   실사로 만들지 말 것(키프레임이 곧 룩의 기준). 화면 속 한글 텍스트는
   또렷하게 유지하고 절대 변형/애니메이션으로 깨뜨리지 말 것.
4) 대사는 프롬프트 안 따옴표 한국어로 립싱크 생성. (음색 통제 필요하면 TTS를
   [Audio1]로 투입하는 하이브리드도 가능 — 우선 네이티브로 1차 생성)
5) 출력: 16:9, 720p 네이티브 → 업스케일, 클립 길이 4~15초.
   파일명 S09.mp4 ~ S13.mp4. 완료되면 컷 순서(S09→S13)와 길이 보고.
6) 각 클립 1차 생성 후 얼굴/복장 일관성·시작끝프레임 정합·운율숏 정합을 자체
   점검하고, 깨지면 해당 클립만 재생성.
```

---

## 🔒 전 클립 공통 (모든 Prompt 말미에 포함)
```
maintain C3 and C4 faces/outfits from the character sheets (C3: short black two-block haircut, light-gray dress shirt; C4: medium-length wavy brown hair, ivory blouse), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, keep any on-screen Korean text legible and unchanged
```
> 색감 닻: 인물 클립은 해당 인물 시트(`sheet_c3.png`/`sheet_c4.png`)와 차 실내 시트(`sheet_car.png`)를 보조 레퍼런스로 함께 투입해 클립 간 색감·차 실내를 통일.

---

## S09 — 컷15~16 · 멀티샷(남/녀 대칭 라임) (~7s)
```
Ref: Image1=cut15.png, Image2=cut16.png, Image3=sheet_c3.png, Image4=sheet_c4.png
Prompt: Two-shot symmetric rhyme sequence, morning.
 Shot 1 from [Image1]: top-down overhead shot of the young man (C3) lying on his bed holding a smartphone above his face; the phone widget reads exactly "솔로 402일차"; he stares flatly, then a wry half-smile — "…402일. 와, 꽉 채웠네."
 Cut to Shot 2 from [Image2]: vanity-mirror reflection of the young woman (C4) at her dressing table, her phone widget reads exactly "솔로 306일차"; she lets out a small tired sigh — "(한숨) …누가 세래, 이런 거."
 Keep C3 from [Image3] and C4 from [Image4]. maintain C3 and C4 faces/outfits from the character sheets (C3: short black two-block haircut, light-gray dress shirt; C4: medium-length wavy brown hair, ivory blouse), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, keep any on-screen Korean text legible and unchanged.
SFX: 조용한 아침 실내 앰비언스, 폰 알림 톤, 한숨.
```

## S10 — 컷17 · ★레킹포커스 (시작/끝 프레임) (~4s)
```
Ref: first frame=cut17a.png, last frame=cut17b.png, Image3=sheet_c3.png, Image4=sheet_car.png
Prompt: Car interior in the morning, camera and composition locked from first to last frame. Begin on the rear-view mirror in sharp focus showing C3's expressionless eyes, the empty passenger seat softly blurred behind; then a slow focus pull shifts only the focus from the rear-view mirror to the empty passenger seat, where soft sunlight falls and dust motes drift — the mirror going softly blurred. Nothing else moves; only the focal plane travels. Keep C3 from [Image3] and the car interior from [Image4]. maintain C3 and C4 faces/outfits from the character sheets (C3: short black two-block haircut, light-gray dress shirt; C4: medium-length wavy brown hair, ivory blouse), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, keep any on-screen Korean text legible and unchanged, same color grading.
SFX: 차 실내 정적, 미세한 옷깃·시계 소리.
```

## S11 — 컷18~19 · 멀티샷(크래시줌 → 화면분할) (~6s)
```
Ref: Image1=cut18.png, Image2=cut19L.png, Image3=cut19R.png, Image4=sheet_c3.png, Image5=sheet_c4.png
Prompt: Sequence on two different city sidewalks, morning.
 Shot 1 from [Image1]: a fast crash-zoom pushing in on a street notice board toward a warm pastel event poster reading exactly "성남시 솔로몬의 선택", a small illustrated couple silhouette on it.
 Cut to a split-screen double: left from [Image2] the young man (C3) on one sidewalk looking up at the poster, eyes lighting up with a slight grin; right from [Image3] the young woman (C4) on a different sidewalk looking up at the same poster, eyes brightening with interest; both speak in unison — "…재밌겠는데?".
 Keep C3 from [Image4] and C4 from [Image5]. maintain C3 and C4 faces/outfits from the character sheets (C3: short black two-block haircut, light-gray dress shirt; C4: medium-length wavy brown hair, ivory blouse), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, keep any on-screen Korean text legible and unchanged.
SFX: 도시 인도 앰비언스, 크래시줌 휘익 효과음, 두 사람 동시 대사.
```

## S12 — 컷20→21 · 멀티샷 + ★운율숏 끝프레임 (~6.5s)
```
Ref: Image1=cut20.png, last frame=cut21.png, Image3=sheet_c4.png, Image4=sheet_car.png
Prompt: Start from [Image1]: car interior seen from the passenger-seat side; the door opens, bright morning light floods in with a soft lens flare, and the young woman (C4) ducks into the passenger seat — C4 "늦었죠? 미안해요." C3 "아뇨, 방금 왔어요." Then the framing settles into the locked cut17 composition and resolves on the final frame (cut21): the same car-interior rear-view-mirror composition as the rhyme shot, now with C4 seated in the passenger seat smiling shyly and C3's eyes in the rear-view mirror softening into a gentle look — the empty passenger seat now filled. Keep the car interior identical to the rhyme keyframe. Keep C4 from [Image3] and the car interior from [Image4]. maintain C3 and C4 faces/outfits from the character sheets (C3: short black two-block haircut, light-gray dress shirt; C4: medium-length wavy brown hair, ivory blouse), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, keep any on-screen Korean text legible and unchanged, same color grading.
SFX: 차문 열리는 소리, 빛·바람 유입, 짧은 대화.
```

## S13 — 컷22 · 단독(외부 사이드 트래킹, 모션 레퍼런스) (~5s)
```
Ref: Image1=cut22.png, Video1=차량 사이드 트래킹 모션 레퍼런스, Image3=sheet_car.png, Image4=sheet_c3.png, Image5=sheet_c4.png
Prompt: Start from [Image1] and follow the motion of [Video1] (a steady side-tracking camera move alongside a moving car). Exterior side-tracking shot of the clean white compact car driving along a road lined with blooming cherry blossom trees; petals and light particles stream past, C3 driving and C4 laughing brightly in the passenger seat (visible through the window) — C4 웃음. Late-morning sun, cherry blossoms glowing. Keep the car from [Image3] and the two characters from [Image4] and [Image5]. maintain C3 and C4 faces/outfits from the character sheets (C3: short black two-block haircut, light-gray dress shirt; C4: medium-length wavy brown hair, ivory blouse), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, keep any on-screen Korean text legible and unchanged.
SFX: 주행 바람, 벚꽃길 봄 앰비언스, C4 웃음소리.
```

---

## ✅ 제작 후 체크
- ☐ S09~S13 모두 **2D 애니 룩 유지**(실사로 안 빠졌나)
- ☐ C3(블랙 투블럭·라이트그레이 셔츠)·C4(브라운 웨이브·아이보리 블라우스)가 전 클립 동일
- ☐ 화면 속 한글 또렷·불변: **컷15 "솔로 402일차"** / **컷16 "솔로 306일차"** / **컷18 "성남시 솔로몬의 선택"** (깨지면 CapCut 텍스트 폴백)
- ☐ **S10 레킹포커스**: first=cut17a / last=cut17b, 카메라·구도 고정, 초점만 백미러→빈 조수석 이동
- ☐ **S12 운율숏**: Image1=cut20 시작 / last frame=cut21, 컷17a 구도 픽셀 정합으로 "빈 조수석→채워진 조수석" 깔끔히 연결
- ☐ **S13 모션 레퍼런스 [Video1]**(차량 사이드 트래킹) 정상 적용
- ☐ 광원 좌상단 유지, 다로케이션 간 단일 LUT로 톤 통일
- ☐ 대사 립싱크 싱크 OK (안 되면 TTS [Audio1] 하이브리드)
- ☐ 편집 순서 S09→S13

> 참고: 클립 묶음(S09~S13)·키프레임 정의·★전환 절차는 `conti.md`·`02-transition.md`·`codex-image-requests.md`와 동일 기준.
```
