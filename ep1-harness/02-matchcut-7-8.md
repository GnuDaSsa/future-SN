# §D-2. 매치컷 (컷7 → 컷8) 전용 절차 — 하네스에서 가장 중요

> 눈 감기(컷7) → 눈 뜨기(컷8) 사이에 배경이 골목 → 에스컬레이터로 바뀌는 매치컷.
> 핵심: 컷8을 **새로 생성하지 말고**, 컷7 이미지를 **정밀편집**해 픽셀 단위로 정합시킨다.

---

## 절차

### 1) 컷7 키프레임 확정
- `shots/cut-07.md` COPY BLOCK으로 생성 (눈 감기, **골목** 배경).
- 프레이밍·머리 위치·광원(upper-left)을 만족할 때까지 재생성. **이 이미지가 매치컷의 마스터.**

### 2) 컷7 이미지를 정밀편집 → 컷8 (GPT Image 2 edit)
입력 = 컷7 확정 키프레임. 편집 지시문 (`shots/cut-08.md`와 동일):

```
Keep this man's pose, framing, head position, facial features, glasses, hair, 2-layer outfit and the lighting from the upper-left 100% identical. Only change two things: (1) open his eyes wide with a surprised look and slightly raised eyebrows; (2) replace the alley background behind him with a modern outdoor hillside escalator installed along the alley, clean stainless-steel steps, glass side panels, a sloped weather canopy overhead, rubber handrails, small solar-style lamp posts beside it, blending into the old neighborhood. Everything else unchanged. Makoto Shinkai anime film style, same color grading.
```

→ 컷8이 컷7과 픽셀 단위로 정합 → 매치컷이 깔끔하게 끊긴다.

### 3) Seedance 영상화 (E4 클립)
- **컷7 키프레임 = first frame / 컷8 키프레임 = last frame** 지정.
- 프롬프트: "눈 감았다 뜨는 사이 배경이 골목에서 에스컬레이터로 전환".
- 고정 문구 포함: `maintain the same elderly man's face from the reference, Makoto Shinkai anime style, consistent lighting from upper-left`

---

## 검수
- ☐ 컷7·컷8에서 **머리 위치·프레임 경계·광원**이 일치하는가 (겹쳐 보면 윤곽이 맞는가)
- ☐ 컷8에서 바뀐 것이 **눈(뜸/놀란 눈썹)과 배경(에스컬레이터)뿐**인가
- ☐ 얼굴·안경·2겹 복장·헤어가 컷7과 동일한가
- ☐ "…어?" 표정 싱크가 맞는가
