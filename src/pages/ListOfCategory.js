import React from 'react';
import CommonList from '../containers/CommonList';
import {top250Middleware,inTheatersMiddleware,usBoxMiddleware} from '../utils/middlewares';
import { Redirect } from 'react-router-dom';
const propsList = {
    'top250':{
        url: "/movie/top250",
        category:'top250',
        translateMiddleware: top250Middleware,
        title: 'Top250'
    },'in_theaters':{
        url: "/movie/in_theaters",
        category:'in_theaters',
        translateMiddleware: inTheatersMiddleware,
        title: '正在热映'
    },'us_box':{
        url: "/movie/us_box",
        category:'us_box',
        translateMiddleware: usBoxMiddleware,
        title: '北美票房榜'
    },
}
let titleStyle = {
    textAlign: 'center',
    margin: "5px",
    marginTop: "20px"
}
export default function({location}){
    let category = /\/(\w+)$/.exec(location.pathname)[1]
    if(category in propsList){
        return (
            <div>
                <h3 style ={titleStyle}>{propsList[category].title || ""}</h3>
                <CommonList
                    {...propsList[category]}
                />
            </div>
        );
    }
    return(<Redirect to='/'></Redirect>)
}