import React, { Component } from 'react';
import ajax from "../utils/ajax";
import style from '../assets/style/Detail.module.css';
import Rating from '../components/Rating';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:{}
         }
    }
    render() {
        let {data} = this.state
        console.log(data)
        let yearInfo;
        let typeInfo;
        let durationInfo;
        let stars
        if(Object.keys(data).length > 0){
            let {attrs,rating} = data;
            yearInfo = attrs.year.join('/');
            stars = Math.floor((rating.average)) * 5
            typeInfo = [...attrs.movie_type].join('/')
            durationInfo = [...attrs.movie_duration].map(item => `片长${item}`)
            return (
                <section className={style.container}>
                    <section className={style.section1}>
                        <div className={style.imageWrapper}>
                            <img src={data.image} alt=""/>
                        </div>
                        <div>
                            <header className={style.header}>
                                <h4>{data.title}({yearInfo})</h4>
                                <h5>{data.alt_title}</h5>
                            </header>
                            <section className={style.infoWrapper}>
                                <p>{typeInfo}</p>
                                <p>{durationInfo}</p>
                            </section>
                            <div className={style.gradeContainer}>
                                <h6>豆瓣<sup>TM</sup>评分</h6>
                                <Rating stars={stars} rating={data.rating.average}></Rating>
                            </div>
                        </div>
                    </section>
                </section>
             );
        }else{
            return <section></section>
        }
        
    }
    
    componentWillMount() {
        let {id} = this.props.match.params
        this.getMovieInfo(id)
    }

    async getMovieInfo(id){
        let url = `/movie/${id}`;
        let response = await ajax(url);
        this.setState({data:response.data.data})
    }
}
 
export default Detail;