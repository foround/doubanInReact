import React from 'react';
import SearchItem from './SearchItem';
export default function(props){
    let list = props.list;
    return(
        <section>
        {
            list.map(item => {
                console.log(item)
                let {casts,directors,genres,rating,title,images,id,year} = item
                let props = {casts,directors,genres,rating,title,images,id,year,key:id}
                return (<SearchItem {...props}/>)
            })
        }
        </section>
    )
}