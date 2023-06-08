import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navcontainer">
            <span className="logo">Wanderlust Retreat</span>
            <div className="navitems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Login</button>

            </div>
        </div>
    </div>
  )
}
