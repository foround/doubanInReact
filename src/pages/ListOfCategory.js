import React, { Component } from 'react';
import CommonList from '../containers/CommonList';
import {top250Middleware,inTheatersMiddleware,usBoxMiddleware} from '../utils/middlewares';
class ListOfCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <CommonList
                url="/movie/top250"
                category='top250'
                translateMiddleware={top250Middleware}
            />
        );
    }
}
 
export default ListOfCategory;