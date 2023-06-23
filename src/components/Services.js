import React from 'react'
import { services } from '../contents'
import Note from './Note'
import Card from './Card'


function Services() {
  
  return (
   <div className="services">
    
    <Note data="~ Our Awesome Services ~"/>

    <h1>We Are <strong>Dedicated</strong> To Serve You All Time.</h1>
     <div className='card-container'>
   
   {
     services.map((service,index)=>(
      
        <Card key={index} image={service.image} title={service.title} content={service.content}/>
       

     ))
   }


   </div>
   </div>
  )
}

export default Services