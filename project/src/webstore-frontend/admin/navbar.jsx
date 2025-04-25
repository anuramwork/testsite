import React from 'react'
import './navbar.css'


function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="heading">
        <h1>Admin Panel</h1>
        </div>
        <ul>
            <li><a href="#">Users</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Logout</a></li>

        </ul>
    </div>
    </>
  )
}

export default Navbar
