import linkedin_logo from '../images/linkedin_logo.svg'
import ProfileBox from '../Components/ProfileBox'

export default function Profiles() {
    return(
        <div className='profile-page'>
            {ProfileBox(linkedin_logo, "GitHub", "boo")}
            {ProfileBox(linkedin_logo, "LinkedIn", "boo")}
            {ProfileBox(linkedin_logo, "Fiverr", "boo")}
        </div>
        
    )
    /*
    <div>
        <img src={linkedin_logo} alt='linkedin monograph logo'/>
    </div>
    */
    /*return(
        <div>
            <h1>Profiles</h1>
            <div className='button-box'>
                <a href="https://github.com/johnmays">
                        <button>GitHub</button>
                </a>
            </div>
            <div className='button-box'>
                <a href="https://www.fiverr.com/john_mays">
                        <button>Fiverr</button>
                </a>
            </div>
            <div className='button-box'>
                <a href="https://www.linkedin.com/in/john-mays/">
                        <button>LinkedIn</button>
                </a>
            </div>
        </div>
    )*/
}