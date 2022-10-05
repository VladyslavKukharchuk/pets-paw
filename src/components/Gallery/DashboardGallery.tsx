import React from 'react';


import styles from "./DashboardGallery.module.css"

import FilterGallery from './FilterGallery';
import GridCatsGallery from './GridCatsGallery';
import BoxButton from '../Breeds/BoxButton';
import ManualFilterGallery from './ManualFilterGallery';


function DashboardGallery() {
    return (
        <div className={styles.dashboardGallery}>
            <FilterGallery />
            <ManualFilterGallery />
            <GridCatsGallery />
            <BoxButton />
        </div>
    );
}

export default DashboardGallery;