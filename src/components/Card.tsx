import React from 'react';

import styles from "./Card.module.css"

function Card(props:any) {

    const cssColor = props.color;

    return (
        <div className={`${styles.card} ${styles[cssColor]}`}>
            <img src={props.img} alt="" />
        </div>
    );
}

export default Card;