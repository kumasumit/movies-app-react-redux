import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from "./components/App";
import rootReducer from "./reducers";

const logger = function({dispatch, getState}){
  return function(next){
    return function(action){
      // console.log('ACTION_TYPE =', action.type);
      next(action);
    }
  }
}

// const thunk = function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       if(typeof action === 'function'){
//         action(dispatch);
//         return;
//       }
//       next(action);
//     }
//   }
// }
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("Store", store);
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
