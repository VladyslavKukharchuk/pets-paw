import React from 'react';

import styles from "./FilterBreedsId.module.css"

import { ReactComponent as Pointer } from "../assets/pointer.svg";

function FilterBreedsId() {
    return (
        <div className={styles.filterBreedsId}>
            <div className={styles.box} style={{ backgroundColor: '#FBE0DC' }}>
                <Pointer />
            </div>
            <div className={styles.box}  style={{ backgroundColor: '#FBE0DC' }}>
                BREEDS
            </div>
            <div className={styles.box}  style={{ backgroundColor: '#FF868E' }}>
                28
            </div>
        </div>
    );
}

export default FilterBreedsId;