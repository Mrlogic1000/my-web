import React from 'react'
import {GoSearch} from 'react-icons/go'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        

    <ul>
        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/about">About</Link></li>
        <li><Link className='link' to="/Portifolio">Portifolio</Link></li>
        <li><Link className='link' to="/Contact">Contact</Link></li>
        <li><Link className='link' to="/Gallary">Gallary</Link></li>
        
        
    </ul>

    <div className='searchbar'>

   <div className="searchinner">
    
   <input type="text" />
   <span><GoSearch/></span>
   </div>

   </div>

   </nav>
  )
}

export default Navbar