import React from 'react';

import styles from "./RateTheCat.module.css"

import { ReactComponent as HappySmileWhite } from "../assets/happySmileWhite.svg";
import { ReactComponent as LikeWhite } from "../assets/likeWhite.svg";
import { ReactComponent as SadSmileWhite } from "../assets/sadSmileWhite.svg";

import cat4 from "../images/cat4.png";

import NotificationHistory from './NotificationHistory';

function RateTheCat() {
    return (
        <div className={styles.rateTheCat}>
            <img src={cat4} alt="" />
            <div className={styles.blockOfButtons}>
                <div  style={{ backgroundColor: '#97EAB9' }}>
                    <HappySmileWhite />
                </div>
                <div  style={{ backgroundColor: '#FF868E' }}>
                    <LikeWhite />
                </div>
                <div  style={{ backgroundColor: '#FFD280' }}>
                    <SadSmileWhite />
                </div>
            </div>
            <NotificationHistory/>
        </div>
    );
}

export default RateTheCat;