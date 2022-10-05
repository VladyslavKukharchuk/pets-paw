import React from 'react';

import styles from "./BoxButton.module.css"

import ButtonRight from './ButtonRight ';
import ButtonLeft from './ButtonLeft';

function BoxButton() {
    return (
        <div className={styles.boxButton}>
            <ButtonLeft />
            <ButtonRight />
        </div>
    );
}

export default BoxButton;