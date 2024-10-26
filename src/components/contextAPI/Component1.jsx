//@ts-nocheck
import React, { useContext } from 'react'
import Context1 from './Context1'

function Component1() {
    const {text,setText}=useContext(Context1)
  return (
    <>
    <h2>Component1</h2>
    <p>{text}</p>
    <button onClick={()=>{setText("hello Context API")}}>update Text</button>

    </>
  )
}

export default Component1