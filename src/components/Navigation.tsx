import React from 'react';

import styles from './Navigation.module.css'
import Search from './Search';

import { ReactComponent as HappySmile } from "../assets/happySmile.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { ReactComponent as SadSmile } from "../assets/sadSmile.svg";

function Navigation() {
    return (
        <div className={styles.navigation}>
            <Search />
            <div className={styles.box}>
                <HappySmile />
            </div>
            <div className={styles.box}>
                <Like />
            </div>
            <div className={styles.box}>
                <SadSmile />
            </div>
        </div>
    );
}

export default Navigation;