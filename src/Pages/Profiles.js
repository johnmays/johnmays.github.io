import linkedin_logo from '../images/linkedin_logo.svg'
import github_logo from '../images/github_logo.svg'
import fiverr_logo from '../images/fiverr_logo.svg'
import ProfileBox from '../Components/ProfileBox'
import { ReactComponent as GitHubLogo } from '../images/smart_github_logo.svg'

export default function Profiles() {
    return(
        <div>
            <div className='profile-page'>
                <ProfileBox title="foo" Logo={GitHubLogo}/>
            </div>
            <svg id="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2490.13 1422">
                <g fill="#fafafe">
                    <path d="m1245.07,11c-386.75,0-700,313.25-700,700,0,309.75,200.37,571.37,478.62,664.13,35,6.12,48.13-14.88,48.13-33.25,0-16.62-.87-71.75-.87-130.37-175.88,32.37-221.38-42.88-235.38-82.25-7.87-20.12-42-82.25-71.75-98.88-24.5-13.12-59.5-45.5-.87-46.37,55.12-.88,94.5,50.75,107.63,71.75,63,105.88,163.63,76.13,203.88,57.75,6.12-45.5,24.5-76.13,44.62-93.63-155.75-17.5-318.5-77.87-318.5-345.62,0-76.12,27.12-139.13,71.75-188.13-7-17.5-31.5-89.25,7-185.5,0,0,58.62-18.38,192.5,71.75,56-15.75,115.5-23.63,175-23.63s119,7.88,175,23.63c133.87-91,192.5-71.75,192.5-71.75,38.5,96.25,14,168,7,185.5,44.63,49,71.75,111.12,71.75,188.13,0,268.62-163.62,328.13-319.37,345.62,25.37,21.88,47.25,63.88,47.25,129.5,0,93.62-.88,168.87-.88,192.5,0,18.38,13.12,40.25,48.13,33.25,276.5-92.75,476.87-355.25,476.87-664.13,0-386.75-313.25-700-700-700Z"/>
                </g>
            </svg>
            <GitHubLogo style={{fill:"blue"}}/>
        </div>
    )


    /*                {ProfileBox(linkedin_logo, "LinkedIn", "boo")}
                {ProfileBox(fiverr_logo, "Fiverr", "boo")} */
    //smartSVG: use for easy color-changing.
}