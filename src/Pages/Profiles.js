import linkedin_logo from '../images/linkedin_logo.svg'
import github_logo from '../images/github_logo.svg'
import smart_github_logo from '../images/smart_github_logo.svg'
import fiverr_logo from '../images/fiverr_logo.svg'
import ProfileBox from '../Components/ProfileBox'
//import SmartSVG from '../Components/SmartSVG'
//import SmartGithubLogo from '../Components/SmartGithubLogo'

export default function Profiles() {
    return(
        <div>
            <div className='profile-page'>
                {ProfileBox({github_logo}, "foo", "boo")}
            </div>
        </div>
    )
}

/*{ProfileBox(linkedin_logo, "LinkedIn", "boo")}
                {ProfileBox(fiverr_logo, "Fiverr", "boo")} */