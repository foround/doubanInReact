import React from 'react';
import MovieItem from "./MovieItem";
import style from 'style/Common.module.css'
export default function({records}) {
    let mainContent = (<section></section>)
    if(Object.keys(records).length > 0){
        mainContent = (
            <section>
                <section className={style.container}>
                    {
                        records.subjects
                        .map(subject => {
                            return (
                                <div className={style.itemWrapper} key={subject.id}>
                                    <MovieItem subject={subject} />
                                </div>
                            )
                        })
                    }
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