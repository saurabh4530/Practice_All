//@ts-nocheck
import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [data,setData]=useState({})
    const handleDataFromChild=(cData)=>{
        console.log(cData);
        setData(cData)
    }

  return (
<>
<Child handleDataFromChild={handleDataFromChild} />
{
    Object.entries(data).map(([key,value])=>{
        return <p key={key}>{key}:{value}</p>
    })
}




</>
  )
}

export default Parent