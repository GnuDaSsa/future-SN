# §D-2. 매치컷 (컷7 → 컷8) 전용 절차 — 하네스에서 가장 중요

> 눈 질끈 감기(컷7) → 눈 번쩍 뜨기(컷8) 사이에 배경이 계단길 → 도로 에스컬레이터로 바뀌는 매치컷.
> 핵심: 컷8을 **새로 생성하지 말고**, 컷7 이미지를 **정밀편집**해 픽셀 단위로 정합시킨다.

---

## 절차

### 1) 컷7 키프레임 확정
- `shots/cut-07.md` COPY BLOCK으로 생성 (눈 질끈 감음, **계단길** 배경).
- 프레이밍·머리 위치·광원(upper-left)을 만족할 때까지 재생성. **이 이미지가 매치컷의 마스터.**

### 2) 컷7 이미지를 정밀편집 → 컷8 (GPT Image 2 edit)
입력 = 컷7 확정 키프레임. 편집 지시문 (`shots/cut-08.md`와 동일):

```
Keep this boy's pose, framing, head position, facial features, hair, navy hooded jacket, yellow badge, red backpack and the lighting from the upper-left 100% identical. Only change two things: (1) open his eyes wide with a surprised look and raised eyebrows; (2) replace the staircase background behind him with Seongnam's first outdoor road escalator beside the school staircase, two parallel escalators running side by side (one ascending, one descending), about 28 meters long climbing the slope, clean stainless-steel steps, glass side panels, a sloped transparent weather canopy overhead, rubber handrails, yellow safety markings, blending into the old school-zone neighborhood. Everything else unchanged. 2D anime illustration style of a Makoto Shinkai anime film, hand-drawn anime, not photorealistic, not a photo, same color grading.
```

→ 컷8이 컷7과 픽셀 단위로 정합 → 매치컷이 깔끔하게 끊긴다.

### 3) Seedance 영상화 (E4 클립)
- **컷7 키프레임 = first frame / 컷8 키프레임 = last frame** 지정.
- 프롬프트: "눈 감았다 뜨는 사이 배경이 계단길에서 도로 에스컬레이터로 전환".
- 고정 문구 포함: `maintain the same elementary school boy's face from the reference, 2D Makoto Shinkai anime illustration, hand-drawn anime, not photorealistic, not a photo, consistent lighting from upper-left`

---

## 검수
- ☐ 컷7·컷8에서 **머리 위치·프레임·광원**이 일치하는가 (겹쳐 보면 윤곽이 맞는가)
- ☐ 컷8에서 바뀐 것이 **눈(뜸/놀란 눈썹)과 배경(에스컬레이터)뿐**인가
- ☐ 얼굴·머리·네이비 점퍼·노란 명찰·빨간 가방이 컷7과 동일한가
- ☐ "어?!" 표정 싱크가 맞는가
