import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/index";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'


import "./scss/main.scss"


const persistConfig = {
    key: 'root',
    storage,
    whitelist :["user", "order"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(persistedReducer,
    compose(applyMiddleware(thunk)));

const persistor = persistStore(store)


ReactDOM.render(<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
</Provider>, document.getElementById('root'));

