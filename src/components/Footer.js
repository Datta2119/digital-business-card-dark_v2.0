import React from 'react'
import '../style/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

export default function InterestSection(){
    return (
        <div className='footer-section'>
            <FontAwesomeIcon className='icon' icon={faTwitterSquare} />
            <FontAwesomeIcon className='icon' icon={faFacebookSquare} />
            <FontAwesomeIcon className='icon' icon={faInstagramSquare} />
            {/* <FontAwesomeIcon className='icon' icon={faLinkedin} /> */}
            <FontAwesomeIcon className='icon' icon={faGithubSquare} />
        </div>
    )
}