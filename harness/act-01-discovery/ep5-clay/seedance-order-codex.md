# 🎬 EP5 Seedance 영상 제작 오더 + 클립 프롬프트 (코덱스 전달용)

> EP5 「율동공원 맨발 황톳길」 7컷(30~36) → **3클립(S15 · S16-1 · S16-2)** 영상화.
> 대상 도구: **Seedance 2.0** (멀티 레퍼런스 I2V · 멀티샷 · 시작/끝 프레임 · 네이티브 오디오).
> 주인공: 노부부 **C6**(할머니 60대, 꽃무늬 카디건, 짧은 펌 회색머리, 명랑) + **C7**(할아버지2 60대, 체크셔츠, 카키 등산모자, 무뚝뚝하지만 다정).

---

## ⛔ 코덱스에 그대로 줄 오더 (복붙)

```
아래 EP5 Seedance 클립 프롬프트(S15 / S16-1 / S16-2)로 영상을 제작해줘.

[전제] 이미지 작업이 끝나 EP5 키프레임이 준비되어 있어야 함:
  sheet_c6.png, sheet_c7.png, sheet_claypath.png, cut30.png ~ cut36.png
  없으면 EP5 codex-image-requests.md 먼저 생성.

[지시]
1) Seedance 2.0으로 클립 3개(S15 / S16-1 / S16-2)를 각각 생성. 각 클립의 'Ref'
   슬롯에 명시된 이미지를 그대로 넣고, 'Prompt'는 한 글자도 요약/의역 말고 그대로 투입.
2) S15(컷30~31)는 TV 글로우 역광 룩(어두운 거실, TV 화면 글로우, 얼굴 림라이트)을 유지.
   S16-1(컷32~34)는 스테디캠 후방 팔로우→발 멈칫(★발 운율숏)→웜즈아이 황톳길 리빌 순.
3) S16-2 컷36 맨발 슬라이딩은 반드시 [Video1]에 슬라이딩/러닝 사이드 트래킹 실사 클립을
   모션 레퍼런스로 투입해 동작을 가이드.
4) 화풍 유지: 키프레임의 2D 핸드드로잉 신카이 애니 룩을 유지하고
   실사로 만들지 말 것(키프레임이 곧 룩의 기준).
5) 대사는 프롬프트 안 따옴표 한국어로 립싱크 생성. (음색 통제 필요하면 TTS를
   [Audio1]로 투입하는 하이브리드도 가능 — 우선 네이티브로 1차 생성)
6) 출력: 16:9, 720p 네이티브 → 업스케일, 클립 길이 4~15초.
   파일명 S15.mp4 / S16-1.mp4 / S16-2.mp4. 완료되면 컷 순서와 길이 보고.
7) 각 클립 1차 생성 후 얼굴/복장 일관성·황톳길 붉은톤·매치 정합을 자체 점검하고,
   깨지면 해당 클립만 재생성.
```

---

## 🔒 전 클립 공통 (모든 Prompt 말미에 포함)
```
maintain C6 (floral cardigan) and C7 (checkered shirt, khaki hiking hat) faces/outfits from the character sheets, keep the red-clay path look, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9
```
> 색감 닻: 인물 클립은 `sheet_c6.png`·`sheet_c7.png` + 황톳길 클립은 `sheet_claypath.png`를 보조 레퍼런스로 함께 투입해 클립 간 색감을 통일.
> 컷30~31(S15)은 예외적으로 TV-GLOW 역광이므로 광원은 TV 화면(쿨톤)이 주광 — 공통 문구의 "upper-left"는 후속 컷(LIGHT-PM)에 적용.

---

## S15 — 컷30~31 · 멀티샷(TV 글로우, 부러워하는 노부부) (~6s)
```
Ref: Image1=cut30.png, Image2=cut31.png, Image3=sheet_c6.png, Image4=sheet_c7.png
Prompt: Two-shot sequence in a dim cozy living room lit only by a cool TV screen glow, rim light on the faces.
 Shot 1 from [Image1]: the silhouetted elderly couple (C6, C7) sit on the sofa watching a TV news segment about another city's red-clay barefoot path; the grandmother C6 leans forward enviously — C6 says "아유~ 좋겠다, 저 동네 사람들은."
 Cut to Shot 2 from [Image2]: close-up of the TV glass faintly reflecting the couple's envious faces over the clay-path footage; the grandfather C7 grumbles quietly — C7 says "…우리 동네는 뭐 하나 몰라."
 maintain C6 (floral cardigan) and C7 (checkered shirt, khaki hiking hat) faces/outfits from the character sheets, keep the red-clay path look, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 조용한 거실, TV 뉴스 앵커 음성 멀리, 시계 초침.
```

