import React from 'react';
import GridCats from './GridCats';

import styles from "./Dashboard.module.css"

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <GridCats />
        </div>
    );
}

export default Dashboard;