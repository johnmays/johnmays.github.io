import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <div className='footer'>
            <p>Information about this website <Link to='/website_information' className="text-link">here</Link></p>
            <p>{currentYear} | Fluctuat nec mergitur</p>
        </div>
    )
}