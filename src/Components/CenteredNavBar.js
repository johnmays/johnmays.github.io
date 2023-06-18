import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function CenteredNavBar() {
    const link_ref_1 = useRef(null);
    const link_ref_2 = useRef(null);
    const link_ref_3 = useRef(null);
    const link_ref_4 = useRef(null);
    const [navBounds, setNavBounds] = useState([0,0,0,0,0]);

    useEffect(() => {
      function handleResize() {
        const x_1 = link_ref_1.current.offsetLeft;
        const x_2 = link_ref_2.current.offsetLeft;
        const x_3 = link_ref_3.current.offsetLeft;
        const x_4 = link_ref_4.current.offsetLeft;
        setNavBounds([x_1,x_2,x_3,x_4,10]);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, 
    [link_ref_1, link_ref_2, link_ref_3, link_ref_4]);

    return (
    <div>
        <nav className="navbar">
            <Link to='/home' className="nav-link" ref={link_ref_1}>Home</Link>
            <Link to='/about' className="nav-link" ref={link_ref_2}>About</Link>
            <Link to='/resume' className="nav-link" ref={link_ref_3}>Resume</Link>
            <Link to='/designportfolio' className="nav-link" ref={link_ref_4}>Portfolio</Link>
            <div className="hover-selector" style={{left: "202px", right: "10px"}}></div>
        </nav>
        <div>{navBounds[0]},{navBounds[1]},{navBounds[2]},{navBounds[3]},{navBounds[4]}</div>
    </div>
    )
}