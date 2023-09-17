import React from 'react'
import { Link } from "react-router-dom"
export default function WebsiteInformation() {
    return(
        <div className="content-box">
            <h1>About this website</h1>
            <p>This website was created using ReactJS.  It is hosted through github pages and all of its source code can be found in <Link to='https://github.com/johnmays/johnmays.github.io' className="text-link">my GitHub repository</Link> for the project.  Depending on the time you visit the website, I am using one of two color palettes: Either nearly monotone (#fafafe, #1a191f, #26252d) or somewhat colorful (#017dbb, #bc955c, #171b1c).  See if you can find any of the easter eggs.</p>
        </div>
    )
}