import { Link } from "react-router-dom"

export default function NavBar() {
    return <nav>
        <h1>NavBar</h1>
        <ul>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/resume'>Resume</Link>
        </ul>
    </nav>
}