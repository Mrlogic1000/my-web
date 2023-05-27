import React from 'react'
import { activities } from '../contents'
import Note from './Note'
import Card from './Card'


function Home2() {
  
  return (
   <div className="home2">
    
    <Note data="~ Our Awesome Services ~"/>

    <h1>We Are <strong>Dedicated</strong> To Serve You All Time.</h1>
     <div className='card-container'>
   
   {
     activities.map((activitie,index)=>(
      
        <Card key={index} image={activitie.image} title={activitie.title} content={activitie.content}/>
       

     ))
   }


   </div>
   </div>
  )
}

export default Home2