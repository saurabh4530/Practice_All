import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();


  return (<>
  <div>This is Home Page</div>
  <button onClick={()=>navigate("order-summary",{replace:true})}>Place order</button>


  
  </>
  )
}

export default Home