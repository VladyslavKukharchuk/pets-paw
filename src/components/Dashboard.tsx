import React from 'react';
import GridCats from './GridCats';

import styles from "./Dashboard.module.css"
import FilterBreeds from './FilterBreeds';
import FilterBreedsId from './FilterBreedsId';
import FilterVoting from './FilterVoting';
import RateTheCat from './RateTheCat';

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            {/* <FilterBreeds /> */}
            {/* <FilterBreedsId /> */}
            <FilterVoting />
            {/* <GridCats /> */}
            <RateTheCat />
        </div>
    );
}

export default Dashboard;