import React from 'react';

import styles from "./Menu.module.css"

import Navigation from './Navigation';
import DashboardBreeds from './Breeds/DashboardBreeds';
import DashboardGallery from './Gallery/DashboardGallery';

function Menu() {
    return (
        <div className={styles.menu}>
            <Navigation />
            <DashboardGallery />
            {/* <DashboardBreeds /> */}
        </div>
    );
}

export default Menu;