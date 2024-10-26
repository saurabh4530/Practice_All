import React, { useMemo } from 'react'

function ResultComp({marks,subject}) {
  console.log("resultComp");
  const percentage=useMemo(()=>{
    console.log("result usememo called");
    return (marks*100)/100
  },[marks])

  return (<>
<h3>Marks:{marks}</h3>
<h3> {subject} Percentage:{percentage} % </h3>

 
  
  </>

  )
}

export default React.memo(ResultComp)