import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/index";
import thunk from "redux-thunk"


import "./scss/main.scss"


const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));




ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

