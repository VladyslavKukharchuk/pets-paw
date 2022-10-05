import React from 'react';

// import SearchSVG from "../assets/search.svg";
import { ReactComponent as SearchSVG } from "../assets/search.svg";

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
            <div className={styles.searchSvg}>
                <SearchSVG />
            </div>
        </div>
    );
}

export default Search;