import React, { useEffect,useState } from "react";
import styles from "./Header.module.css"
export default function Header(){
    const items = ['Apple', 'Banana', 'Orange', 'Mango'];
    return(
        <>
    <ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
</>
    )}


