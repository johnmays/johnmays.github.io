import React from 'react'
import face from '../assets/images/john_greece_fixed_cropped.jpg'

export default function Home() {
    return(
        <div className="content-box summary-box">
            <h1>John Mays</h1>
            <p>I dig computers & design.</p>
            <img src={face} alt="a portrait of John Mays standing on a beach in Lesvos"></img>
        </div>
    )
}