import React, { useState } from 'react'

function State() {
    // let count= 0;
    const [count, setCount] = useState(0)
    // const Increment = ()=>{
    //     count++;
    //     console.log(count);
    // }
    const Increment = ()=>{
        setCount(count+1);
        setTimeout(()=>{
            console.log(count);

        },1000)
    }
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={Increment}>INCREMENT</button>
    </div>
  )
}

export default State
