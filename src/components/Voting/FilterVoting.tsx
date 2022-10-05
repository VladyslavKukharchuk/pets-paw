import React from 'react';

import styles from "./Filter.module.css"

import { ReactComponent as Pointer } from "../assets/pointer.svg";

function FilterVoting() {
    return (
        <div className={styles.filterVoting}>
            <div className={styles.box} style={{ backgroundColor: '#FBE0DC' }}>
                <Pointer />
            </div>
            <div className={styles.box}  style={{ backgroundColor: '#FF868E' }}>
                VOTING
            </div>
        </div>
    );
}

export default FilterVoting;