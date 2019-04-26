import React from 'react';
import MovieItem from "./MovieItem";
import style from '../assets/style/Main.module.css'
export default function({records}) {
    let mainContent = (<section></section>)
    if(Object.keys(records).length > 0){
        mainContent = (
            <section>
                <header className={style.sectionHeader}>
                    <h4>{records.title}</h4>
                    <span>查看更多 ></span>
                </header>
                <section className={style.rowContainer}>
                    <div className={style.commonRow}>
                        {
                            records.subjects.slice(0,10)
                            .map(subject => {
                                return (
                                    <div className={style.itemWrapper}>
                                        <MovieItem subject={subject} key={subject.id}/>
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