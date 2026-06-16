# 🎬 ACT2 Seedance 영상 제작 오더 + 클립 프롬프트 (코덱스 전달용)

> ACT2 「탄천 수렴」 (기획서 컷 37~40) → **2클립(S17-1 · S17-2)** 영상화.
> 해 질 녘, repo 전체 주인공 전원 소집(EP1 어린이·EP2 시민여성·C3·C4·C5·C6·C7)이 탄천 둔치로 모여든다. 빛 = 매직아워(LIGHT-MAGIC).
> 대상 도구: **Seedance 2.0** (멀티 레퍼런스 I2V · 멀티샷 · 시작/끝 프레임 · 네이티브 오디오).

---

## ⛔ 코덱스에 그대로 줄 오더 (복붙)

```
아래 ACT2 Seedance 클립 프롬프트(S17-1·S17-2)로 영상을 제작해줘.

[전제] 이미지 작업이 끝나 ACT2 키프레임이 준비되어 있어야 함:
  sheet_tancheon.png, cut37.png, cut38a.png, cut38b.png, cut38c.png,
  cut39.png, cut40_kid.png, cut40_woman.png, cut40_c3.png, cut40_c4.png,
  cut40_c5.png, cut40_c6.png, cut40_c7.png (총 13장).
  각 인물 시트는 다른 EP 폴더에 있음(00-anchors A-2 ROSTER 경로 그대로).
  없으면 ACT2 codex-image-requests.md 먼저 생성.

[지시]
1) Seedance 2.0으로 클립 2개(S17-1·S17-2)를 각각 생성. 각 클립의 'Ref' 슬롯에
   명시된 이미지를 그대로 넣고, 'Prompt'는 한 글자도 요약/의역 말고 그대로 투입.
2) 인물 레퍼런스는 반드시 각 인물 '본인 EP 시트'(크로스폴더 경로)에서 가져올 것.
   재설계·합성 금지. 얼굴·복장은 그 시트와 동일하게 고정.
3) S17-2의 컷38 휩팬 몽타주(cut38a→b→c)는 멀티샷 1클립의 ★휩팬 전환으로,
   컷40 클로즈업 릴레이는 ★멀티 레퍼런스 멀티샷으로 인물 순서대로 생성
   (어린이→여성→C3→C4→C5→C6→C7).
4) 화풍 유지: 키프레임의 2D 핸드드로잉 신카이 애니 룩을 유지하고
   실사로 만들지 말 것(키프레임이 곧 룩의 기준). 빛은 매직아워 핑크퍼플 통일.
5) 대사는 프롬프트 안 따옴표 한국어로 립싱크 생성(컷39 아이 "엄마! 시작한대!!").
   음색 통제 필요하면 TTS를 [Audio1]로 투입하는 하이브리드도 가능.
6) 출력: 16:9, 720p 네이티브 → 업스케일, 클립 길이 4~15초.
   파일명 S17-1.mp4 / S17-2.mp4. 완료되면 컷 순서와 길이 보고.
7) 각 클립 1차 생성 후 얼굴/복장 일관성·매직아워 색감·인물 등장 순서를
   자체 점검하고, 깨지면 해당 클립만 재생성.
8) ★휩팬 타이밍 통제 실패 시: cut38a/b/c를 개별 생성한 뒤
   CapCut 휩팬 트랜지션으로 폴백 연결.
```

---

## 🔒 전 클립 공통 (모든 Prompt 말미에 포함)
```
keep each character's face/outfit identical to their own EP character sheet, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframes, NOT photorealistic, not a photo, magic-hour pink-purple sky with backlight from the upper-left, 16:9
```
> 색감 닻: 모든 클립에 `sheet_tancheon.png`를 보조 레퍼런스로 함께 투입해 클립 간 매직아워(핑크퍼플) 색감을 통일.
> 인물 시트 경로(00-anchors A-2 ROSTER, 크로스폴더 그대로):
> - EP1 어린이(빨간 책가방): `../act-01-discovery/ep1-escalator/sheet_character.png`
> - EP2 시민여성(베이지 트렌치): `../act-01-discovery/ep2-trashbin/sheet_character.png`
> - C3 청년남 / C4 청년녀: `../act-01-discovery/ep3-solomon/sheet_c3.png` / `sheet_c4.png`
> - C5 환자(마스크·후드): `../act-01-discovery/ep4-flu/sheet_c5.png`
> - C6 할머니 / C7 할아버지2: `../act-01-discovery/ep5-clay/sheet_c6.png` / `sheet_c7.png`

---

