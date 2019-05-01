import React from 'react';
import styles from "style/Main.module.css";
import 'font-awesome/css/font-awesome.css'
export default function(props){
    return (
        <section className={styles.searchBar} onClick={props.onClick}>
            <div className={styles.inputSimulation}>
                {props.children}
            </div>
        </section>
    )
}