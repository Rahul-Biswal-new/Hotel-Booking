import React, { useState } from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Header() {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        }
    ])
  return (
    <div className="header">
        <div className="headercontainer">

        <div className="headerlist">
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className="headerlistitem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className="headerlistitem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>

            <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>

            <div className="headerlistitem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
            </div>
        </div>
        <h1 className="headertitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerdesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Wanderlust Retreat account</p>
        <button className='headerbtn'>Sign in / Register</button>
        <div className="headersearch">

        <div className="headersearchitem">
            <FontAwesomeIcon icon={faBed} className='headericon'/>
            <input type="text" placeholder='Where are you going?' className='headersearchinput' />
            </div>

            <div className="headersearchitem">
            <FontAwesomeIcon icon={faCalendarDays} className='headericon'/>
            <span className='headersearchtext'>Date to date</span>
            <DateRange editableDateInputs={true}
            onChange={item=> setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date} className='date'/>
            </div>

            <div className="headersearchitem">
            <FontAwesomeIcon icon={faPerson} className='headericon'/>
            <span className='headersearchtext'>2 adults 2 children 1 room </span>
            </div>

            
            <div className="headersearchitem">
            <button className="headerbtn">Search</button>
            </div>


        </div>
        </div>
    </div>
  )
}
