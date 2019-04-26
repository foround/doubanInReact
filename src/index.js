import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import './index.css';
import {createStore,applyMiddleware} from './node_modules/redux';
import thunk from './node_modules/redux-thunk';
import {Provider} from './node_modules/react-redux'
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