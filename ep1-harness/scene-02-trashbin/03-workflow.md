# §D. 워크플로우 — 씬2 (씬1과 공통 + 씬2 특이사항)

> 기본 규칙은 씬1 `../03-workflow.md`와 동일. 아래는 씬2 차이점만.

## D-1. 키프레임 (GPT Image 2)
- 컷 프롬프트 = `codex-image-requests.md`의 컷 블록 + 레퍼런스 슬롯.
- 슬롯1 §B-1 캐릭터 / 슬롯2 §B-3 로케이션 / 슬롯3 직전 컷.
- **통 등장 컷(6·8·9·10)은 §B-4 `sheet_bins` 추가 투입.**
- 🎨 **쓰레기통은 실제 기사 사진을 레퍼런스로** 쓰는 게 색·디자인 정확도 최상:
  `https://t1.daumcdn.net/news/202507/23/seouleconomy/20250723083834835wppw.jpg`

## D-2. 매치컷 → `02-matchcut-7-8.md`

## D-3. Seedance 고정 문구
```
maintain the same young woman's face from the reference, Makoto Shinkai anime style, consistent lighting from upper-left, identical beige trench coat and brown shoulder bag, keep the orange/lime-green street bins exactly, same color grading
```

## D-4. 색감
- 씬2는 **늦은 오후 황금빛**(씬1 아침과 변주) — 광원 좌상단·따뜻한 색온도 유지. 컷7~10 채도 소폭 상승 OK.
- 단일 LUT로 10컷 톤 통일.

## D-5. 클립 단위
E1=컷1 / E2=컷2~5 / E3=컷6 / E4=컷7→8(매치컷) / E5=컷9~10.
시댄스 4/3/3 큐는 `seedance-batches.md`.
