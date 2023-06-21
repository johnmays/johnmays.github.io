import guts from '../images/guts.jpg'

export default function NotFound() {
    return(
        <div className='content-box not-found-box'>
            <h1>404: The page you are looking for does not exist or is missing.</h1>
            <img src={guts} alt="panel of Guts from Berserk frowning"></img>
        </div>
    )
}