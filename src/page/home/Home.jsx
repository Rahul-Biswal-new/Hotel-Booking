import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <div className="homecontainer">
        <Featured/>
        <h1 className="hometitle">Browse by property type</h1>
        <PropertyList />
        <h1 className='hometitle'>Home guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}
