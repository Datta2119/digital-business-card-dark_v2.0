import React from 'react'
import {BsFillEnvelopeFill} from 'react-icons/bs'
// import {BsLinkedin} from 'react-icons/bs'
// import {RiLinkedinBoxLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'
// import {TiSocialLinkedin} from 'react-icons/ti'
// import {FaLinkedin} from 'react-icons/fa'
// import {TbBrandLinkedin} from 'react-icons/tb'

// Import Stylesheet
import '../style/style.css'

export default function ImageHeader(){
    return(
        <div className='container'>
            <div className='image-section'></div>
            <h1 className='image-section--name'>Bishway Datta</h1>
            <h3 className='image-section--designation'>Frontend Developer</h3>
            <h4 className='image-section--email'>mrdatta2410@gmailcom</h4>
            
            <div className='buttons'>
                <button className='email-button'>
                    <span className='email-button--icon'>
                        <BsFillEnvelopeFill />
                    </span>
                    <span className='email-button--icon-name'>
                        Email
                    </span>
                </button>
                
                <button className='linkedin-button'>
                        <span className='linkedin-button--icon'>
                            <AiOutlineLinkedin />
                        </span>
                        <span className='linkedin-button--icon-name'>
                            LinkedIn
                        </span>
                </button>
            </div>
        </div>
    )
}