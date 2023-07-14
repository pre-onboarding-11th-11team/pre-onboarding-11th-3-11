# 원티드 프리온보딩 인턴십 3주차 과제

> 특정 깃헙 레파지토리[(facebook/react)](https://github.com/facebook/react)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축하고 Best Practice 선정

![pre](https://github.com/eosun77/facebook-react-issue-list/assets/100937653/44f8fd72-26ff-4c61-a113-9c358c59affc)

## 목차

- [원티드 프리온보딩 인턴십 3주차 과제](#원티드-프리온보딩-인턴십-3주차-과제)
  - [목차](#목차)
  - [시작하기](#시작하기)
  - [폴더구조](#폴더구조)
  - [구현 기능](#구현-기능)
  - [Best Practice 선정](#best-practice-선정)
    - [무한 스크롤](#무한-스크롤)
    - [Context API](#context-api)
    - [useGitHubAPI](#usegithubapi)
  - [문서](#문서)
  - [팀원](#팀원)

## 시작하기

```
git clone https://github.com/eosun77/wanted-pre-onboarding-frontend.git
```

`.env` 파일을 `facebook-react-issue-list` 폴더에 생성합니다.

```.env
REACT_APP_GITHUB_TOKEN = <your github token>
REACT_APP_BASE_URL = "https://api.github.com/repos/facebook/react"
```

`facebook-react-issue-list` 폴더에서 실행합니다.

```
npm install
npm start
```

## 폴더구조

```
📦src
  ├── 📄index.css
  ├── 📄index.tsx
  ├── 📄App.tsx
  ├── 📂components
  ├── 📂hooks
  ├── 📂pages
  ├── 📂routers
  ├── 📂types
  └── 📂utils
```

## 구현 기능

- 이슈 목록 페이지 구현
  - 다섯번째 셀마다 광고 이미지 출력
  - [무한 스크롤](#무한-스크롤)
- 이슈 상세 페이지 구현
- [Context API를 활용한 API 연동](#context-api를-활용한-api-연동)
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 지정된 조건에 맞게 데이터 요청 및 표시

## Best Practice 선정

### 무한 스크롤

```jsx

```

### Context API

- Context API와 useReducer를 사용하여 상태 관리
- repository, issues, page, loading, error 상태 관리

```

```

### useGitHubAPI

- API를 요청하는 service 코드를 useGitHubAPI로 묶어서 관리

```jsx

```

## 문서

- [3주차 회의록](https://www.notion.so/2-c29f78be6aec418aba9ee2c1a9402e8d)

## 팀원

<table>
  <tr>
    <td align="center" valign="top" width="25%"><a href="https://github.com/WONILLISM"><img src="https://avatars.githubusercontent.com/u/47653005?v=4" width="100px;" alt="Mayank Badola"/><br /><sub><b>박원일</b><br/>팀장</sub></a><br /></td>
    <td align="center" valign="top" width="25%"><a href="https://github.com/RumbleBi"><img src="https://avatars.githubusercontent.com/u/85114315?v=4" width="100px;" alt="Mayank Badola"/><br /><sub><b>조원일</b></sub></a><br /></td>
    <td align="center" valign="top" width="25%"><a href="https://github.com/mia-seo"><img src="https://avatars.githubusercontent.com/u/100937653?v=4" width="100px;" alt="Mayank Badola"/><br /><sub><b>주대선</b></sub></a><br /></td>
      <td align="center" valign="top" width="25%"><a href="https://github.com/BrightSton"><img src="https://avatars.githubusercontent.com/u/105143449?v=4" width="100px;" alt="Mayank Badola"/><br /><sub><b>이현석</b></sub></a><br /></td>
  </tr>
</table>
