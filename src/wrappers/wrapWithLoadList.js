import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchList } from '../reducer/rootReducer';
export default function(WrapperedComponent){
    class ListContainer extends Component{
        static propTypes = {
            fetchList: PropTypes.func,
            state: PropTypes.object,
            url: PropTypes.string,
            category: PropTypes.string,
            translateMiddleware: PropTypes.func
        }
        render(){
            const {state,category} = this.props;
            const {records} = state[category];
            return <WrapperedComponent records={records} category={category}/>
        }
        componentWillMount() {
            const {fetchList,url,category,translateMiddleware} = this.props
            fetchList(url,category,translateMiddleware)
        }
    }
    ListContainer = connect(mapStateToProps,mapDispatchToProps)(ListContainer)
    return ListContainer
}
const mapDispatchToProps = (dispatch) => ({
    fetchList: (url,category,translateMiddleware) => dispatch(fetchList(url,category,translateMiddleware))
})
const mapStateToProps = (state) => ({state})