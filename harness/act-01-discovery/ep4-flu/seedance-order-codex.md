# 🎬 EP4 Seedance 영상 제작 오더 + 클립 프롬프트 (코덱스 전달용)

> EP4 「시민 무료 독감 예방접종」 7컷(컷23~29) → **2클립(S14-1·S14-2)** 영상화.
> 대상 도구: **Seedance 2.0** (멀티 레퍼런스 I2V · 멀티샷 · 시작/끝 프레임 · 네이티브 오디오).

---

## ⛔ 코덱스에 그대로 줄 오더 (복붙)

```
아래 EP4 Seedance 클립 프롬프트(S14-1·S14-2)로 영상을 제작해줘.

[전제] 이미지 작업이 끝나 EP4 키프레임이 준비되어 있어야 함:
  sheet_c5.png, sheet_clinic.png, cut23.png ~ cut29.png
  (컷28은 ★레킹포커스용 초점 분리 키프레임). 없으면 EP4 codex-image-requests.md 먼저 생성.

[지시]
1) Seedance 2.0으로 클립 2개(S14-1·S14-2)를 각각 생성. 각 클립의 'Ref' 슬롯에
   명시된 이미지를 그대로 넣고, 'Prompt'는 한 글자도 요약/의역 말고 그대로 투입.
2) S14-2의 컷28은 반드시 ★rack focus(레킹포커스): 안내문(전경 블러)→C5 눈(초점)으로
   초점이 이동하며 눈이 동그래지도록 지정. 안내문 한글은 또렷하게 유지.
3) 화풍 유지: 키프레임의 2D 핸드드로잉 신카이 애니 룩을 유지하고
   실사로 만들지 말 것(키프레임이 곧 룩의 기준).
4) 대사는 프롬프트 안 따옴표 한국어로 립싱크 생성. (음색 통제 필요하면 TTS를
   [Audio1]로 투입하는 하이브리드도 가능 — 특히 C5 코맹맹이·쉰소리→마지막 맑게
   음색 대비가 필요하면 하이브리드 권장. 우선 네이티브로 1차 생성)
5) 출력: 16:9, 720p 네이티브 → 업스케일, 클립 길이 4~15초.
   파일명 S14-1.mp4 · S14-2.mp4. 완료되면 컷 순서(S14-1→S14-2)와 길이 보고.
6) 각 클립 1차 생성 후 얼굴/마스크/후드 일관성·컷26 한글 가독성·컷28 레킹포커스
   정합을 자체 점검하고, 깨지면 해당 클립만 재생성.
```

---

## 🔒 전 클립 공통 (모든 Prompt 말미에 포함)
```
maintain C5's face/mask/gray hoodie from the character sheet, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9
```
> 색감 닻: 인물 클립은 `sheet_c5.png` + 가장 얼굴이 선명한 `cut25.png`를 보조 레퍼런스로 함께 투입해 클립 간 색감을 통일.
> 한글 닻: 컷26 안내문 `"성남시민 무료 독감 예방접종"`은 또렷하게(legible) 유지 — 깨지면 CapCut 폴백.

---

## S14-1 — 컷23~25 · 멀티샷(POV 병원→카드 내미는 손→마스크 위 지친 눈) (~8s)
```
Ref: Image1=cut23.png, Image2=cut24.png, Image3=cut25.png, Image4=sheet_c5.png, Image5=sheet_clinic.png
Prompt: Three-shot sequence at a small Korean neighborhood clinic.
 Shot 1 from [Image1]: blurry feverish first-person POV swaying toward the clinic entrance sign, hazy double-exposure blur, unsteady — the sick man groans "으으…" in a stuffy, hoarse voice.
 Cut to Shot 2 from [Image2]: top-down insert, C5's hand weakly placing a credit card on the clean white reception counter — "접종… 얼마예요…?".
 Cut to Shot 3 from [Image3]: reverse over-the-shoulder from behind the nurse, the masked man C5 faces camera with tired feverish eyes, soft clinic bokeh.
 Keep C5 consistent with [Image4], setting with [Image5]. maintain C5's face/mask/gray hoodie from the character sheet, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9.
SFX: 가쁜 숨·콜록, 접수대 키보드, 조용한 의원 앰비언스.
```

## S14-2 — 컷26~29 · 멀티샷(안내문→카드 돌아옴→★컷28 레킹포커스→눈 동그래짐→실루엣 역광) (~10s)
```
Ref: Image1=cut26.png, Image2=cut27.png, Image3=cut28.png, Image4=cut29.png, Image5=sheet_c5.png
Prompt: Four-shot resolution sequence.
 Shot 1 from [Image1]: insert close-up of a printed notice held by a nurse's hand reading exactly "성남시민 무료 독감 예방접종" in clean Korean typography (keep the Korean text exact and legible) — the nurse says "성남시민이세요? 그럼 무료예요.".
 Cut to Shot 2 from [Image2]: macro, shallow depth of field, the credit card returned respectfully on two open palms, warm bokeh.
 Cut to Shot 3 from [Image3] ★rack focus: start focused on the "성남시민 무료 독감 예방접종" notice blurred in the foreground, then the focus racks back to C5's eyes above the mask as they widen in surprise — "…네? 무료요?".
 Cut to Shot 4 from [Image4]: backlit silhouette wide shot, warm late-afternoon amber light and golden-hour sun flare at the clinic door; C5 steps out into the sun, hood pushed back, his eyes now smiling above the mask, a light relieved step — "감사합니다!" in a clear, bright voice.
 Keep C5 consistent with [Image5]. maintain C5's face/mask/gray hoodie from the character sheet, keep the 2D hand-drawn Makoto Shinkai anime look of the keyframe, NOT photorealistic, not a photo, consistent lighting from the upper-left, 16:9, warm PM grade on the final shot.
SFX: 종이 사각임, 접수대 응대, 출입문 열림, 햇살 속 잔잔한 거리 앰비언스.
```

---

## ✅ 제작 후 체크
- ☐ S14-1·S14-2 모두 **2D 애니 룩 유지**(실사로 안 빠졌나)
- ☐ 얼굴·흰 마스크·회색 후드집업이 전 클립 동일(컷29만 후드 내림)
- ☐ **컷26 한글** `"성남시민 무료 독감 예방접종"` 또렷(깨지면 CapCut 폴백)
- ☐ **컷28 레킹포커스**: 안내문(전경 블러)→눈(초점) 이동, 눈 동그래짐
- ☐ 정서 라임: 지친 눈(23·25) → 동그래진 눈(28) → 웃는 눈(29) 연결
- ☐ 광원 좌상단 유지, 컷29만 LIGHT-PM 앰버·역광
- ☐ 대사 립싱크 싱크 OK (안 되면 TTS [Audio1] 하이브리드 — C5 코맹맹이·쉰소리→마지막 맑게)
- ☐ 편집 순서 S14-1→S14-2, 단일 LUT로 톤 통일(`03-workflow.md` D-4)

> 참고: 클립 묶음(S14-1·S14-2, 기획서 S14)·키프레임 정의는 `conti.md`·`codex-image-requests.md`와 동일 기준.
