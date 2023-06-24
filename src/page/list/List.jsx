import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
// import Featured from '../../components/featured/Featured'
import './List.css';

export default function List() {
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destinations</label>
                <input type="text" />
              </div>

              <div className="lsItem">
                <label>Destinations</label>
                <input type="text" />
              </div>

              <div className="lsItem">
                <label>Check-in date</label>
                <input type="text" />
              </div>
            <div className="listresults">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
