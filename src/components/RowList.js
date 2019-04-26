import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchList } from '../reducer/rootReducer';
import MovieItem from "./MovieItem";
class RowList extends Component {
    static propTypes = {
        fetchList: PropTypes.func,
        state: PropTypes.object,
        url: PropTypes.string,
        category: PropTypes.string,
        translateMiddleware: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {state,category} = this.props;
        const {records} = state[category];
        let mainContent
        if(Object.keys(records).length > 0){
            mainContent = (
                <section>
                    <h3>{records.title}</h3>
                    <div>
                        {
                            records.subjects.slice(0,10)
                            .map(subject => {
                                return <MovieItem subject={subject} key={subject.id}/>
                            })
                        }
                    </div>
                </section>
            )
        }else{
            mainContent = (
                <section>
                </section>
            )
        }
        return (
            <section>
            {mainContent}
            </section>
         );
    }
    componentWillMount() {
        const {fetchList,url,category,translateMiddleware} = this.props
        fetchList(url,category,translateMiddleware)
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchList: (url,category,translateMiddleware) => dispatch(fetchList(url,category,translateMiddleware))
})
const mapStateToProps = (state) => ({state})
RowList = connect(mapStateToProps,mapDispatchToProps)(RowList)
export default RowList;