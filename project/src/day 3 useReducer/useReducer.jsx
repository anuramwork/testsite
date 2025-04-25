import React, { useReducer} from 'react'
const initialState={count:0}
const reducer=(state,action)=>{
  switch(action.type){
     case "increment":
        return {count:state.count + action.value}
     case "decrement":
        return {count:state.count - action.value} 
     case "reset":
        return {count:0}
     default:
         throw new Error("Invalid action")
  }
}
export default function ReducerHook() {
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    
    Count is {state.count}
    <button onClick={()=>dispatch({type:"increment",value:1})}>Increment 1</button>
    <button onClick={()=>dispatch({type:"increment",value:5})}>Increment 5</button>
    <button onClick={()=>dispatch({type:"decrement",value:1})}>Decrement 1</button>
    <button onClick={()=>dispatch({type:"decrement",value:5})}>Decrement</button>
    <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </>
  )
}