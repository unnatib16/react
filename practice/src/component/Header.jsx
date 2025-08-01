import React, { useEffect,useState } from "react";
import styles from "./Header.module.css"
export default function Header(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const printData =(e)=>{
        e.preventDefault();
        console.log('Form Submitted');
        console.log(username);
        console.log(email);

        setUsername('');
        setEmail('');
    }
        
        return(
        <>
        <h1>Day 7</h1>
        <form onSubmit={printData}>
            <label>Username :- </label>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <br></br>
            <label>Email :- </label>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

