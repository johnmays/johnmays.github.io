import React from 'react'
import { Link } from "react-router-dom"
export default function About() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth()+1;
    const currentDay = today.getDate();
    const pastBirthday = ((currentMonth === 3) && (currentDay >=4)) || (currentMonth > 3);
    const age = currentYear - 2002 + pastBirthday;

    return(
        <div className="content-box">
            <h1>About me</h1>
            <p>Hi, my name is John. I'm {age} years old & I'm from Cincinnati, Ohio. I recently graduated with a B.S. in computer science & a minor in ethics.  My concentration was in artificial intelligence, but I also studied software development, numerical linear algebra, and the ethics of AI. I currently reside in Manhattan and work at the New York City Office of Management & Budget as an assistant data analyst.  Currently, I am implementing pipelines for data reports & writing scripts for the analysis of traffic collisions data in NYC.  I was a part-time graphic designer for four years for the Maltz Performing Arts Center in Cleveland, and I am still open to freelance work. I can be reached at john dot k dot mays at-symbol outlook dot com, and feel free to look at any of <Link to='/profiles' className="text-link">my professional profiles</Link> or <Link to='/resume' className="text-link">my résumé</Link>.</p>
        </div>
    )
}