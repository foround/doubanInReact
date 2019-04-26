import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        console.log(this.props.subject)
        return (
            <div>
                {this.props.subject.title}
            </div>
         );
    }
}
 
export default MovieItem;