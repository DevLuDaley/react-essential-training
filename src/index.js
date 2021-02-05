import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// function AppTwo(){
//   return(<h1> This is the 2nd App</h1>)
// }

// const checklist = ["boots", "tent", "headlamp"]
// const [,, light] = ["boots", "tent", "headlamp"]
// console.log('🚀 ~ file: index.js ~ line 13 ~ light', light);
// console.log('🚀 ~ file: index.js ~ line 13 ~ sec', sec);
// console.log('🚀 ~ file: index.js ~ line 12 ~ checklist', checklist[1]);
// console.log('🚀 ~ file: index.js ~ line 13 ~ mostImportanItem', mostImportantItem);

ReactDOM.render(
  <React.StrictMode>
<Router>
      <App authorized={true} login='devludaley'/>
</Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
