# 🎬 ACT3 Seedance 영상 제작 오더 + 클립 프롬프트 (코덱스 전달용)

> ACT3 「밤 탄천 드론쇼 피날레」 5컷(41~45) → **3클립(S18-1~S18-3)** 영상화.
> 빛 = **LIGHT-NIGHT**(네이비 밤하늘, 드론 글로우). 군중 실루엣 + 눈동자 클로즈업.
> 대상 도구: **Seedance 2.0** (멀티 레퍼런스 I2V · 멀티샷 · 시작/끝 프레임 · 네이티브 오디오).
> ⚠️ **드론으로 글자/로고를 만들지 말 것** — 추상적 빛 군집만. 모든 글자·로고·슬로건·AI 표기는 CapCut 합성.

---

## ⛔ 코덱스에 그대로 줄 오더 (복붙)

```
아래 ACT3 Seedance 클립 프롬프트(S18-1~S18-3)로 영상을 제작해줘.

[전제] 이미지 작업이 끝나 ACT3 키프레임이 준비되어 있어야 함:
  cut41.png ~ cut45.png (시트 불필요).
  없으면 ACT3 codex-image-requests.md 먼저 생성.

[지시]
1) Seedance 2.0으로 클립 3개(S18-1~S18-3)를 각각 생성. 각 클립의 'Ref' 슬롯에
   명시된 이미지를 그대로 넣고, 'Prompt'는 한 글자도 요약/의역 말고 그대로 투입.
2) ⚠️ 드론은 추상적 빛 군집(abstract light only)으로만 움직일 것.
   글자·로고·슬로건·"Thank you, 민선 8기"·"Welcome, 민선 9기"·시 로고·
   "본 영상은 AI로 제작되었습니다" 표기는 절대 영상 안에 생성하지 말 것
   (전부 나중에 CapCut 텍스트로 합성). 컷45 중앙은 로고용으로 비워둔다.
3) S18-1은 first frame=cut41 시작, 수면 리플렉션→틸트업으로 드론이 떠오르게.
   S18-3은 컷43(홀드→분산)→컷44(재집결 슬로우 줌인)→컷45(별 하나 페이드아웃
   엔드카드) 순서의 멀티샷, last frame=cut45.
4) 화풍 유지: 키프레임의 2D 핸드드로잉 신카이 애니 룩을 유지하고
   실사로 만들지 말 것(키프레임이 곧 룩의 기준). 밤 네이비 + 드론 글로우.
5) 대사/SFX는 프롬프트 안 따옴표 한국어/지시로 처리. 컷41 군중 함성 "와아…!".
6) 출력: 16:9, 720p 네이티브 → 업스케일, 클립 길이 4~15초.
   파일명 S18-1.mp4 ~ S18-3.mp4. 완료되면 컷 순서(S18-1→S18-3)와 길이 보고.
7) 각 클립 1차 생성 후 빛 군집이 글자/로고로 보이지 않는지·밤 색감 일관성을
   자체 점검하고, 글자처럼 보이거나 깨지면 해당 클립만 재생성.
```

---

## 🔒 전 클립 공통 (모든 Prompt 말미에 포함)
```
keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, deep navy night sky with glowing drone lights, 16:9. Drones are abstract light only — NO letters, NO text (text added later in CapCut)
```
> 색감 닻: 전 클립 LIGHT-NIGHT 통일 — `deep navy night sky, city lights bokeh, hundreds of glowing colorful drone lights, cool ambient with warm drone glow on faces`.
> 군중은 실루엣 위주(개별 인물 식별 불필요). 컷42는 익명 시민 눈동자 클로즈업.

---

## S18-1 — 컷41 · 수면 리플렉션→틸트업 (드론이 떠오름) (~5s)
```
Ref: first frame=cut41.png
Prompt: Start from [first frame]. Begin on the reflection of hundreds of glowing colorful drone lights shimmering on the dark rippling Tancheon water, inverted city lights below; the camera slowly tilts up off the water to reveal the real night sky as the drones rise and bloom into a vast glowing swarm; the night crowd silhouette gasps in awe — "와아…!". Camera: smooth upward tilt-up. keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, deep navy night sky with glowing drone lights, 16:9. Drones are abstract light only — NO letters, NO text (text added later in CapCut).
SFX: 군중 함성 "와아…!", 밤 강변 앰비언스, 잔잔한 물소리, 드론쇼 음악 시작.
```

