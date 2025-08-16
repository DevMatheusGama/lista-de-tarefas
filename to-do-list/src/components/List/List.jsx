import React from 'react'
import styles from './List.module.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonFeito from '../ButtonFeito/ButtonFeito';

function List() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <ButtonFeito />
                    <div className={styles.content}>
                        <p>aaaaaaaaaa</p>
                        <button className={styles.excluir}><RiDeleteBin6Line /></button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default List