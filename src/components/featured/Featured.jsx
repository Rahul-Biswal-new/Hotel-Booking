import React from 'react'
import './Featured.css'

export default function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1624964649310-8fa8af99b4e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" className="featuredImg" />
            <div className="featuredtitles">
                <h1>Dublin</h1>
                <h2>123 properties </h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg" />
            <div className="featuredtitles">
                <h1>Ibiza</h1>
                <h2>153 properties </h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" className="featuredImg" />
            <div className="featuredtitles">
                <h1>Madrid</h1>
                <h2>533 properties </h2>
            </div>
        </div>
    </div>
  )
}
