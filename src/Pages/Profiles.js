//import linkedin_logo from '../images/linkedin_logo.svg'
//import github_logo from '../images/github_logo.svg'
//import fiverr_logo from '../images/fiverr_logo.svg'
import { ReactComponent as GitHubLogo } from '../images/smart_github_logo.svg'
import { ReactComponent as FiverrLogo } from '../images/smart_fiverr_logo.svg'
import { ReactComponent as LinkedinLogo } from '../images/smart_linkedin_logo.svg'

import ProfileBox from '../Components/ProfileBox'

export default function Profiles() {
    return(
        <div>
            <div className='profile-page'>
                <ProfileBox title="Github" Logo={GitHubLogo} link={"https://github.com/johnmays"}/>
                <ProfileBox title="Fiverr" Logo={FiverrLogo} link={"https://www.fiverr.com/john_mays/"}/>
                <ProfileBox title="Linkedin" Logo={LinkedinLogo} link={"https://www.linkedin.com/in/john-mays/"}/>
            </div>
        </div>
    )


    /*                {ProfileBox(linkedin_logo, "LinkedIn", "boo")}
                {ProfileBox(fiverr_logo, "Fiverr", "boo")} */
    //smartSVG: use for easy color-changing.
}