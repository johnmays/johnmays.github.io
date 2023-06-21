import linkedin_logo from '../images/linkedin_logo.svg'
import github_logo from '../images/github_logo.svg'
import fiverr_logo from '../images/fiverr_logo.svg'
import ProfileBox from '../Components/ProfileBox'
import smartGithubLogo from '../Components/smartGithubLogo'

export default function Profiles() {
    return(
        <div>
            <div className='profile-page'>
                {ProfileBox(github_logo, "GitHub", "boo")}
                {ProfileBox(linkedin_logo, "LinkedIn", "boo")}
                {ProfileBox(fiverr_logo, "Fiverr", "boo")}
            </div>
            {smartGithubLogo("#00ff00")}
        </div>
    )

    //smartSVG: use for easy color-changing.
}