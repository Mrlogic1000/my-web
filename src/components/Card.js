import React from 'react'

function Card({image, title,content,link}) {
  return (
    <div className="card">
        {/* <img  className='thumbnail' src={require(`../images/${image}`)} alt="" /> */}
    
     <div className="card-title">
       <h3>{title}</h3>

     </div>
     <div className="card-content">
      {content}
     </div>
       </div>
  )
}

export default Card