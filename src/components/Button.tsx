import React from 'react';

import styles from "./Button.module.css"

interface ButtonProps {
    text: string;
}

function Button(props: ButtonProps) {
    return (
        <button className = {styles.button}>
            {props.text}
        </button>
    );
}

export default Button;