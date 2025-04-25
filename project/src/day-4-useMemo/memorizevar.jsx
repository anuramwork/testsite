import React, { useMemo, useState } from 'react';
export default function ValueMemorize(){
    const [number, setNumber ] = useState(5);
    const [count, setCount] = useState(2);

    const calculationcount = (num)=>{
        console.log("calculating count");
        return num*2;

    }

    const calculationnumber = (num)=>{
        console.log("calculating number");
        return num*2;

    }

    const numbers = calculationnumber(number);


    console.log("numbers = ",numbers)

    
    const counting = useMemo(()=>{
        calculationcount(count)
    },[count])
    console.log("counting =",counting());


    return(
        <>
        <h1>Count is {count}</h1>
        <h1>Number is {number}</h1>
        <button onClick={()=>{setCount(count+1)}}>increment Count</button>
        <button onClick={()=>{setNumber(number+1)}}>increment Number</button>
        </>
    )
}