import React from 'react';
import {withRouter} from 'react-router-dom';
import style from '../assets/style/Item.module.css'
import Rating from './Rating';
const MovieItem = function({subject,history}){
    let {title,id,images,rating} = subject;
    return (
        <div className={style.itemWrapper} onClick={()=>history.push(`/detail/${id}`)}>
            <img className={style.moiveImage} src={images.small} alt=""/>
            <nav className={style.movieDesc}>
                <p>{title}</p>
                <Rating rating={rating.average} stars={rating.stars}/>
            </nav>
        </div>
    );
};
export default withRouter(MovieItem);