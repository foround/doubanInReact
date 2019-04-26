import ajax from '../utils/ajax';
import { combineReducers } from 'redux';
import {
    inTheatersReducer as in_theaters,
    top250Reducer as top250,
    usBoxReducer as us_box
} from './reducers';
const EXPIRE = 30 * 60 * 1000;

const rootReducer = combineReducers({
    in_theaters,
    top250,
    us_box
});

const requestList = (url,category) => {
    let pathList = url.split('/');
    category = pathList[pathList.length - 1];
    return {
        type: Symbol.for(`${category}_REQUEST_LIST`),
        payload: `request url is ${url}`
    };
}

const receiveList = (list,category,translateMiddleWare) => ({
    type: Symbol.for(`${category}_RECEIVE_LIST`),
    payload:list,
    translateMiddleWare:translateMiddleWare
})

export const fetchList = (url,category,translateMiddleWare) => (dispatch,getState) =>{
    dispatch(requestList(url,category))
    let dataFromCache = localStorage.getItem(category);
    let currentTimeStamp = (new Date()).getTime()
    if(!dataFromCache ||
        currentTimeStamp - JSON.parse(dataFromCache).timestamp > EXPIRE)
    {
        ajax.get(url)
        .then((res) => {
            localStorage.setItem(category,JSON.stringify(res))
            dispatch(receiveList(res,category))
        })

    }else{
        let res = JSON.parse(dataFromCache);
        dispatch(receiveList(res,category,translateMiddleWare))

    }
}
export default rootReducer;