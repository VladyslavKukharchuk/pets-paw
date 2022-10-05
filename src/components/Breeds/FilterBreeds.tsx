import React from 'react';

import styles from "./FilterBreeds.module.css"

import { ReactComponent as Pointer } from "../../assets/pointer.svg";
import { ReactComponent as Here } from "../../assets/here.svg";
import { ReactComponent as There } from "../../assets/there.svg";

function FilterBreeds() {
    return (
        <div className={styles.filterBreeds}>
            <div className={styles.box} style={{ backgroundColor: '#FBE0DC' }}>
                <Pointer />
            </div>
            <div className={styles.box} style={{ backgroundColor: '#FF868E' }}>
                <span>BREEDS</span>
            </div>
            <div className={styles.box}>
                <select name="select">
                    <option value="" selected>All breeds</option>
                    <option value="">Abyssinian</option>
                    <option value="">Aegean</option>
                    <option value="">American Bobtail</option>
                    <option value="">American Curl</option>
                    <option value="">American Shorthair</option>
                    <option value="">American Wirehair</option>
                </select>
            </div>
            <div className={styles.box}>
                <select name="select">
                    <option value="5">Limit: 5</option>
                    <option value="10" selected>Limit: 10</option>
                    <option value="15">Limit: 15</option>
                    <option value="20">Limit: 20</option>
                </select>
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

export default FilterBreeds;