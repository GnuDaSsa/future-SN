# §D-2. EP3 전환 전용 절차 — 레킹포커스(컷17) + 운율숏(컷21)

> EP1/2의 "눈 감기→눈뜨기 매치컷"에 해당하는 EP3 시그니처. **컷17a 한 키프레임에서 17b·21을 파생**한다.

## 1) 컷17a 마스터 키프레임 확정
- `codex-image-requests.md` 컷17a 블록 — 차 실내, 백미러 속 C3 선명 / 빈 조수석 블러.
- 구도·조명·차 실내를 만족할 때까지 재생성. **이 한 장이 17b와 21의 원본.**

## 2) 컷17b (레킹포커스 끝) = 컷17a 편집
```
Edit cut17a.png. Keep the camera, composition and lighting 100% identical. Only change: shift the focus from the rear-view mirror to the empty passenger seat where soft sunlight falls and dust motes float; the mirror now softly blurred. Change nothing else. 2D anime illustration style of a Makoto Shinkai anime film, hand-drawn anime, not photorealistic, not a photo, same color grading.
```
→ Seedance S10: first=17a / last=17b, "초점만 백미러→빈 조수석으로 이동, 카메라·구도 고정".

## 3) 컷21 (운율숏 페이오프) = 컷17a 편집 (C4 추가)
```
Edit cut17a.png. Keep the composition, framing, camera and lighting 100% identical to the original. Only change: seat the young woman (C4, use her character sheet) in the passenger seat smiling shyly, and soften C3's eyes in the rear-view mirror into a gentle look. Keep the car interior and everything else identical. 2D anime illustration style of a Makoto Shinkai anime film, hand-drawn anime, not photorealistic, not a photo, same color grading.
```
→ 컷17a와 **픽셀 단위 정합** → "빈 조수석 → 채워진 조수석" 운율이 깔끔히 끊긴다.
→ Seedance S12: 컷20에서 시작, 끝 프레임=컷21로 지정.

## 검수
- ☐ 17a·17b·21의 **차 실내·구도·조명**이 동일(겹쳐 윤곽 일치)
- ☐ 17b는 **초점만** 바뀜 / 21은 **조수석에 C4 추가 + C3 눈빛**만 바뀜
- ☐ C4 얼굴이 `sheet_c4`와 동일
- ☐ 광원 좌상단 유지
