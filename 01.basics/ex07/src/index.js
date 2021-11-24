import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ex06 과 같은 것 <App /> 는  App()와 같다.
// ReactDOM.render(App(), document.getElementById('root'));