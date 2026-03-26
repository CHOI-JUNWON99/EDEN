---
name: CSS 클래스명 충돌 해결 방법
description: 같은 클래스명이 여러 CSS 파일에서 사용될 때 !important로 인한 충돌 문제 - 고유한 클래스명으로 분리하여 해결
type: feedback
---

`.image` 클래스가 Technology.css에서 `height: 1500px !important`로 설정되어 Water.css의 `.image` 스타일을 덮어쓰는 문제가 발생했음.
해결: Water 관련 컴포넌트에서 `className="image"` → `className="water-image"`로 변경하여 클래스명 충돌 해소.
교훈: CSS 수정 전 동일 클래스명이 다른 CSS 파일에서도 사용되는지 먼저 확인할 것.
