import React from 'react'
import styles from './Button.module.css'

function Button({onClick}) {
    return (
        <>
            <button
                className={styles.button}
                onClick={onClick}
            >+</button>
        </>
    )
}

export default Button