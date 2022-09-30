import React from 'react';
import Dashboard from './Dashboard';

import styles from "./Menu.module.css"
import Navigation from './Navigation';
import Search from './Search';

function Menu() {
    return (
        <div className={styles.menu}>
            <Navigation />
            <Dashboard />
        </div>
    );
}

export default Menu;