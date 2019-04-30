import React from 'react';
import { withRouter } from "react-router-dom";
import styles from '../assets/style//search.module.css';
import Rating from './Rating';

const SearchItem = function(props){
    let {casts,directors,genres,rating,title,images,year,id,history} = props
    let info = []
    info.push(year)
    info.push(genres.join(' '))
    info.push(directors.slice(0,3).map(item=>item.name).join(' '))
    info.push(casts.slice(0,3).map(item=>item.name).join(' '))
    return (
        <div className={styles.searchItem} onClick={() => genres.indexOf('纪录片') === -1? history.push(`detail/${id}`): null}>
            <div className={styles.imageWrapper}>
                <img alt="" src={images.small}/>
            </div>
            <div className={styles.movieInfo}>
                <h5>{title}</h5>
                <Rating stars={rating.stars} rating={rating.average}/>
                <p>{info.join('/')}</p>
            </div>
        </div>
    );
}
export default withRouter(SearchItem)