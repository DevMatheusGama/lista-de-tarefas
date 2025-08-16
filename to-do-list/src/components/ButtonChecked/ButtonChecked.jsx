import { useState } from "react";
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import styles from './ButtonChecked.module.css'

function ButtonChecked() {
    const [checked, setChecked] = useState(false);

    function handleClick() {
        setChecked(!checked); 
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

export default ButtonChecked;