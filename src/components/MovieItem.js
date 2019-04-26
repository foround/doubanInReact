import React, { Component } from './node_modules/react';
import PropTypes from './node_modules/prop-types';
class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                {this.props.subject.title}
            </div>
         );
    }
}
 
export default MovieItem;