import React from 'react';

import styles from "./GridCats.module.css"

import cat1 from "../images/cat1.png";
import cat2 from "../images/cat2.png";
import cat3 from "../images/cat3.png";
import cat4 from "../images/cat4.png";
import cat5 from "../images/cat5.png";
import cat6 from "../images/cat6.png";
import cat7 from "../images/cat7.png";
import cat8 from "../images/cat8.png";
import cat9 from "../images/cat9.png";
import cat10 from "../images/cat10.png";
import cat11 from "../images/cat11.png";
import cat12 from "../images/cat12.png";
import cat13 from "../images/cat13.png";
import cat14 from "../images/cat14.png";
import cat15 from "../images/cat15.png";

function GridCats() {
    return (
        <div className={styles.grid}>
          <div className={styles.div1}>
            <img src={cat1} alt="" />
          </div>
          <div className={styles.div2}>
            <img src={cat2} alt="" />
          </div>
          <div className={styles.div3}>
            <img src={cat3} alt="" />
          </div>
          <div className={styles.div4}>
            <img src={cat4} alt="" />
          </div>
          <div className={styles.div5}>
            <img src={cat5} alt="" />
          </div>
          <div className={styles.div6}>
            <img src={cat6} alt="" />
          </div>
          <div className={styles.div7}>
            <img src={cat7} alt="" />
          </div>
          <div className={styles.div8}>
            <img src={cat8} alt="" />
          </div>
          <div className={styles.div9}>
            <img src={cat9} alt="" />
          </div>
          <div className={styles.div10}>
            <img src={cat10} alt="" />
          </div>
          <div className={styles.div11}>
            <img src={cat11} alt="" />
          </div>
          <div className={styles.div12}>
            <img src={cat12} alt="" />
          </div>
          <div className={styles.div13}>
            <img src={cat13} alt="" />
          </div>
          <div className={styles.div14}>
            <img src={cat14} alt="" />
          </div>
          <div className={styles.div15}>
            <img src={cat15} alt="" />
          </div>
        </div>
    );
}

export default GridCats;