import React from 'react';

import styles from "./DashboardBreeds.module.css"

import FilterBreeds from './FilterBreeds';
import BoxButton from './BoxButton';
import GridCatsBreeds from './GridCatsBreeds';


function DashboardBreeds() {
    return (
        <div className={styles.dashboard}>
            <FilterBreeds />
            <GridCatsBreeds />
            <BoxButton />
        </div>
    );
}

export default DashboardBreeds;