import React, { Component } from 'react';
import RowList from '../containers/RowList';
import {inTheatersMiddleware,top250Middleware,usBoxMiddleware} from '../utils/middlewares'
import style from '../assets/style/Main.module.css'
class Index extends Component {
    render() {
        return(
            <div className={style.container}>
                <RowList
                    url="/movie/in_theaters"
                    category='in_theaters'
                    translateMiddleware={inTheatersMiddleware}
                >
                </RowList>
                <RowList
                    url="/movie/top250"
                    category='top250'
                    translateMiddleware={top250Middleware}
                >
                </RowList>
                <RowList
                    url="/movie/us_box"
                    category='us_box'
                    translateMiddleware={usBoxMiddleware}
                >
                </RowList>
            </div>
        )
    }
}
export default Index;