# [🔗](https://epris.or.kr/) 이화여자대학교 PR 학회 EPRIS 웹사이트 

📅 개발 기간: 2024.08.07 ~ 2024.09.08 <br />
💡 역할: 프론트엔드 리드

## 🚀 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" /> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" /> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

## 🎯 담당 파트
### Activities 페이지
- 학회의 성과 및 활동 내용을 한눈에 볼 수 있는 페이지<br />
- 반응형 지원 → 모바일, 태블릿, 데스크탑<br />
- 750px을 기준으로 슬라이더, 캐러셀 컴포넌트 구분하여 사용<br/>
- 스크롤 위치 계산이 필요한 플로팅 버튼에 throttle 적용하여 스크롤 이벤트 최적화<br/>

<table>
  <tr>
    <td valign="top"><img src='https://github.com/user-attachments/assets/4c649d84-0318-4d82-9a68-4c67925cc5b5' width='150px' /></td>
    <td valign="top"><img src='https://github.com/user-attachments/assets/89491954-3398-45dc-a83e-279a9a8f1818' width='300px' /></td>
    <td valign="top"><img src='https://github.com/user-attachments/assets/8e4be120-801e-40a8-96c0-70e0d7f301f5' width='500px' /></td>
  </tr>
</table>

### Activities 관리자 페이지
- Activities 페이지 데이터 업데이트를 위한 페이지 (Project List, Award & Statistics, Session, Corporate Project, Network)<br />
- 세션 스토리지를 활용해 작성 중인 데이터 유지
- 변경사항이 있을 때만 수정 버튼 활성화
<img src='https://github.com/user-attachments/assets/ae66287d-b9c1-4b0a-afe3-872adfe7310a' width='300px' />

## ⚡ 메인페이지 로딩 속도 개선  
- WebP 변환 → 이미지 로딩 최적화
- React.lazy 적용 → 불필요한 JS 로드 감소

### 성능 개선 결과 (Fast 4G 환경 기준)
⏳ LCP 6.58s → 2.66s → 주요 콘텐츠 로딩 약 60% 단축<br/>
⏱️ 전체 로딩 시간 7,163ms → 2,239ms, 약 5초 단축<br/>

#### 📊 성능 개선 비교 (Before vs After)
<table> 
  <tr> 
    <td valign="top"><img src="https://github.com/user-attachments/assets/87f28ba8-368e-46a9-98cf-2d2859174fea" width="200px" /></td>
    <td valign="top"><img src="https://github.com/user-attachments/assets/23647679-5be4-4e52-a85c-1ffc4ff1a005" width="200px" /></td> 
  </tr> 
</table>

## 🎨 스타일 컨벤션
- 스타일 파일 분리, s-dot 네이밍 사용
- 레이아웃 태그 구조
  1. 최상위 태그 `S.Layout`
  2. 2개 이상의 요소 포함 `S.Container`
  3. 단일 요소 `S.Wrapper`
- 절대 단위 사용 지양 및 상대 단위 rem 사용 지향
