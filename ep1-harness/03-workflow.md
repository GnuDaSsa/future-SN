# §D. 일관성 유지 워크플로우 (하네스 작동 방식)

---

## D-1. 키프레임 생성 규칙 (GPT Image 2)

모든 컷 = 해당 `shots/cut-NN.md`의 **COPY BLOCK** (STYLE+CHARACTER+LOCATION+LIGHT(+ESCALATOR)+구도+레퍼런스 지시가 이미 조립됨)
\+ **레퍼런스 이미지 3슬롯** 투입:

| 슬롯 | 투입물 | 지시문(이미 COPY BLOCK에 포함) |
|---|---|---|
| 슬롯1 | §B-1 캐릭터 시트 | "keep the boy's face, hair, navy jacket, yellow badge and red backpack exactly as reference 1" |
| 슬롯2 | §B-3 로케이션 키 비주얼 | "use reference 2 for the school-street layout, mood and light direction; repaint in the same style" |
| 슬롯3 | **직전 확정 컷 키프레임** | "match the color grading and rendering style of reference 3" ← 컷이 진행될수록 색감 드리프트 방지 |

> 슬롯3은 컷이 누적될수록 색감이 한쪽으로 흐르는 것을 막는 장치다. 컷1은 슬롯3 없음.

---

## D-2. 매치컷 (컷7→8)
→ 별도 문서 `02-matchcut-7-8.md` 참조. (가장 중요)

---

## D-3. Seedance 영상화 규칙
- 모든 클립의 [Image] 슬롯에 **해당 컷 키프레임 + §B-1 캐릭터 시트**를 함께 투입.
- 고정 문구 항상 포함:
  ```
  maintain the same elementary school boy's face from the reference, 2D Makoto Shinkai anime illustration, hand-drawn anime, not photorealistic, not a photo, consistent lighting from upper-left
  ```
- 인물 등장 클립은 얼굴이 가장 잘 보이는 키프레임을 [Image1](기준 프레임)으로.

---

## D-4. 색감 드리프트 방지 (10컷 누적 오차 차단)
- 컷1~6: §A-4 빛을 그대로.
- 컷7~10: 미소·리빌로 가며 **채도만 살짝 상승**(연출 의도) — 단 **광원 방향·색온도는 유지**.
- 편집(CapCut): EP1 전용 **단일 LUT**를 10컷에 일괄 적용해 톤 통일.
- 의심되면 10컷 키프레임을 한 화면에 나란히 놓고 '같은 학생·같은 아침인가' 육안 검수.

---

## D-5. 생성 클립 단위 (10컷 → 5클립 권장)

| 클립 | 컷 | 방식 |
|---|---|---|
| **E1** | 1 | 단독 (부감 오프닝) |
| **E2** | 2~5 | 멀티샷 (발→가방끈→시선→표정, 등굣길 고생 빌드업) |
| **E3** | 6 | 단독 (광각 뒷모습) |
| **E4** | 7→8 | **시작/끝 프레임 매치컷** |
| **E5** | 9~10 | 멀티샷 (탑승 → 크레인 리빌) |

> 시댄스 4/3/3 큐 운영은 `seedance-batches.md` 참조.

---

## (선택) 이 세션에서 바로 생성하기 — Runway MCP
COPY BLOCK은 도구 비종속이라, 원하면 이 세션의 `runway_mcp` 도구로 바로 투입 가능:
- `generate_image` — 시트/키프레임 생성 (레퍼런스 이미지 첨부 지원)
- `generate_video` — 키프레임 → 클립
- `generate_multishot_video` — E2/E5 같은 멀티샷 클립

> 자동 생성은 기본적으로 하지 않는다. 필요하면 운영자가 명시적으로 요청.
