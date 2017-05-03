import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";

import reducers from './reducers/index';
import route from './router/route';
import finalCreateStore from './store/configStore';

let store = finalCreateStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        {route}
    </Provider>
    , document.getElementById('root'));
