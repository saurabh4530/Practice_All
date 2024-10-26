import React, { useState } from 'react'

function useFormInput(initialvalue) {
    const [value,setValue]=useState(initialvalue)
    const handleChange=(e)=>{
        
        setValue(e.target.value)
    }
  return ({value,onChange:handleChange}
    
  )
}

export default useFormInput