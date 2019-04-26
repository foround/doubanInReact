import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../style/main.css'
class MovieItem extends Component {
    static propTypes = {
        subject: PropTypes.object
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let {title,id,images,rating} = this.props.subject;
        console.log(style)
        return (
            <section>
                <div className={style.image}>
                    <img src={images.small} alt=""/>
                </div>

            </section>
         );
    }
}
 
export default MovieItem;