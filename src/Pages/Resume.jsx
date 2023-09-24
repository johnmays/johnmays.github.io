import React from 'react'
import resume_image from '../assets/images/09_24_23_mays_online_resume.jpg'
export default function Resume() {

    return(
        <div className='resume-content'>
            <a href="/09_24_23_mays_online_resume.pdf" target="_blank" rel="noopener noreferrer">
                <img src={resume_image} alt="My resume.  Text can be extracted by actually downloading it as a pdf with the button below."></img>
            </a>
            <a href="/09_24_23_mays_online_resume.pdf" target="_blank" rel="noopener noreferrer">
                <button>Download</button>
            </a>
        </div>
    )
}
