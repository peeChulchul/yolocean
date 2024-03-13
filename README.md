# 프로젝트

![title](https://github.com/nbc-react-3rd-final-project-a5/yolocean/assets/146798554/e9a044fa-ec2c-4c27-a9fc-e366664ce323)

### 🏠 [yolocean.store](https://yolocean.store/)

</br>

## 설명

### 🌊챙기기 번거로운 해양 레저 용품, 간단하게 렌탈하세요!🌊

사용자가 원하는 날짜에 렌탈 물품과 수령 지점을 선택한 후 간편하게 예약하고 결제할 수 있는 웹 애플리케이션
</br>

## 기술스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/zustand-593D88?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/reactquery-FF4151?style=for-the-badge&logo=reactquery&logoColor=white"> <img  src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

### DB

<img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=black">

### 버전 관리

<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">

### 협업 툴

<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</br>

## 아키텍쳐

![아키텍쳐](https://github.com/nbc-react-3rd-final-project-a5/yolocean/assets/146798554/2a45e05b-8ba7-4836-81b7-c62159928404)
</br>

## 주요기능

### 사용자

- **회원 가입**: 사용자가 서비스에 가입할 수 있는 기능
- **본인 인증**: 본인 확인 절차 기능
- **로그인**: 사용자가 서비스에 로그인하는 기능
- **계정 찾기**: 사용자의 계정 및 비밀번호를 찾는 기능
- **회원 정보 수정**: 회원 정보를 수정할 수 있는 기능
- **리뷰 및 QnA**: 제품에 관한 리뷰, QnA 작성 기능

### 제품 렌탈 및 결제

- **지점 선택**: 사용자가 지점을 선택해 어떤 지점에서 물건을 수령할 지 선택 가능
- **제품 조회 및 검색**: 제품 목록 조회 및 검색 기능
- **장바구니**: 장바구니에 담아두고 나중에 결제할 수 있는 기능 제품의 수량 선택 가능
- **결제**: 선택한 제품에 대하여 결제할 수 있는 기능

### 관리자

- **제품 관리**: 제품 추가 및 수정, 삭제
- **지점 관리**: 지점 추가 및 수정, 삭제
- **프로모션 관리**: 카르셀 및 배너 추가 및 수정, 삭제
- **리뷰 관리**: 작성된 리뷰 블라인드 처리 및 메인 페이지 노출 리뷰 설정
- **Q&A 관리**: Q&A 답변 작성
- **렌트 관리**: 반납 처리

<div style="display: flex; justify-content: space-between; margin:10px 0px; ">
  <img src="https://github.com/nbc-react-3rd-final-project-a5/yolocean/assets/144536397/91410ebe-360c-4881-96f9-6f8f2eb5b582" width="30%" height="250px" /> <img src="https://github.com/nbc-react-3rd-final-project-a5/yolocean/assets/144536397/4801e454-34ec-41c4-95e8-7718b54133b5" width="30%" height="250px"/> <img src="https://github.com/nbc-react-3rd-final-project-a5/yolocean/assets/144536397/93156772-71b6-4c7a-bbe9-2cfa7a8d0d17" width="30%" height="250px"/>
</div>
<div style="display: flex; justify-content: space-between;">
<img src=https://github.com/nbc-react-3rd-final-project-a5/yolocean/assets/144536397/d7665974-2770-4c76-b855-775c2400b0e1 width=30% height="250px"/> <img src=https://github.com/nbc-react-3rd-final-project-a5/yolocean/assets/144536397/63a5f1dd-0a2f-4ad8-8033-0644457e2e8c width=30% height="250px"/> <img src=https://github.com/nbc-react-3rd-final-project-a5/yolocean/assets/144536397/bb581fd7-ab3e-433a-af2d-cfbeee2e854f width=30% height="250px"/>
</div>
</br>


## 트러블 슈팅

### 폰트

<details><summary>문제
</summary>
<br/>
영어와 한글 폰트를 구분하여 사용하고 있으며 최적화를 위해 next/font/google과 next/font/local을 사용했습니다.
그러나 한글로 사용하는 웹 폰트 파일의 크기가 약 2MB로 인해 FOUT(Flash of Unstyled Text) 현상이 발생했습니다.
<br/>
</details>

<details><summary>해결
</summary>
<br/>
폰트 용량 최적화를 위해 국가 표준 한글과 한글 자음 및 모음을 적용한 커스텀 서브셋을 적용시킨 폰트 파일을 생성하여 폰트 용량을 1/4로 줄였습니다.
<br/>
</details>

---

### 이미지

<details><summary>문제
</summary>
<br/>
이미지 용량이 너무 커서 이미지다운로드까지 상품설명이 표지되지 않는 문제가 발생하였습니다.
<br/>
</details>

<details><summary>해결
</summary>
<br/>
Next.js에서 제공하는 placeholder를 활용하여 이미지가 로딩되는 동안 블러 처리를 하여 사용자에게 이미지를 제공하기위한 로딩이 발생중이라는 것을 알려줄 수 있게 되었습니다.
<br/>
</details>

---

## 팀원소개

|  이름  |   역할   | GitHub 및 개인페이지               | 담당기능 |
| :----: | :------: | ---------------------------------- | ------ |
| 김현철 |   리더   | https://github.com/peeChulchul     | 상품 상세페이지,공용컴포넌트 |
| 도경구 |  부리더  | https://github.com/dosion9         |  리뷰 및 문의작성,결제  |
| 마진우 |   팀원   | https://github.com/MaJinWoo        |  카테고리,마이페이지 |
| 민예솔 |   팀원   | https://github.com/ys-oul          | 로그인 회원가입,장바구니  |
| 전상현 | 디자이너 | https://notefolio.net/Kant_/353481 | 디자인    |
