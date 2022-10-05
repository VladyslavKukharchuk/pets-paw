import React from 'react';
import Notification from './Notification';

import styles from "./NotificationHistory.module.css"

function NotificationHistory() {
    return (
        <div className={styles.notificationHistory}>
            <Notification time="22:35" id="fQSunHvl8" text="added to Favourites" svg="Favourites"/>
            <Notification time="22:27" id="HJd0XecNX"text="added to Likes" svg="Likes"/>
            <Notification time="22:21" id="BbMFS3bU-" text="added to Dislikes" svg="Dislikes"/>
            <Notification time="21:56" id="fQSunHvl8" text="removed from Favourites" svg=""/>
            <Notification time="22:35" id="fQSunHvl8" text="added to Favourites" svg="Favourites"/>
            <Notification time="22:27" id="HJd0XecNX"text="added to Likes" svg="Likes"/>
            <Notification time="22:21" id="BbMFS3bU-" text="added to Dislikes" svg="Dislikes"/>
            <Notification time="21:56" id="fQSunHvl8" text="removed from Favourites" svg=""/>
            <Notification time="22:35" id="fQSunHvl8" text="added to Favourites" svg="Favourites"/>
            <Notification time="22:27" id="HJd0XecNX"text="added to Likes" svg="Likes"/>
            <Notification time="22:21" id="BbMFS3bU-" text="added to Dislikes" svg="Dislikes"/>
            <Notification time="21:56" id="fQSunHvl8" text="removed from Favourites" svg=""/>
        </div>
    );
}

export default NotificationHistory;