import face from '../images/john_photo.jpg'

export default function Home() {
    return(
        <div className="content-box summary-box">
            <h1>John Mays</h1>
            <p>I am a software mason, a graphic designer, and a recent college graduate.</p>
            <img src={face} alt="a blurry photo of John Mays in front of a parking garage at night in Cleveland Ohio"></img>
        </div>
    )
}