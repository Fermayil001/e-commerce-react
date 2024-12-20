import React from 'react'
import { jwtDecode } from "jwt-decode";

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
   const token = localStorage.getItem('token')
   const decodedToken = jwtDecode(token);

  return (
    <div className='main-width mx-auto text-center py-5'>
        <h2>Your profile</h2>
      <p><strong>{decodedToken.unique_name}</strong></p>
      <button className='btn btn-secondary' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout