import React, { useEffect,useState } from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import './styles.css';
export default function Header(){
    return(
        <>
        <ul style={{
            display: "flex",
            justifyContent: "right",
            gap:"30px",
            listStyle : "none",
            margin:"10px",
            backgroundColor:"yellow",
            padding:"10px",
            fontSize:"25px",
            fontWeight:"bold"
        }}>
            <li>
                <Link style={{
                    color:"blue",
                    textDecoration:"none",
                }}to="/home">Home</Link>
            </li>
            <li>
                <Link style={{
                    color:"blue",
                    textDecoration:"none",
                }}to="/about">About</Link>
            </li>
            <li>
                <Link style={{
                    color:"blue",
                    textDecoration:"none",
                }}to="/contact">Contact</Link>
            </li>
            <li>
                <Link style={{
                    color:"blue",
                    textDecoration:"none",
                }}to="/book">Book</Link>
            </li>
        </ul>
        </>
    )
}

