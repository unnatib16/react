import React, { useEffect,useState } from "react";
import styles from './Button.module.css';
import './styles.css';
export default function Header(){
    return(
        <>
        <h1 style={{
            backgroundColor: 'lightblue',
            padding: '10px',
            borderRadius: '5px',
        }}>Inline CSS Example</h1>
        <p className="myClass">This is my style.css class</p>
        <button className={styles.button}>Styled with CSS Module</button>
         {/* <Styled />  */}
        </>
    )
}

