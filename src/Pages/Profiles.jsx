import React from 'react'
import { ReactComponent as GitHubLogo } from '../assets/images/smart_github_logo.svg'
import { ReactComponent as LinkedinLogo } from '../assets/images/smart_linkedin_logo.svg'

import ProfileBox from '../Components/ProfileBox'

export default function Profiles() {
    return(
        <div>
            <div className='profile-page'>
                <ProfileBox title="Github" Logo={GitHubLogo} link={"https://github.com/johnmays"}/>
                <ProfileBox title="Linkedin" Logo={LinkedinLogo} link={"https://www.linkedin.com/in/john-mays/"}/>
            </div>
        </div>
    )
}