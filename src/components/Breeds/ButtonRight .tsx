import React from 'react';

import { ReactComponent as PointerRight } from "../../assets/pointerRight.svg";

import styles from "./ButtonRight.module.css"

function ButtonRight() {
    return (
        <button className={styles.button}>
            <span>NEXT</span>
            <PointerRight />
        </button>
    );
}

export default ButtonRight;