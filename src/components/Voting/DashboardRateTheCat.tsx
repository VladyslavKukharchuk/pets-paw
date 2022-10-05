import React from 'react';

import styles from "./Dashboard.module.css"
import FilterVoting from './FilterVoting';
import RateTheCat from './RateTheCat';

function Dashboard() {
    return (
        <div className={styles.dashboardRateTheCat}>
            <FilterVoting />
            <RateTheCat />
        </div>
    );
}

export default Dashboard;