import React from 'react';
import style from '../assets/style/Item.module.css'
import Rating from './Rating';
export default function({subject}){
    let {title,id,images,rating} = subject;
    return (
        <div className={style.itemWrapper} onClick={()=>console.log(id)}>
            <img className={style.moiveImage} src={images.small} alt=""/>
            <nav className={style.movieDesc}>
                <p>{title}</p>
                <Rating rating={rating.average} stars={rating.stars}/>
            </nav>
        </div>
    );
};