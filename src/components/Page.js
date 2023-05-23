import React from 'react'
import page from '../images/img3.jpg'
import { items } from '../contents'

function Page() {
  
  return (
    <div className='page'>
        <div className='page-image'>
            <img src={page} alt="" />

        </div>
        <div className='page-content'>
            <h6>welcome to our company</h6>
            <h1>We are the Best IT company in our generation</h1>           

            {
                items.map((item, index)=>(
                    <div className="item" key={index}>

                        <div className="item-icon">
                          <div className="icon">
                          {item.icon}
                          </div>
                        </div>

                        <div className="item-content">
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Page