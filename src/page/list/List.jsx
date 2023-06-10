import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
export default function List() {
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="homecontainer">
        <Featured/>
      </div>
    </div>
  )
}
