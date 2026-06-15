# §D-2. 매치컷 (컷7 → 컷8) — 씬2

> 눈 감기(컷7, 통 없는 인도) → 눈 뜨기(컷8, 쓰레기통 한 세트 등장) 사이의 배경 치환 매치컷.
> 컷8은 **새로 생성하지 말고 컷7 이미지를 정밀편집**해 픽셀 단위 정합.

## 절차
1. **컷7 키프레임 확정** — `codex-image-requests.md` 컷7 블록(눈 감음, **통 없는 인도** 배경). 프레이밍·머리 위치·광원(좌상단) 만족까지 재생성.
2. **컷7 → 컷8 정밀편집** (입력=컷7, 보조 레퍼런스=`sheet_character.png`·`sheet_bins.png`):
```
Edit cut07.png. Keep this woman's pose, framing, head position, facial features, hair, beige trench coat, bag and the lighting from the upper-left 100% identical. Only change two things: (1) open her eyes wide with a surprised, pleased look and slightly raised eyebrows; (2) reveal beside/behind her a set of Seongnam's revived street trash bins standing side by side on the sidewalk, two 75-liter modern metal bins with charcoal dark-gray boxy bodies and curved domed colored tops: the left bin bright orange for general waste with a white '일반쓰레기 / Waste' label and a single horizontal rectangular drop slot, the right bin bright lime-green for recycling with a white '재활용품 / Recycle' label, two round circular top openings and small PLASTIC/BOTTLE/CAN category icons; both with white pictograms, mounted on a tidy base near the curb. Everything else unchanged. Strongly Makoto Shinkai photorealistic style (CoMix Wave Films), not Studio Ghibli, same color grading.
```
3. **Seedance(E4):** 컷7=first frame / 컷8=last frame, "눈 감았다 뜨는 사이 인도 옆에 쓰레기통이 나타남" 지시.

## 검수
- ☐ 컷7·8 머리 위치·프레임·광원 일치
- ☐ 컷8에서 바뀐 것이 **눈(뜸/놀람)과 배경(쓰레기통 등장)뿐**
- ☐ 통 색(일반=주황/재활용=라임그린)·디자인이 `sheet_bins`와 동일
- ☐ "어, 쓰레기통!" 싱크
