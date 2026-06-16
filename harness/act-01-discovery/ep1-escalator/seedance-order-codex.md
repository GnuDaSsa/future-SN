# 🎬 EP1 Seedance 영상 제작 오더 + 클립 프롬프트 (코덱스 전달용)

> EP1 「금광동 성남동초 등굣길 어린이 + 도로 에스컬레이터」 10컷 → **5클립(E1~E5)** 영상화.
> 대상 도구: **Seedance 2.0** (멀티 레퍼런스 I2V · 멀티샷 · 시작/끝 프레임 · 네이티브 오디오).

---

## ⛔ 코덱스에 그대로 줄 오더 (복붙)

```
아래 EP1 Seedance 클립 프롬프트(E1~E5)로 영상을 제작해줘.

[전제] 이미지 작업이 끝나 EP1 키프레임이 준비되어 있어야 함:
  sheet_character.png, sheet_location.png, cut01.png ~ cut10.png
  (cut08은 cut07 편집본). 없으면 EP1 codex-image-requests.md 먼저 생성.

[지시]
1) Seedance 2.0으로 클립 5개(E1~E5)를 각각 생성. 각 클립의 'Ref' 슬롯에
   명시된 이미지를 그대로 넣고, 'Prompt'는 한 글자도 요약/의역 말고 그대로 투입.
2) E4는 반드시 first frame=cut07 / last frame=cut08 로 지정(매치컷).
   E5는 Image1=cut09에서 시작, last frame=cut10 지정.
3) 화풍 유지: 키프레임의 2D 핸드드로잉 신카이 애니 룩을 유지하고
   실사로 만들지 말 것(키프레임이 곧 룩의 기준).
4) 대사는 프롬프트 안 따옴표 한국어로 립싱크 생성. (음색 통제 필요하면 TTS를
   [Audio1]로 투입하는 하이브리드도 가능 — 우선 네이티브로 1차 생성)
5) 출력: 16:9, 720p 네이티브 → 업스케일, 클립 길이 4~15초.
   파일명 E1.mp4 ~ E5.mp4. 완료되면 컷 순서(E1→E5)와 길이 보고.
6) 각 클립 1차 생성 후 얼굴/복장 일관성·매치컷 정합을 자체 점검하고,
   깨지면 해당 클립만 재생성.
```

---

## 🔒 전 클립 공통 (모든 Prompt 말미에 포함)
```
maintain the same elementary school boy's face and outfit from the character sheet (red backpack, navy hooded jacket, yellow safety badge, white sneakers), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9
```
> 색감 닻: 인물 클립은 `sheet_character.png` + 가장 얼굴이 선명한 `cut05.png`를 보조 레퍼런스로 함께 투입해 클립 간 색감을 통일.

---

## E1 — 컷1 · 단독 부감 오프닝 (~4s)
```
Ref: Image1=cut01.png, Image2=sheet_character.png, Image3=sheet_location.png
Prompt: Start from [Image1]. Slow drone descent gliding forward over the dawn school-zone neighborhood; far below, the tiny child with a red backpack walks up toward the school; morning mist drifts, gentle birdsong. Camera: smooth aerial push-in. maintain the same elementary school boy's face and outfit from the character sheet (red backpack, navy hooded jacket, yellow safety badge, white sneakers), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 새벽 새소리, 바람, 멀리 학교 예비 종소리.
```

## E2 — 컷2~5 · 멀티샷(발→가방끈→시선→표정) (~8s)
```
Ref: Image1=cut02.png, Image2=cut03.png, Image3=cut04.png, Image4=cut05.png, Image5=sheet_character.png
Prompt: Four-shot sequence on a steep school staircase.
 Shot 1 from [Image1]: worm's-eye close-up, a white sneaker lands heavily on one stair, breath visible, slight handheld shake.
 Cut to Shot 2 from [Image2]: the small hands hitch the heavy red backpack higher, knuckles tightening — the boy mutters "헉… 늦겠다…".
 Cut to Shot 3 from [Image3]: low POV looking up the seemingly endless staircase, the boy's long morning shadow on the steps; a distant school warning bell rings.
 Cut to Shot 4 from [Image4]: side medium close-up of his flushed panting face — "하아… 하아…".
 Keep the boy's face and outfit from [Image5]. maintain the same elementary school boy's face and outfit from the character sheet (red backpack, navy hooded jacket, yellow safety badge, white sneakers), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 발걸음, 가쁜 숨, 멀리 예비종 "땡—땡—".
```

## E3 — 컷6 · 단독 광각 뒷모습 (~3s)
```
Ref: Image1=cut06.png, Image2=sheet_character.png
Prompt: Start from [Image1]. Rear 24mm wide angle; the small boy trudges a few steps further up the exaggerated endless staircase, red backpack swaying, shoulders heavy; far up the slope the road escalator stays faint in the haze (do not emphasize it yet). Camera slowly follows from behind. maintain the same elementary school boy's face and outfit from the character sheet (red backpack, navy hooded jacket, yellow safety badge, white sneakers), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 등굣길 도시 앰비언스, 멀리 아이들 소리.
```

## E4 — 컷7→8 · ★매치컷 (시작/끝 프레임) (~4s)
```
Ref: first frame=cut07.png, last frame=cut08.png, Image3=sheet_character.png
Prompt: Side close-up, head position locked. The boy squeezes his eyes shut in exhausted near-defeat — "으…" — shoulders slumping; as he opens his eyes wide in surprise, the staircase behind him has seamlessly become Seongnam's outdoor road escalator and his eyebrows lift — "어?!". The background transforms during the blink; camera and framing stay identical from first to last frame. maintain the same elementary school boy's face and outfit from the character sheet (red backpack, navy hooded jacket, yellow safety badge, white sneakers), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, same color grading.
SFX: 에스컬레이터 기계음(눈 뜨는 순간).
```

## E5 — 컷9~10 · 멀티샷(탑승→크레인 리빌) (~6.5s)
```
Ref: Image1=cut09.png, last frame=cut10.png, Image3=sheet_character.png
Prompt: Shot 1 from [Image1]: side full shot, the boy rides the ascending road escalator with a delighted grin, both hands on the rubber handrail, red backpack bouncing, the old neighborhood sliding past behind him. Then the camera cranes up and back into the final frame (cut10): a rising reveal of the whole school-zone hillside, the boy arriving at the school gate on time, beaming — "우와—! 안 늦겠다!" — brilliant morning god rays pouring down. maintain the same elementary school boy's face and outfit from the character sheet (red backpack, navy hooded jacket, yellow safety badge, white sneakers), keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, slight saturation lift.
SFX: 에스컬레이터 기계음, 바람.
```

---

## ✅ 제작 후 체크
- ☐ E1~E5 모두 **2D 애니 룩 유지**(실사로 안 빠졌나)
- ☐ 얼굴·빨간 가방·노란 명찰·네이비 후드가 전 클립 동일
- ☐ **E4 매치컷**: 눈 감았다 뜨는 사이 배경이 계단→에스컬레이터로 정확히 전환, 머리 위치 고정
- ☐ 광원 좌상단 유지, 컷7~10 채도만 소폭 상승
- ☐ 대사 립싱크 싱크 OK (안 되면 TTS [Audio1] 하이브리드)
- ☐ 편집 순서 E1→E5, 단일 LUT로 톤 통일(`03-workflow.md` D-4)

> 참고: 클립 묶음(E1~E5)·키프레임 정의는 `seedance-batches.md`·`codex-image-requests.md`와 동일 기준.
