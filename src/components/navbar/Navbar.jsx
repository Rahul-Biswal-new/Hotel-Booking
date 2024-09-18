import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import './Navbar.css'

export default function Navbar() {
  useEffect(() => {
    document.title = "Eco Retreat";
  }, []);
  return (
    <div className="navbar">
      <Helmet>
        <title>Eco Retreat</title>
      </Helmet>
        <div className="navcontainer">
            <span className="logo">Eco Retreat</span>
            <div className="navitems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Login</button>

            </div>
        </div>
    </div>
  )
}