## S18-2 — 컷42 · 눈동자 익스트림 클로즈업 (동공에 드론 불빛 · 음악 클라이맥스) (~4s)
```
Ref: first frame=cut42.png
Prompt: Start from [first frame]. Extreme close-up of a single anonymous citizen's eye; the iris and pupil reflect hundreds of colorful drone lights drifting and twinkling, backlit eyelashes, a single tear glint catching the glow; tiny micro-motion only — the pupil subtly dilates and the reflected lights slowly shift as the music swells to its climax. Camera: locked extreme close-up, micro motion. keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, deep navy night sky with glowing drone lights, 16:9. Drones are abstract light only — NO letters, NO text (text added later in CapCut).
SFX: 드론쇼 음악 클라이맥스, 군중 숨죽인 소리.
```

## S18-3 — 컷43~45 · 멀티샷(홀드→분산 → 재집결 줌인 → 별 페이드 엔드카드) (~12s)
```
Ref: Image1=cut43.png, Image2=cut44.png, last frame=cut45.png
Prompt: Three-shot night-sky sequence over Tancheon. Drones stay abstract glowing light only — never form letters or shapes.
 Shot 1 from [Image1]: wide shot from behind the large night crowd, hundreds of drones holding as a bright abstract glowing light cluster over the stream, city skyline silhouette; hold ~1 second, then the light particles gently scatter and drift apart across the deep navy sky.
 Cut to Shot 2 from [Image2]: the scattered light particles slowly regather into a single bright glowing cluster at center frame, the crowd raising their phones, a slow zoom-in pushing toward the cluster.
 Cut to last frame (cut45): the lights fade down into a minimal end card — deep navy sky with one twinkling star, soft vignette, the center left empty for a logo/slogan to be added in CapCut.
 keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, deep navy night sky with glowing drone lights, 16:9. Drones are abstract light only — NO letters, NO text (text added later in CapCut).
SFX: 드론쇼 음악 마무리, 군중 감탄·박수, 페이드아웃으로 잦아듦.
```

---

## 🎞️ CapCut 합성 노트 (영상 생성 후 별도 작업 — 드론 글자는 전부 여기서)
> ⚠️ 아래 텍스트/로고는 **Seedance 영상에 없어야 정상**. CapCut 텍스트 레이어로 올린다.

- **S18-3 / 컷43 위**: `"Thank you, 민선 8기"` 텍스트 등장 → **1초 홀드** → 빛 분산 타이밍에 맞춰 페이드아웃.
- **S18-3 / 컷44 위**: 빛 입자 재집결 클러스터에 맞춰 `"Welcome, 민선 9기"` 텍스트 등장.
- **S18-3 / 컷45(엔드카드) 중앙**: **시 로고 + 슬로건** + 하단 `"본 영상은 AI로 제작되었습니다"` 표기.
- 텍스트는 드론 글로우 톤(네이비 위 따뜻한 광)과 어울리게 소프트 글로우/약한 블룸 적용.

---

## ✅ 제작 후 체크
- ☐ S18-1~S18-3 모두 **2D 애니 룩 유지**(실사로 안 빠졌나)
- ☐ ⚠️ **드론이 글자·로고·문자로 보이지 않는가** — 추상 빛 군집만(보이면 재생성)
- ☐ 밤 네이비 색감 + 드론 글로우가 전 클립 동일(LIGHT-NIGHT 통일)
- ☐ **S18-1 틸트업**: 수면 반사→밤하늘로 자연 전환, 드론이 떠오름
- ☐ **S18-2 마이크로 모션**: 동공 드론 불빛 반사, 과한 움직임 없음
- ☐ **S18-3 분산→재집결→페이드**: 홀드 약 1초 후 분산, 슬로우 줌인 재집결, 엔드카드 별 하나
- ☐ **컷45 중앙 비어 있음**(로고 합성용) — 영상에 텍스트/로고 없음 확인
- ☐ 컷41 군중 함성 "와아…!" 싱크 OK
- ☐ CapCut 합성 예약: 컷43 "Thank you, 민선 8기"(1초 홀드→분산) / 컷44 "Welcome, 민선 9기" / 컷45 시 로고·슬로건·AI 표기
- ☐ 편집 순서 S18-1→S18-3, 단일 LUT로 톤 통일

> 참고: 클립 묶음(S18-1~S18-3)·키프레임 정의는 `conti.md`·`00-anchors.md`·`codex-image-requests.md`와 동일 기준.
