import React from 'react'
import heade_image from "../imgheader.jpg"
import {GoSearch} from 'react-icons/go'
import {FaLightbulb,FaNetworkWired} from 'react-icons/fa'
import {GiCctvCamera} from 'react-icons/gi'
import {RiComputerFill} from 'react-icons/ri'

function Head() {
    const cards = [
        {icon:<FaLightbulb/>,title:'Electrical'},
        {icon:<FaNetworkWired/>,title:'Networking'},
        {icon:<GiCctvCamera/>,title:'Circuit Close Tevlevison'},
        {icon:<RiComputerFill/>,title:'Computer Engineering'},
        {icon:<FaLightbulb/>,title:'Software Installation'},
    ]
  return (
   <header>
    {/* <img src={heade_image} alt="" /> */}
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
   <div className='content'>
    
    <h1>The Best IT Technology in the world </h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut exercitationem quis. <br/>
        Ad quae optio repudiandae expedita a. Vitae ipsum consequuntur quas ipsam aliquam<br/> corrupti omnis, 
        delectus repudiandae. Fugit, nesciunt.
    </p>

   </div>
  <div className='card-container'>
    {
        cards.map((card,index)=>(
            <div className="card" key={index}>
                <div className="icon">{card.icon}</div>
                <div className="card-title">
                    {card.title}
                </div>
            </div>
        ))
    }

  </div>
   </header>
  )
}

export default Head