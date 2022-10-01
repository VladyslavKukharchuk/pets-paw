import React from 'react';
import GridCats from './GridCats';

import styles from "./Dashboard.module.css"
import Filter from './Filter';

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <Filter />
            <GridCats />
        </div>
    );
}

export default Dashboard;