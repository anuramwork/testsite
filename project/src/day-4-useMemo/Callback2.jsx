import React from 'react'

// function Callback2({increment}) {
//     console.log("Second page")
//   return (
//     <div>
//       <button onClick={increment}>increment number</button>
//     </div>
//   )
// }

const Callback2 = React.memo(({increment})=>{
    console.log("second page");
    return (
        <>
        <button onClick={increment}>increment number</button>
        </>
    )
}

)

export default Callback2
