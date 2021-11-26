ex08: JSX Tutorials

01. props(property)
  1) 컴포넌트의 데이터
  2) 부모 컴포넌트에서 자식으로 전달된다.
    - Component Communication (컴포넌트 간의 통신), DataFlow
    - Top -> Down 방식
  3) 자식 컴포넌트에서는 변경 불가
  4) 부모가 소유한다. (부모 - FoodList / 자식 - ListItem)

02. FoodList src01 : 클래스 컴포넌트
03. FoodList src02 : Data Flow(top->down) : 클래스 컴포넌트
04. FoodList src03 : Data Flow(top->down) : 함수 컴포넌트
05. 클래스 컴포넌트 만들기
06. FoodList src/03 : 
07. 특징4: 공백
08. Dynamic HTML Rendering
09. Comment


설치:
$ npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types

설정:
babel: babel.config.json
webpack: webpack.config.js

package.json 의 스크립트 추가하기
 "scripts": {
    "debug": "npx webpack serve --progress --mode development",
    "build": "npx webpack --mode production"
  },

  실행 :
  $ npm run debug src={01|02|03|04|...}