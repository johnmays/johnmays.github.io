import linkedin_logo from '../images/linkedin_logo.svg'
import github_logo from '../images/github_logo.svg'
import fiverr_logo from '../images/fiverr_logo.svg'
import ProfileBox from '../Components/ProfileBox'

export default function Profiles() {
    return(
        <div>
            <div className='profile-page'>
                {ProfileBox(github_logo, "GitHub", "boo")}
                {ProfileBox(linkedin_logo, "LinkedIn", "boo")}
                {ProfileBox(fiverr_logo, "Fiverr", "boo")}
            </div>
        </div>
    )

    //smartSVG: use for easy color-changing.
}