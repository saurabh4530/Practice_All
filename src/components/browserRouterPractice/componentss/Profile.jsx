import React from 'react'
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const auth=useAuth();
    const navigate=useNavigate()
    const handlelogout=()=>{
        auth.logout();
        navigate('/'); 

    }
  return (
    <div>
        <div>welcome  {auth.user}</div>
        <button onClick={handlelogout}>logOut</button>
    </div>
  )
}

export default Profile