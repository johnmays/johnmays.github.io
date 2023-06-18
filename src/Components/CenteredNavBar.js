import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function CenteredNavBar() {
    const link_ref_3 = useRef(null);
    const link_ref_4 = useRef(null);
    const [position_link_3, setPosition_3] = useState({ x: 0, y: 0 });
    const [position_link_4, setPosition_4] = useState({ x: 0, y: 0 });
    const [navBounds, setNavBounds] = useState([0,0,0,0,0])
    useEffect(() => {
      function handleResize() {
        const x_3 = link_ref_3.current.offsetLeft;
        const y_3 = link_ref_3.current.offsetTop;
        setPosition_3({ x_3, y_3 });
        const x_4 = link_ref_4.current.offsetLeft;
        const y_4 = link_ref_4.current.offsetTop;
        setPosition_4({ x_4, y_4 });
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, 
    [link_ref_3, link_ref_4]);

    return (
    <div>
        <nav className="navbar">
            <Link to='/home' className="nav-link">Home</Link>
            <Link to='/about' className="nav-link">About</Link>
            <Link to='/resume' className="nav-link" ref={link_ref_3}>Resume</Link>
            <Link to='/designportfolio' className="nav-link" ref={link_ref_4}>Design_Portfolio</Link>
            <div className="hover-selector" style={{left: "212px", right: "10px"}}></div>
        </nav>
        <div>3rd link: (x:{ position_link_3.x_3 }, y:{ position_link_3.y_3}); 4th link: (x:{ position_link_4.x_4 }, y:{ position_link_4.y_4})</div>
    </div>
    )
}