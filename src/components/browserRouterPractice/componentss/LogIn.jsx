import React, { useState } from "react";
import { useAuth } from "./Auth";
import { replace, useNavigate } from "react-router-dom";
useNavigate

function LogIn() {
  const [user, setUser] = useState("null");
  const auth=useAuth();
  const navigate=useNavigate()
  const handleLogin=()=>{
    auth.login(user);
    navigate("/",{replace:true})



  }

  return (
    <div>
      <label>
        User Name :
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LogIn;
