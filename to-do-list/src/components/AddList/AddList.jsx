import React from 'react'
import Button from '../button/Button'
import styles from './AddList.module.css'

function AddList() {
    return (
        <div className={styles.container}>
            <input type="text" className={styles.input}/>
            <Button />
        </div>
    )
}

export default AddList