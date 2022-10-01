import React from 'react';

import styles from "./Filter.module.css"

import { ReactComponent as Pointer } from "../assets/pointer.svg";
import { ReactComponent as Here } from "../assets/here.svg";
import { ReactComponent as There } from "../assets/there.svg";

function Filter() {
    return (
        <div className={styles.filter}>
            <div className={styles.box} style={{ backgroundColor: '#FBE0DC' }}>
                <Pointer />
            </div>
            <div className={styles.box}  style={{ backgroundColor: '#FF868E' }}>
                BREEDS
            </div>
            <div className={styles.box}>

            </div>
            <div className={styles.box}>

            </div>
            <div className={styles.box}>
                <Here />
            </div>
            <div className={styles.box}>
                <There />
            </div>
        </div>
    );
}

export default Filter;