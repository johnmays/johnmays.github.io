import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <div className='footer'>
            <p>You can find details about the construction of this website <Link to='/website_information' className="text-link">here</Link>.</p>
            <p>2023. Fluctuat nec mergitur.</p>
        </div>
    )
}