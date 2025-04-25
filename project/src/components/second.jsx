import React from 'react'
import Third from '../third'

function Second({name}) {
  return (
    <div>
      <h1>This is a second page</h1>
      <Third name={name}/>
    </div>
  )
}

export default Second
