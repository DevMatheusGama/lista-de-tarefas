import React, { useState } from 'react'
import styles from './List.module.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonChecked from '../ButtonChecked/ButtonChecked';

function List({ items, removeItem }) {
    return (
        <div className={styles.container}>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <ButtonChecked />
                        <div className={styles.content}>
                            <p>{item}</p>
                            <button
                                className={styles.excluir}
                                onClick={() => removeItem(index)}
                            ><RiDeleteBin6Line />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List