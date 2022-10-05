import React from 'react';

import styles from "./Notification.module.css"

import { ReactComponent as Favourites } from "../assets/like.svg";
import { ReactComponent as Likes } from "../assets/likes.svg";
import { ReactComponent as Dislikes } from "../assets/dislikes.svg";



function Notification(props: any) {



    const notificationSvg = props.svg;
    let svg;
    switch (notificationSvg) {
        case "Favourites":
            svg = <Favourites />
            break;

        case "Likes":
            svg = <Likes />
            break;

        case "Dislikes":
            svg = <Dislikes />
            break;

        default:
            svg = ""
            break;
    }
    return (
        <div className={styles.notification}>
            <div className={styles.notificationGrid}>
                <span className={styles.time}>{props.time}</span>
                <span>Image ID: {props.id} was {props.text}</span>
                <div>
                    {svg}
                </div>
            </div>
        </div>
    );
}

export default Notification;