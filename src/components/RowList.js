import React from 'react';
import MovieItem from "./MovieItem";
import { Link } from 'react-router-dom';
import style from '../assets/style/Main.module.css'
export default function({records,category}) {
    let mainContent = (<section></section>)
    if(Object.keys(records).length > 0){
        mainContent = (
            <section>
                <header className={style.sectionHeader}>
                    <h4>{records.title}</h4>
                    <Link to={`/list/${category}`}>查看更多 ></Link>
                </header>
                <section className={style.rowContainer}>
                    <div className={style.commonRow}>
                        {
                            records.subjects.slice(0,10)
                            .map(subject => {
                                return (
                                    <div className={style.itemWrapper} key={subject.id}>
                                        <MovieItem subject={subject}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </section>
        )
    }
    return (
        <section>
            {mainContent}
        </section>
        );
}