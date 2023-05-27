import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import { GrFacebookOption,GrInstagram} from 'react-icons/gr'
import { FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-contact">
                <h1>Looking for the best IT solution</h1>
                <h5>As our help we promote the success of your company</h5>

            </div>
            <div className="footer-info">
                <div className='quote'>
                    <h1>it serv</h1>
                    <p>We work with a passion of taking challenges and
                        creating new ones in advertising sector.
                    </p>
                    <button>About Us</button>
                </div>


                <div className='email'>
                    <h1>Newletters</h1>
                    <p>Subscribe our newsletter to get our latest update & news.</p>

                    <div className='input-container'>

                        <div className="input-inner-container">

                            <input type="text" placeholder='Your Email' />
                            <span className='input-icon'><BsFillSendFill /></span>
                        </div>

                    </div>
                    <div className="social">
                        <GrFacebookOption className='link'/>
                        <GrInstagram className='link'/>
                        <FaLinkedinIn className='link'/>

                    </div>
                </div>


                <div className='address'>
                    <h1>Official Info</h1>
                    <div className="list-with-icon">
                    <p>20 Lorem Road Semper, Sydney</p>
                    </div>
                    <div className="list-with-icon">
                    <p>20 Lorem Road Semper, Sydney</p>
                        
                    </div>
                </div>
                <div className='gallary'>
                    <h1>Gallary</h1>
                    {/* <div className="gallary-imgs">
                    <img className='gallary-img'  src={require(`../images/img10.jpg`)} alt="" />
                    <img className='gallary-img'  src={require(`../images/img10.jpg`)} alt="" />
                    <img className='gallary-img'  src={require(`../images/img10.jpg`)} alt="" />
                    </div> */}
                    <div className="gallary-imgs">
                        {
                          [...Array(7).keys()].map((i,index) => {
                            if(i!=0){

                               return <img className='gallary-img' key={index}  src={require(`../images/img${i}.jpg`)} alt="" />
                            }
                           
                        })
                        }

                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Footer