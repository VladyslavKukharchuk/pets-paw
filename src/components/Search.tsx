import React from 'react';

import SearchSVG from "../assets/search.svg";

import styles from "./Search.module.css"

function Search() {
    return (
        <div className={styles.search}>
            <input
                //   onClick={}
                //   onChange={}
                type="text"
                placeholder="Search for breeds by name"
            //   ref={this.node}
            />
            {/* <div> */}
            <img src={SearchSVG} alt="" />
            {/* </div> */}
        </div>
    );
}

export default Search;