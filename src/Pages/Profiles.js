import linkedin_logo from '../images/linkedin_logo.svg'

export default function Profiles() {
    return(
        <div>
            <img src={linkedin_logo} alt='linkedin monograph logo'/>
        </div>
    )
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