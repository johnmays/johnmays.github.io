import React from 'react'
import guts from '../assets/images/guts.jpg'

export default function NotFound() {
    return(
        <div className='content-box not-found-box'>
            <h1>404: The page you are looking for does not exist or is missing.</h1>
            <img src={guts} alt="panel from the comic Berserk of the character Guts frowning"></img>
        </div>
    )
}