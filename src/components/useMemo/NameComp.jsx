//@ts-nocheck
import React, { useMemo } from 'react'


function NameComp({fname,lname}) {
   
     console.log("nameComp");

     const fullname=useMemo(()=>{
        console.log("name usememo called");
        return `${fname}  ${lname} `
     } ,[fname])
  return (<>
  
<h3>Fname:{fname}</h3>
<h3>Fname:{lname}</h3>





<h3>fullname:{fullname}</h3>
  </>
  )
}

export default React.memo( NameComp)