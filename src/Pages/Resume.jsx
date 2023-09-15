import React from 'react'
import resume_image from '../assets/images/09_15_23_mays_online_resume.jpg'
export default function Resume() {

    return(
        <div className='pdf-box'>
            <img src={resume_image} alt="An image of my resume.  Text can be extracted by actually downloading it as a pdf with the button below."></img>
            <div className='button-box'>
                <a href="/09_15_23_mays_online_resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button>Download</button>
                        <button>Download</button>
                </a>
            </div>
        </div>
    )
}

/*
<div className='button-box'>
                <a href="/06_13_23_mays_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button>Download</button>
                </a>
            </div>
*/