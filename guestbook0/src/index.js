import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDom.render( ) 안에 보여주고 싶은 component를 넣는다.
// ReactDom.render(element, container[, callback])
// index.html 안의 <div id='root'></div>
ReactDOM.render(<App />, document.getElementById('root'));


// 컴포넌트를 정의하는 프로그램
// 실제로 화면에 표시되는 내용 등은 여기에서 정의된다.
// index.html과 비슷하게 메인 파일로, 여기서 HTML 템플릿 밀 JavaScript의 컴포넌트를 조합하여 렌더링하고 실제 표시합