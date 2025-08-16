import { useState } from "react";
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import styles from './ButtonFeito.module.css' // exemplo, caso use CSS module

function ButtonFeito() {
    const [checked, setChecked] = useState(false);

    function handleClick() {
        setChecked(!checked); // alterna o estado
    }

    return (
        <button 
            onClick={handleClick} 
            className={`${styles.buttonCheck} ${checked ? styles.checked : ''}`}
        >
            <FaCheck />
        </button>
    );
}

export default ButtonFeito;