import { useState } from "react";
export default function Header(){

    const[count,setCount] = useState(0); 
    const increase=()=> {
        setCount(count+1);
    }
    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={increase}>
            Inrease count
        </button>
        </>
    )
}
