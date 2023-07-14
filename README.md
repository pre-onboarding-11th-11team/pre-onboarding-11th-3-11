# 원티드 프리온보딩 인턴십 3주차 과제

> 특정 깃헙 레파지토리[(facebook/react)](https://github.com/facebook/react)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축하고 Best Practice 선정

![infinityscroll](https://github.com/pre-onboarding-11th-11team/pre-onboarding-11th-3-11/assets/100937653/d2b18d27-6901-42e1-9a8d-3b0865f589cb)

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

`.env` 파일을 `root` 폴더에 생성합니다.

```.env
REACT_APP_GITHUB_ACCESS_TOKEN = <your github token>
REACT_APP_GITHUB_API_URL = "https://api.github.com"
```

`root` 폴더에서 실행합니다.

```
npm install
npm start
```

## 폴더구조

```
📦src
  ├── 📄index.jsx
  ├── 📄App.jsx
  ├── 📂common
  │    ├── 📂api
  │    ├── 📂context
  │    └── 📂hook
  ├── 📂component
  │    ├── 📂Ad
  │    └── 📂Issue
  ├── 📂layout
  ├── 📂page
  └── 📂utils
```

## 구현 기능

- 이슈 목록 페이지 구현
  - 다섯번째 셀마다 광고 이미지 출력
  - [무한 스크롤](#무한-스크롤)
- 이슈 상세 페이지 구현
- [Context API](#context-api)
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 지정된 조건에 맞게 데이터 요청 및 표시

## Best Practice 선정

### 무한 스크롤

- useRef를 사용하여 target ref를 생성하여 페이지의 끝 부분을 가리키는 DOM 요소에 연결시킴
- `root`, `rootMargin`, `threshold` 옵션을 사용하여 observer의 동작을 조절
- IntersectionObserver 콜백 함수는 관찰 요소들에 대한 정보를 `IntersectionObserverEntry` 객체의 배열인 `entries` 를 인자로 받는다. 이 객체중에 `isIntersecting` 속성은 관찰 대상 요소가 보이는지 여부를 불린값으로 나타낸다. 값이 `true`이면 관찰 대상 요소가 보이고 있다는 뜻이다.

```jsx
// hook/useInfiniteScroll.js

import { useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchNextPage) => {
  const target = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    }, options);
    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target, fetchNextPage]);

  return { target };
};

export default useInfiniteScroll;
```

```jsx
// page/Issues.jsx

// imports...

const Issues = () => {
  const { fetchInit, fetchIssues } = useGithubAPI('facebook', 'react');
  const { target } = useInfiniteScroll(fetchIssues);

  // code...

  return (
    <>
      // issues...
      <div ref={target}></div>
    </>
  );
};
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
    <td align="center" valign="top" width="25%"><a href="https://github.com/RumbleBi"><img src="https://avatars.githubusercontent.com/u/85114315?v=4" width="100px;" alt="Mayank Badola"/><br /><sub><b>조진일</b></sub></a><br /></td>
    <td align="center" valign="top" width="25%"><a href="https://github.com/mia-seo"><img src="https://avatars.githubusercontent.com/u/100937653?v=4" width="100px;" alt="Mayank Badola"/><br /><sub><b>주대선</b></sub></a><br /></td>
      <td align="center" valign="top" width="25%"><a href="https://github.com/BrightSton"><img src="https://avatars.githubusercontent.com/u/105143449?v=4" width="100px;" alt="Mayank Badola"/><br /><sub><b>이현석</b></sub></a><br /></td>
  </tr>
</table>
