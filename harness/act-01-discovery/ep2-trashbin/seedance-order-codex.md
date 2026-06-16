# 🎬 EP2 Seedance 영상 제작 오더 + 클립 프롬프트 (코덱스 전달용)

> EP2 「중원구 여수동 가로 쓰레기통」 10컷 → **5클립(E1~E5)** 영상화.
> 대상 도구: **Seedance 2.0** (멀티 레퍼런스 I2V · 멀티샷 · 시작/끝 프레임 · 네이티브 오디오).

---

## ⛔ 코덱스에 그대로 줄 오더 (복붙)

```
아래 EP2 Seedance 클립 프롬프트(E1~E5)로 영상을 제작해줘.

[전제] 이미지 작업이 끝나 EP2 키프레임이 준비되어 있어야 함:
  sheet_character.png, sheet_prop.png, sheet_location.png, sheet_bins.png,
  cut01.png ~ cut10.png (cut08은 cut07 편집본).
  없으면 EP2 codex-image-requests.md 먼저 생성.

[지시]
1) Seedance 2.0으로 클립 5개(E1~E5)를 각각 생성. 각 클립의 'Ref' 슬롯에
   명시된 이미지를 그대로 넣고, 'Prompt'는 한 글자도 요약/의역 말고 그대로 투입.
2) E4는 반드시 first frame=cut07 / last frame=cut08 로 지정(★매치컷,
   배경이 통 없는 인도→쓰레기통 한 세트 등장). E5는 Image1=cut09에서 시작,
   last frame=cut10 지정.
3) 화풍 유지: 키프레임의 2D 핸드드로잉 신카이 애니 룩을 유지하고
   실사로 만들지 말 것(키프레임이 곧 룩의 기준).
4) 대사는 프롬프트 안 따옴표 한국어로 립싱크 생성. (음색 통제 필요하면 TTS를
   [Audio1]로 투입하는 하이브리드도 가능 — 우선 네이티브로 1차 생성)
5) 출력: 16:9, 720p 네이티브 → 업스케일, 클립 길이 4~15초.
   파일명 E1.mp4 ~ E5.mp4. 완료되면 컷 순서(E1→E5)와 길이 보고.
6) 각 클립 1차 생성 후 얼굴/복장·쓰레기통 색(주황/라임그린)·매치컷 정합을
   자체 점검하고, 깨지면 해당 클립만 재생성.
```

---

## 🔒 전 클립 공통 (모든 Prompt 말미에 포함)
```
maintain the same young woman's face and outfit from the character sheet (beige trench coat, low ponytail, brown shoulder bag), keep the orange/lime-green street bins exactly, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9
```
> 색감 닻: 전 클립에 `sheet_character.png` + 가장 얼굴이 선명한 `cut05.png`를 보조 레퍼런스로 함께 투입해 클립 간 색감·인물을 통일. 쓰레기통 등장 클립은 `sheet_bins.png`도 함께.
> 🗑️ 비포/애프터 모티프: 통 없는 컷(2·4·5·6·7)엔 길거리에 버려진 쓰레기, 통 등장·분리배출 후 **컷10은 깨끗한 거리**로 대비.

---

## E1 — 컷1 · 단독 부감 오프닝 (~4s)
```
Ref: Image1=cut01.png, Image2=sheet_character.png, Image3=sheet_location.png
Prompt: Start from [Image1]. Slow drone descent gliding forward over the golden-hour Jungwon-gu main street; far below, the tiny woman with a beige trench coat walks along the wide main-road sidewalk holding a coffee cup; warm city traffic hum, gentle wind, amber light glinting off windows. Camera: smooth aerial push-in. maintain the same young woman's face and outfit from the character sheet (beige trench coat, low ponytail, brown shoulder bag), keep the orange/lime-green street bins exactly, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 도시 교통, 바람, 멀리 도시 앰비언스.
```

## E2 — 컷2~5 · 멀티샷(걸음→손→두리번→한숨) (~9s)
```
Ref: Image1=cut02.png, Image2=cut03.png, Image3=cut04.png, Image4=cut05.png, Image5=sheet_character.png
Prompt: Four-shot sequence on the wide main-road sidewalk in Jungwon-gu.
 Shot 1 from [Image1]: low close-up of her white sneakers walking, the takeout coffee cup swaying at her side; a stray crumpled wrapper and an empty can litter the pavement nearby, no trash bin around, slight handheld feel.
 Cut to Shot 2 from [Image2]: extreme close-up of her two hands — an empty finished coffee cup in one hand and a crumpled snack wrapper in the other, held slightly out — she mutters "다 마셨는데… 버릴 데가 없네.".
 Cut to Shot 3 from [Image3]: medium shot, she glances around searching for a trash bin and finds none, only street trees and a bus stop, a faint troubled look; a few pieces of stray litter scattered on the sidewalk; a car passes.
 Cut to Shot 4 from [Image4]: side medium close-up of her slightly troubled face, a small sigh, still holding the trash — "하아… 그냥 들고 가야 하나.".
 Keep her face and outfit from [Image5]. maintain the same young woman's face and outfit from the character sheet (beige trench coat, low ponytail, brown shoulder bag), keep the orange/lime-green street bins exactly, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 발걸음, 도시 소음, 차 지나가는 소리, 작은 한숨.
```

