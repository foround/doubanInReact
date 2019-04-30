import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import SearchList from "../components/SearchList";
import ajax from '../utils/ajax';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            title: '',
            subjects: []
        }
    }
    render() { 
        const iconStyle = {
            position:'absolute',
            left: '10px',
            lineHeight: '25px'
        }
        const titleStyle = {
            fontSize: '14px',
            lineHeight: '20px',
            color: 'grey',
            textIndent: '1em'
        }
        const {title,subjects} = this.state
        const resultList = (
            <section className='resultList'>
                <p style={titleStyle}>{title}</p>
                <SearchList list={subjects}></SearchList>
            </section>
        )
        return (
            <section>
                <SearchBar>
                    <i className="fa fa-search" style={iconStyle} aria-hidden="true"></i>
                    <input type='text' placeholder='搜索' onChange={this.bindInput.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
                </SearchBar>
                {subjects.length > 0? resultList: null}
            </section>
        );
    }
    bindInput(event){
        this.setState({value: event.target.value});
    }
    handleKeyDown(event){
        if (event.keyCode === 13){
            this.fetchResults()
        }
        return;
    }
    async fetchResults(){
        let url = `/movie/search?q=${this.state.value}`
        console.log(url)
        let response = await ajax.get(url);
        let {subjects,title} = response.data.data
        console.log(subjects)
        this.setState({subjects,title})
        console.log({subjects,title})
    }
}
 
export default Search;