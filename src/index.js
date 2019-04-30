import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import reducer from './reducer/rootReducer';
import Index from './pages/Index';
import ListOfCategory from './pages/ListOfCategory';
import Detail from './pages/Detail';
import { Switch,BrowserRouter,Route,Redirect } from 'react-router-dom';
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
setTimeout(function(){
    console.log(store.getState())
},10000)
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path='/' exact component={Index}/>
                <Route path='/list/:category' component={ListOfCategory}/>
                <Route path='/detail/:id' component={Detail}/>
                <Redirect to="/" />
            </Switch>
        </Provider>
    </BrowserRouter>

    ,
    document.getElementById('root')
);