## S16-1 — 컷32~34 · 멀티샷(후방 팔로우→발 멈칫→황톳길 리빌) (~9s)
```
Ref: Image1=cut32.png, Image2=cut33.png, Image3=cut34.png, Image4=sheet_claypath.png, Image5=sheet_c6.png, Image6=sheet_c7.png
Prompt: Three-shot sequence on a Yuldong Park lakeside path in warm late-afternoon amber light, golden-hour glow, lake glitter.
 Shot 1 from [Image1]: steadicam-style following composition from behind the couple (C6, C7) holding hands as they stroll the lakeside path, gentle forward dolly.
 Cut to Shot 2 from [Image2]: ★foot rhyme shot — close-up of elderly feet in walking shoes stopping abruptly on the park path, a small dust puff (rhymes with the EP1 opening foot shot).
 Cut to Shot 3 from [Image3]: worm's-eye wide reveal from red-clay surface level — the vast red-clay barefoot path opens up with amber god rays, the couple standing astonished in the distance; C6 stammers "여, 여보!! 이거…!!" and C7 answers "……티비에 나온 그거잖아!".
 maintain C6 (floral cardigan) and C7 (checkered shirt, khaki hiking hat) faces/outfits from the character sheets, keep the red-clay path look, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 호숫가 바람·물결, 발걸음, 멈칫하는 흙먼지, 새소리.
```

## S16-2 — 컷35~36 · 멀티샷(슬로모 신발 공중→★맨발 슬라이딩 모션 레퍼런스) (~7s)
```
Ref: Image1=cut35.png, Image2=cut36.png, Image3=sheet_claypath.png, Image4=sheet_c6.png, Image5=sheet_c7.png, Video1=슬라이딩/러닝 사이드 트래킹 실사 클립(모션 레퍼런스)
Prompt: Two-shot finale on the red-clay barefoot path in warm amber light.
 Shot 1 from [Image1]: slow-motion style insert, two pairs of shoes flying through the air against a blue-amber sky, a playful arc, sun flare between them.
 Cut to Shot 2 from [Image2], using [Video1] as the motion reference for the barefoot slide: dynamic side-tracking view of the elderly couple (C6, C7) barefoot sliding on the red-clay path, clay splashing outward, both laughing like children — together they shout "우하하하!!". Match the sliding/running side-tracking motion of [Video1].
 maintain C6 (floral cardigan) and C7 (checkered shirt, khaki hiking hat) faces/outfits from the character sheets, keep the red-clay path look, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 황토 미끄러지는 소리, 흙 튀는 소리, 두 사람 웃음, 바람.
```

---

## ✅ 제작 후 체크
- ☐ S15·S16-1·S16-2 모두 **2D 애니 룩 유지**(실사로 안 빠졌나)
- ☐ C6(꽃무늬 카디건·짧은 펌 회색머리)·C7(체크셔츠·카키 등산모자)가 전 클립 동일
- ☐ **황톳길 붉은톤** 일관 유지(S16-1·S16-2)
- ☐ S15 **TV-GLOW 역광**(쿨톤 림라이트), S16-1·S16-2 **광원 좌상단 LIGHT-PM**(앰버)
- ☐ 컷33 **★발 운율숏** = EP1 오프닝 발샷과 라임(전 EP 공통 '발' 모티프) 살았나
- ☐ **컷36 [Video1] 모션 레퍼런스** 적용 — 맨발 슬라이딩 동작이 실사 클립과 매칭
- ☐ 대사 립싱크 싱크 OK (안 되면 TTS [Audio1] 하이브리드)
- ☐ 편집 순서 S15→S16-1→S16-2, 단일 LUT로 톤 통일

> 참고: 클립 묶음·키프레임 정의는 `conti.md`·`00-anchors.md`·`codex-image-requests.md`와 동일 기준.
> S넘버는 기획서(바이블) 기준: S15=컷30~31 / S16-1=컷32~34 / S16-2=컷35~36.
