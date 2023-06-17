import { Link } from "react-router-dom"

export default function CenteredNavBar() {
    return <nav className="navbar">
        <Link to='/home' className="nav-link">Home</Link>
        <Link to='/about' className="nav-link">About</Link>
        <Link to='/resume' className="nav-link">Resume</Link>
        <Link to='/designportfolio' className="nav-link">Design_Portfolio</Link>
        <div className="hover-selector"></div>
    </nav>
}