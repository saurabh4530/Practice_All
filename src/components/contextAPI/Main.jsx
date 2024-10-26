//@ts-nocheck
import React, { useState } from 'react'
import Context1 from './Context1'
import Component1 from './Component1'
import Comp2 from './Comp2'


function Main() {
    const [text,setText]=useState("ramlal")
  return (
    <>
    <h1>this is eg of context Api</h1>
    <Context1.Provider value={{text,setText}}>
        <Component1/>
        <Comp2/>
    </Context1.Provider>
    </>
  )
}

export default Main