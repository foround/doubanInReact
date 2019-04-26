import React from 'react';
import style from '../assets/style/Item.module.css'
export default function({rating,stars}){
    let spiritStyle = {
        backgroundPosition: `0px  -${121 - stars / 5 * 11}px`
    }
    return (
        <div>
            <i style={spiritStyle} className={style.spirit}></i>
            <span className={style.rating}>{rating}</span>
        </div>
    );
}