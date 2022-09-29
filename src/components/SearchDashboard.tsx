import React from 'react';
import GridCats from './GridCats';

import styles from "./SearchDashboard.module.css"

function SearchDashboard() {
    return (
        <div className={styles.searchDashboard}>
            <GridCats />
        </div>
    );
}

export default SearchDashboard;