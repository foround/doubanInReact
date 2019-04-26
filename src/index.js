import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import reducer from './reducer/rootReducer';
import Index from './pages/Index';
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
setTimeout(function(){
    console.log(store.getState())
},10000)
ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>
    ,
    document.getElementById('root')
);