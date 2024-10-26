//@ts-nocheck
import React, { useCallback, useEffect, useState } from 'react'
import BtnCounter from './BtnCounter'

function Counter() {
    const [count, setCount] = useState(0)
const increment=useCallback(()=>{
    setCount((pre)=>pre+1)
},[])
useEffect(()=>{
    console.log('useEffect called')
},[increment])

  return (
  <>
  <h1>counter</h1>
  <h2>{count}</h2>
  <BtnCounter increment={increment}/>

  </>
  )
}

export default Counter