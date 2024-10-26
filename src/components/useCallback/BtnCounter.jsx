import React from 'react'

function BtnCounter({increment}) {
    console.log("btncomp called");
  return (
    <>
    <button onClick={increment}>add</button>
    </>
  )
}

export default React.memo(BtnCounter)