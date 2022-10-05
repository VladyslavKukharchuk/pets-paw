import React from 'react';

import { ReactComponent as PointerLeft } from "../../assets/pointerLeft.svg";

import styles from "./ButtonLeft.module.css"

function ButtonLeft() {
    return (
        <button  className={styles.button}>
            <PointerLeft />
            <span>PREV</span>
        </button>
    );
}

export default ButtonLeft;