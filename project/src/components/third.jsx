import React from 'react'
import Fourth from './Fourth'

function Third({name}) {
  return (
    <div>
      <h1>Third page</h1>
      <Fourth name={name}/>
    </div>
  )
}

export default Third
