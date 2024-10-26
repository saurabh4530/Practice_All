import React, { useContext } from 'react'
import Context1 from './Context1'

function Comp2() {
    const {text,setText}=useContext(Context1)
  return (
<>
<h3>component 2</h3>
<button onClick={()=>setText("Component 2")}>Click me</button>
<h1>{text}</h1>
</>
  )
}

export default Comp2