import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <div className="homecontainer">
        <Featured/>
        <h1 className="hometitle">Browse by property type</h1>
      </div>
    </div>
  )
}
