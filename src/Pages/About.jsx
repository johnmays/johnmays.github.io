import React from 'react'
import { Link } from "react-router-dom"
export default function About() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth()+1;
    const currentDay = today.getDate();
    const pastBirthday = (currentMonth == 3) && (currentDay >=4) || (currentMonth > 3);
    const age = currentYear - 2002 + pastBirthday;

    return(
        <div className="content-box">
            <h1>About Me</h1>
            <p>Hi, my name is John. I'm {age} years old & I'm from Cincinnati, Ohio. I recently graduated college with a B.S. in computer science and I'm currently looking for work. My concentration was in artificial intelligence, but I also studied software development, numerical linear algebra (mainly for image processing), and the ethics of AI.  My other interests include UI design, graphic design, and boxing. I was a part-time graphic designer for four years and I still do freelance work. I can be reached at john dot k dot mays at-symbol outlook dot com, and feel free to look at any of <Link to='/profiles' className="text-link">my professional profiles</Link>.</p>
        </div>
    )
}