## S17-1 — 컷37 + 컷39 · 멀티샷(익스트림 와이드 푸시인 → 부감 둔치 모여듦) (~8s)
```
Ref: Image1=cut37.png, Image2=cut39.png, Image3=sheet_tancheon.png
Prompt: Two-shot sequence converging on the Tancheon riverside at magic hour.
 Shot 1 from [Image1]: extreme wide cityscape of the Tancheon stream and the Seongnam skyline, pink-purple gradient sky, epic backlit clouds, city lights just starting to twinkle; a slow cinematic push-in toward the grassy riverside lawn as the music builds.
 Cut to Shot 2 from [Image2]: high-angle (부감) over the riverside lawn (둔치) filling with citizen silhouettes, picnic mats, balloons and children gathering from every direction, warm magic-hour glow shimmering on the water; a small child off-screen cries out "엄마! 시작한대!!".
 Use [Image3] sheet_tancheon as the color/atmosphere anchor. keep each character's face/outfit identical to their own EP character sheet, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframes, NOT photorealistic, not a photo, magic-hour pink-purple sky with backlight from the upper-left, 16:9.
SFX: 강변 바람, 멀리 도시 앰비언스, 모여드는 사람들 웅성임, 음악 빌드업, 아이 외침.
```

## S17-2 — 컷38 + 컷40 · ★휩팬 몽타주 + ★클로즈업 릴레이 (~14s)
```
Ref: Image1=cut38a.png, Image2=cut38b.png, Image3=cut38c.png,
     Image4=cut40_kid.png, Image5=cut40_woman.png, Image6=cut40_c3.png,
     Image7=cut40_c4.png, Image8=cut40_c5.png, Image9=cut40_c6.png,
     Image10=cut40_c7.png, Image11=sheet_tancheon.png
Prompt: A whip-pan montage of everyone heading the same direction, then a relay of upward-gazing close-ups, all at magic hour.
 ★WHIP-PAN MONTAGE — same direction, fast whip-pan transitions between shots:
  Shot A from [Image1]: the EP1 elementary school child (red backpack) walking briskly toward the stream at dusk.
  whip-pan to Shot B from [Image2]: the white compact car (C3 driving, C4 in the passenger seat) driving toward the stream, magic-hour windshield reflection.
  whip-pan to Shot C from [Image3]: the elderly couple (C6, C7) walking hand in hand toward the stream.
 ★CLOSE-UP RELAY — in this exact order, each character looking up at the sky with quiet anticipation, magic-hour light on the face, gentle breeze in the hair:
  [Image4] the EP1 child → [Image5] the EP2 woman in the beige trench coat → [Image6] C3 → [Image7] C4 → [Image8] C5 (masked, hooded patient) → [Image9] C6 (grandmother) → [Image10] C7 (grandfather).
 Use [Image11] sheet_tancheon as the color/atmosphere anchor. keep each character's face/outfit identical to their own EP character sheet, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframes, NOT photorealistic, not a photo, magic-hour pink-purple sky with backlight from the upper-left, 16:9.
SFX: 발걸음, 차 엔진·바람 가르는 휩팬 스월, 잔잔한 강변 앰비언스, 차오르는 음악.
```
> ★휩팬 폴백: 멀티샷에서 cut38a/b/c 휩팬 타이밍이 통제되지 않으면, 세 컷을 개별 생성한 뒤 CapCut 휩팬 트랜지션으로 연결(00-anchors 특수기법 / conti 폴백 노트).

---

## ✅ 제작 후 체크
- ☐ S17-1·S17-2 모두 **2D 애니 룩 유지**(실사로 안 빠졌나)
- ☐ 각 인물 얼굴·복장이 **본인 EP 시트와 동일**(EP1 빨간 가방·EP2 베이지 트렌치·C3~C7)
- ☐ **컷40 릴레이 순서**: 어린이→여성→C3→C4→C5→C6→C7 정확히 유지
- ☐ **컷38 휩팬** 같은 방향·연속성 OK (깨지면 개별 생성 → CapCut 휩팬 폴백)
- ☐ 매직아워 핑크퍼플·광원 좌상단 백라이트가 두 클립 모두 통일
- ☐ 컷39 대사 "엄마! 시작한대!!" 립싱크/타이밍 OK (안 되면 TTS [Audio1] 하이브리드)
- ☐ 편집 순서 S17-1→S17-2, 단일 LUT로 톤 통일 ('눈 올려다봄' 모티프 → ACT3 드론 반사로 연결)

> 참고: 클립 묶음(S17-1·S17-2)·키프레임 정의는 `conti.md`·`00-anchors.md`·`codex-image-requests.md`와 동일 기준.
