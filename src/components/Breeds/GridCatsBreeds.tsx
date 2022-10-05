import React from 'react';

import styles from "./GridCatsBreeds.module.css"

import { ReactComponent as Like } from "../../assets/like.svg";

import cat1 from "../../images/cat1.png";
import cat2 from "../../images/cat2.png";
import cat3 from "../../images/cat3.png";
import cat4 from "../../images/cat4.png";
import cat5 from "../../images/cat5.png";
import cat6 from "../../images/cat6.png";
import cat7 from "../../images/cat7.png";
import cat8 from "../../images/cat8.png";
import cat9 from "../../images/cat9.png";
import cat10 from "../../images/cat10.png";
import cat11 from "../../images/cat11.png";
import cat12 from "../../images/cat12.png";
import cat13 from "../../images/cat13.png";
import cat14 from "../../images/cat14.png";
import cat15 from "../../images/cat15.png";

function GridCatsBreeds() {
    return (
        <div className={styles.grid}>
            <div className={styles.blockImg}>
                <img src={cat1} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat2} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat3} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat4} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat5} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat6} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat7} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat8} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat9} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat10} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat11} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat12} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat13} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat14} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
            <div className={styles.blockImg}>
                <img src={cat15} alt="" />
                <div className={styles.blocKBg}>
                    <div className={styles.blockLike}>
                        <Like />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridCatsBreeds;