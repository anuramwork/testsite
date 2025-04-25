import React, { useCallback, useState } from 'react'
import Callback2 from './Callback2';

export default function Callback1() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(2);
    console.log("first page")
    const incrementCount = ()=>{
        setCount(count+1);
        console.log("count")
    }
    // const incrementNumber = ()=>{
    //     setNumber(number+1);
    //     console.log("number")

    // }

    const incrementNumber =useCallback(()=>{
        setNumber(number+1);
        console.log("number")

    },[number]) 


    
  return (
    <div>
        <h1>count is {count} <button onClick={incrementCount}> increment count</button></h1>
        <h1>count is {number} <Callback2 increment={incrementNumber}/></h1>

      
    </div>
  )
}
