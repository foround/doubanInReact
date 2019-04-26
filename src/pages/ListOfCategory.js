import React from 'react';
import CommonList from '../containers/CommonList';
import {top250Middleware,inTheatersMiddleware,usBoxMiddleware} from '../utils/middlewares';
import { Redirect } from 'react-router-dom';
const propsList = {
    'top250':{
        url: "/movie/top250",
        category:'top250',
        translateMiddleware: top250Middleware
    },'in_theaters':{
        url: "/movie/in_theaters",
        category:'in_theaters',
        translateMiddleware: inTheatersMiddleware
    },'us_box':{
        url: "/movie/us_box",
        category:'us_box',
        translateMiddleware: usBoxMiddleware
    },
}
export default function({location}){
    let category = /\/(\w+)$/.exec(location.pathname)[1]
    if(category in propsList){
        return ( 
            <CommonList
                {...propsList[category]}
            />
        );
    }
    return(<Redirect to='/'></Redirect>)
    
}