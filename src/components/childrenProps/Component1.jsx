//@ts-nocheck
import React from 'react'
import Component2 from './Component2'


function Component1() {
  return (
    <>
    <h1>Component 1</h1>
    <Component2 >
        <p>here i am passing jsx from component1 to component 2</p>
    </Component2>

    </>
  )
}

export default Component1