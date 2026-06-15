# 🎬 Consistency Harness — 「빛이 머무는 도시, 성남」

> 민선 8기 성과 회고 × 민선 9기 비전 — 신카이 마코토 스타일(수정된 2D 애니) 시네마틱.
> **원안 = PRODUCTION BIBLE v2.1 / 이 repo = 변경사항을 기록하는 살아있는 버전.**

## 구조 — 기획서 3막 (총 45컷)

```
harness/
├─ act-01-discovery/        ACT1 일상 속의 발견 (EP1~5, 컷1~36)
│  ├─ ep1-escalator/        EP1 금광동 성남동초 등굣길 어린이 + 도로 에스컬레이터 (컷1~7)
│  ├─ ep2-trashbin/         EP2 중원구 여수동 시민 + 부활한 가로 쓰레기통 (컷8~14)
│  ├─ ep3-solomon/          EP3 성남시 솔로몬의 선택 — 청년 C3·C4 (컷15~22)
│  ├─ ep4-flu/              EP4 시민 무료 독감 예방접종 — C5 (컷23~29)
│  └─ ep5-clay/             EP5 율동공원 맨발 황톳길 — 노부부 C6·C7 (컷30~36)
├─ act-02-tancheon/         ACT2 수렴: 탄천으로 (컷37~40, 매직아워)
└─ act-03-droneshow/        ACT3 드론쇼 피날레 (컷41~45, 밤)
```

> **EP vs ACT:** EP = 시책 1개 + 주인공(들)짜리 자체 완결 사연(전부 ACT1 소속). ACT = 영화 3막 골격(ACT2 수렴/ACT3 피날레는 특정 시책·주인공 전속이 아님).

## EP 인덱스
| EP/ACT | 내용 | 폴더 |
|---|---|---|
| EP1 | 등굣길 어린이 + 에스컬레이터 (원안 노인/은행동 → 세션 업데이트) | [`act-01-discovery/ep1-escalator/`](act-01-discovery/ep1-escalator/) |
| EP2 | 여수동 시민 + 가로 쓰레기통 (원안 모란역 → 업데이트) | [`act-01-discovery/ep2-trashbin/`](act-01-discovery/ep2-trashbin/) |
| EP3 | 솔로몬의 선택 (C3·C4) | [`act-01-discovery/ep3-solomon/`](act-01-discovery/ep3-solomon/) |
| EP4 | 무료 독감 예방접종 (C5) | [`act-01-discovery/ep4-flu/`](act-01-discovery/ep4-flu/) |
| EP5 | 율동공원 황톳길 (C6·C7) | [`act-01-discovery/ep5-clay/`](act-01-discovery/ep5-clay/) |
| ACT2 | 탄천 수렴 (전원 집결) | [`act-02-tancheon/`](act-02-tancheon/) |
| ACT3 | 드론쇼 피날레 | [`act-03-droneshow/`](act-03-droneshow/) |

## 공통 규칙 (전 EP/ACT)
- **STYLE LOCK = 수정된 2D 애니** (실사 트리거 제거, `NOT photorealistic / not a photo / not 3D / not live-action` 네거티브). 각 폴더 `00-anchors.md` A-1 동일.
- **핸드오프(`codex-image-requests.md`)는 프롬프트 원문 그대로(verbatim) 투입** — 요약·정규화 금지(요약하면 실사로 빠짐).
- 광원 좌상단 기준, 한글 화면텍스트는 GPT Image 2 직접 렌더(깨지면 CapCut 폴백), 드론 글자는 CapCut 합성.
- 각 폴더 구성: `00-anchors`(앵커) · `conti`/`shots`(콘티) · `codex-image-requests`(GPT 핸드오프) · `README`.

> 이 repo 루트는 무관한 키오스크 웹앱(Seongnam Future Map)이며, 본 하네스는 `harness/`에 자립형으로 격리되어 있다.
