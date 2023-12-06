# Create-React-App

```sh
npm install -D tailwindcss postcss autoprefixer style-loader css-loader postcss-loader
```

```sh
npx tailwindcss init -p
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'], // 이부분추가
    theme: {
        extend: {},
    },
    plugins: [],
}
```

```css
// src/App.css

@tailwind base;
@tailwind components;
@tailwind utilities;

// 이하 생략
```

```jsx
// index.js
```

## webpack loader 설정

필요한 패키지 설치

```sh
npm install tailwind-cra-webpack-plugin
```

webpack.config.js 파일생성

```

```

## icons

```sh
npm install react-icons --save
```

## 프론트엔드 개발자를 꿈 꾸게 된 이유

프론트앤드 개발자라는 길을 선택한 이유는 저의 노력이 바로 눈으로 한번에 보여진다는 점에서 매력을 느꼈습니다.
초기에 온라인 강의 들으면서 `제로초의 HTML 무작정 따라하기` 보면서 기초적인 지식을 쌓았습니다.
얼마 작성하지 않는 내용으로도 화면이 많이 바뀌는것이 재미있었습니다. 더욱더 배우고싶어져서

경일게임아카데미에서 수업을 들으면서 다양한 웹 프론트엔드 프레임워크를 접하고 프로젝트를 하면서 프론트엔드의 역활을 자세히 배웠으며
강의를 듣고 수업내용을 정리를 Notion사이트로 정리하면서 Notion과 같이 사용자가 원하는 기능을 적재적소에 배치하면서
웹을 효율적으로 만드는 프론트엔드 개발자로 성장하고 싶어 프론트 개발자의 꿈을 점차 키우게 되었습니다.

`프레임워크`
`라이브러리`
`React`