## E3 — 컷6 · 단독 후방 광각 풀숏 (~3.5s)
```
Ref: Image1=cut06.png, Image2=sheet_character.png, Image3=sheet_bins.png
Prompt: Start from [Image1]. Rear 24mm wide-angle full shot; the long main-road sidewalk stretches ahead, the small woman seen from behind low in frame trudging on, bits of stray litter dotting the sidewalk where no bins exist; far ahead down the sidewalk, faint in the warm haze, a set of Seongnam's revived street bins — a bright orange general-waste bin and a bright lime-green recycling bin side by side — distant and barely noticeable (do not emphasize them yet). Camera slowly follows from behind. maintain the same young woman's face and outfit from the character sheet (beige trench coat, low ponytail, brown shoulder bag), keep the orange/lime-green street bins exactly, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 도시 앰비언스, 멀리 차 소리.
```

## E4 — 컷7→8 · ★매치컷 (시작/끝 프레임) (~4s)
```
Ref: first frame=cut07.png, last frame=cut08.png, Image3=sheet_character.png, Image4=sheet_bins.png
Prompt: Side close-up, head position locked. She closes her eyes in mild resignation, about to give up and pocket the trash with a small reluctant breath — "에이…" — the sidewalk behind her bare with a little stray litter and still no bin in sight; as she snaps her eyes wide open in surprise with slightly raised eyebrows, a set of Seongnam's revived street bins has seamlessly appeared beside her on the sidewalk (bright orange general-waste bin + bright lime-green recycling bin) and she lights up — "어, 쓰레기통!". The background transforms during the blink; camera and framing stay identical from first to last frame. maintain the same young woman's face and outfit from the character sheet (beige trench coat, low ponytail, brown shoulder bag), keep the orange/lime-green street bins exactly, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, same color grading.
SFX: 정적 후 가벼운 '반짝' 효과음(눈 뜨는 순간).
```

## E5 — 컷9~10 · 멀티샷(분리투입→크레인 풀백 리빌) (~6.5s)
```
Ref: Image1=cut09.png, last frame=cut10.png, Image3=sheet_character.png, Image4=sheet_bins.png
Prompt: Shot 1 from [Image1]: side full shot at the bins; she sorts her trash with a satisfied smile — dropping the empty cup into the bright lime-green recycling bin and the crumpled wrapper into the bright orange general-waste bin. Then the camera cranes up and back into the final frame (cut10): a rising pull-back reveal of the now clean, litter-free Jungwon-gu main street, the pair of bins neat on the sidewalk behind her, she walks on with a bright satisfied smile — "성남, 진짜 좋아졌다." — warm golden god rays pouring down over the city. maintain the same young woman's face and outfit from the character sheet (beige trench coat, low ponytail, brown shoulder bag), keep the orange/lime-green street bins exactly, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, slight saturation lift.
SFX: 분리투입음, 바람, 도시 앰비언스.
```

---

## ✅ 제작 후 체크
- ☐ E1~E5 모두 **2D 애니 룩 유지**(실사로 안 빠졌나)
- ☐ 얼굴·베이지 트렌치코트·낮은 포니테일·갈색 숄더백이 전 클립 동일
- ☐ 쓰레기통 색 **일반=주황 / 재활용=라임그린** 전 클립 동일
- ☐ 비포/애프터: 통 없는 컷(E2·E3·E4 시작)엔 길거리 쓰레기, **E5 끝(컷10)은 깨끗한 거리**
- ☐ **E4 매치컷**: 눈 감았다 뜨는 사이 배경이 통 없는 인도→쓰레기통 한 세트로 정확히 전환, 머리 위치 고정
- ☐ 광원 좌상단 유지, 늦은 오후 황금빛, 컷9~10 채도만 소폭 상승
- ☐ 대사 립싱크 싱크 OK (안 되면 TTS [Audio1] 하이브리드)
- ☐ 편집 순서 E1→E5, 단일 LUT로 톤 통일

> 참고: 클립 묶음(E1~E5)·키프레임 정의는 `seedance-batches.md`·`conti.md`·`codex-image-requests.md`와 동일 기준.
