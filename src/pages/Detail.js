import React, { Component } from 'react';
import ajax from "../utils/ajax";
import style from '../assets/style/Detail.module.css';
import Rating from '../components/Rating';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:{},
            isShowAll: false
         }
    }
    render() {
        let {data,isShowAll} = this.state
        if(Object.keys(data).length > 0){
            let {attrs,rating} = data;
            let yearInfo = attrs.year.join('/');
            let stars = Math.floor((rating.average)) * 5
            let typeInfo = [...attrs.movie_type].join('/')
            let durationInfo = [...attrs.language,...attrs.country,...attrs.movie_duration.map(item => `片长${item}`)].join('/');
            let toggleButton = (<span className={style.toggleButton} onClick={() => this.setState({isShowAll: !isShowAll})}>{isShowAll? '收起':'展开'}</span>)
            return (
                <section className={style.container}>
                    <section className={style.section1}>
                        <div className={style.imageWrapper}>
                            <img src={data.image} alt=""/>
                        </div>
                        <div className={style.baseInfo}>
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
                    <section className={style.section2}>
                        <h4>影人</h4>
                        <p>
                            <em>导演</em>{attrs.director.join('/')}
                        </p>
                        <p>
                            <em>编剧</em>{attrs.writer.join('/')}
                        </p>
                        <p>
                            <em>主演</em>{this.state.isShowAll? attrs.cast.join('/'):attrs.cast.slice(0,10).join('/')}{toggleButton}

                        </p>
                    </section>
                    <section className={style.section3}>
                        <h4>简介</h4>
                        <p>{data.summary}</p>
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