# One-Line

AI가 한 줄로 요약한 문장을 게시물의 썸네일로 하는 자유 주제의 블로그 서비스.

## 개요

- 서비스명 : One-Line
- 개발 기간 : 04.17 ~ 05.19 (5주)
- 서비스 [링크](www.naver.com)
- 와이어프레임 [링크](https://www.figma.com/file/nciwBpbdF0fojqBuTkO5Az/10team_3rdProject?type=design&t=Ng2z1q1zs8n8Pepa-0)
- API 문서 [링크](https://www.notion.so/elice/dea234ec490545bd88d9a278126b191c?v=b64fb6a9fe6146d5ac48067e3210568e&pvs=4)

## 기획 의도

- ai가 작성자의 글을 요약하여 제목과 썸네일을 만들어주어 쉽게 접근할 수 있는 블로그 서비스(벨로그 + 브런치)

## 팀원 소개

| 이름        | 역할             |
| ----------- | ---------------- |
| 손유경/팀장 | Frontend/Backend |
| 문석준      | Backend/AI       |
| 안정민      | Backend          |
| 임성준      | Frontend         |
| 정연준      | Frontend         |
| 유지원      | Frontend         |

## 기술 및 도구

#### Frontend

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<br />
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-FAB040?style=flat-square&logo=Recoil&logoColor=white"/>

#### Backend

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=Sequelize&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/>

#### AI

<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/>
<img src="https://img.shields.io/badge/Pytorch-EE4C2C?style=flat&logo=Pytorch&logoColor=black"/>
<img src="https://img.shields.io/badge/Jupyter-F37626?style=flat&logo=Jupyter&logoColor=black"/>
<img src="https://img.shields.io/badge/tensorflow-FF6F00?style=flat&logo=tensorflow&logoColor=black"/>
<img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=flask&logoColor=white">
<br>

#### Deploy

<img src="https://img.shields.io/badge/Amazon_S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=Amazon EC2&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=flat-square&logo=Amazon RDS&logoColor=white"/>

## DB 테이블 구조

![image](/uploads/8e7ecffacea08f48d576c04c971bc1ec/image.png)

## 기능

- 메인기능

  - 회원가입 및 로그인
  - 랜딩 페이지 : Trending 게시물 / 최신 게시물 보기
  - 작가 페이지(개인 페이지) : 게시글 작성 / 작성한 게시글 목록 조회 / **카테고리** / 게시글 관리(수정, 삭제)
  - 작성한 게시물 내용을 요약하여 메인화면에 표시.

- 서브기능
  - 회원 정보 수정
  - 게시물 **/ 유저** 검색 기능(?)
  - 댓글 기능
  - 좋아요 기능

## 서비스 시연 예시

예시 화면 붙여넣기.

## 실행 방법

```
/* client */
npm install
npm run dev

/* server */
npm install
npm start
```

##
