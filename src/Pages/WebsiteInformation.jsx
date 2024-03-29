import React from 'react'
import { Link } from "react-router-dom"
export default function WebsiteInformation() {
    return(
        <div className="content-box">
            <h1>About this website</h1>
            <p>This website was created using ReactJS.  It is hosted through GitHub pages and all of its source code can be found in this <Link to='https://github.com/johnmays/johnmays.github.io' className="text-link">repo</Link>.  Depending on the time you visit the website, I am using one of two color palettes: Either nearly monotone (#fafafe, #1a191f, #26252d) or somewhat colorful (#017dbb, #bc955c, #171b1c).  The website's icon is a design I made, ran through analog video glitch gear, and photographed on a Sony Trinitron.  Here is <a className="text-link" href="/white_netscape.jpg" target="_blank" rel="noopener noreferrer">a larger version</a>.</p>
        </div>
    )
}