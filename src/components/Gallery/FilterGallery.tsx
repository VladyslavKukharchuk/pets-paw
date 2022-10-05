import React from 'react';

import styles from "./FilterGallery.module.css"

import { ReactComponent as Pointer } from "../../assets/pointer.svg";

import { ReactComponent as Upload } from "../../assets/upload.svg";

function FilterGallery() {
    return (
        <div className={styles.filterGallery}>
            <div className={styles.box} style={{ backgroundColor: '#FBE0DC' }}>
                <Pointer />
            </div>
            <div className={styles.box}  style={{ backgroundColor: '#FF868E' }}>
                <span>GALLERY</span>
            </div>
            <div>
            </div>
            <div className={styles.upload}>
                <Upload />
                <span>UPLOAD</span>
            </div>
        </div>
    );
}

export default FilterGallery;