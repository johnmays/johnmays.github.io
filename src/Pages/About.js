import { Link } from "react-router-dom"
export default function About() {
    return(
        <div className="content-box">
            <h1>About Me</h1>
            <p>Hi, my name is John. I'm 22 years old & I'm from Cincinnati, Ohio. I recently graduated college with a B.S. in computer science and I'm currently looking for work. My concentration was artificial intelligence, but I also studied software development, numerical linear algebra (for image processing), and the ethics of technology.  My extra-academic interests include UI design, graphic design, and boxing. I was a part-time graphic designer for four years and I still do freelance work. Right now, I'm learning to speak modern Greek.  I can be reached at john dot k dot mays at-symbol outlook dot com, or feel free to look at one of <Link to='/profiles' className="text-link">my professional profiles</Link>.</p>
        </div>
    )
}