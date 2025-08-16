import React from 'react'
import Button from '../button/Button'
import styles from './AddList.module.css'
import { useState } from 'react'

function AddList({ addItem }) {
    const [inputList, setInputList] = useState("")

    const handleAdd = () => {
        addItem(inputList)    
        setInputList("")      
    }

    return (
        <div className={styles.container}>
            <input
                value={inputList}
                type="text"
                className={styles.input}
                onChange={(event) => setInputList(event.target.value)}
            />
            <Button onClick={handleAdd}/>
        </div>
    )
}

export default AddList