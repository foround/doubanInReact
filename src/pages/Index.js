import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import RowList from 'containers/RowList';
import SearchBar from 'components/SearchBar';
import {inTheatersMiddleware,top250Middleware,usBoxMiddleware} from 'utils/middlewares'
import style from 'style/Main.module.css'
class Index extends Component {
    render() {
        const {history} = this.props;
        return(
            <div className={style.container}>
                <SearchBar onClick={() => history.push('/search')}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <span>搜索</span>
                </SearchBar>
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
export default withRouter(Index);