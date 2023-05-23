import React from 'react'
import { activities } from '../contents'


function Home2() {
  
  return (
   <div className="home2">
    <h1>We Are <strong>Dedicated</strong> To Serve You All Time.</h1>
     <div className='card-container'>
   
   {
     activities.map((activitie,index)=>(
       <div className="card" key={index}>
        <img  className='thumbnail' src={require(`../images/${activitie.image}`)} alt="" />
    
     <div className="card-title">
       <h3>{activitie.title}</h3>

     </div>
     <div className="card-content">
      {activitie.content}
     </div>
   </div>

     ))
   }


   </div>
   </div>
  )
}

export default Home2