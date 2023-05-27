import React from 'react'
import {GoSearch} from 'react-icons/go'
function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <span>TechMogul</span>
            
            </div>

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portifolio</li>
        <li>Contact</li>
        <li>Gallary</li>
        
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