import React from 'react'
import page from '../images/img3.jpg'
import { items } from '../contents'
import Note from './Note'
import ListIcon from './ListIcon'

function Page() {

    return (
        <div className="home1">
            <Note data="~ About Our company ~"/>
            <div className='page'>

                <div className='page-image'>
                    <img src={page} alt="" />

                </div>
                <div className='page-content'>
                    <h6>welcome to our company</h6>
                    <h1>We are the Best IT company in our generation</h1>

                    {
                        items.map((item, index) => (
                            <ListIcon key={index} icon={item.icon} title={item.title} content={item.content}/>
                           
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Page