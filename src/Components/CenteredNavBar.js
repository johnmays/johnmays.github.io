import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CenteredNavBar() {
    const link_ref_1 = useRef(null);
    const link_ref_2 = useRef(null);
    const link_ref_3 = useRef(null);
    const link_ref_4 = useRef(null);
    const [navBounds, setNavBounds] = useState([0,0,0,0,0]);
    const [selectorBounds, setSelectorBounds] = useState([0,0]);
    //const [linkSelected, setLinkSelected] = useState(0);

    useEffect(() => {
      function handleResize() {
        const x_1 = link_ref_1.current.offsetLeft;
        const x_2 = link_ref_2.current.offsetLeft;
        const x_3 = link_ref_3.current.offsetLeft;
        const x_4 = link_ref_4.current.offsetLeft;
        const x_5 = link_ref_4.current.offsetLeft+link_ref_4.current.offsetWidth;
        setNavBounds([x_1,x_2,x_3,x_4,x_5]);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, 
    [link_ref_1, link_ref_2, link_ref_3, link_ref_4]);

    function handleHover(linkNumber) {
      if (linkNumber === 1){
        setSelectorBounds([navBounds[0],navBounds[4]-navBounds[1]]);
      }else if (linkNumber === 2){
        setSelectorBounds([navBounds[1],navBounds[4]-navBounds[2]]);
      }else if (linkNumber === 3){
        setSelectorBounds([navBounds[2],navBounds[4]-navBounds[3]]);
      }else if (linkNumber === 4){
        setSelectorBounds([navBounds[3],0]);
      }else{
        console.log("Invalid link number passed...")
      }
    };

    return (
    <div>
        <nav className="navbar">
            <Link to='/home' className="nav-link" ref={link_ref_1} onMouseEnter={() => handleHover(1)}>Home</Link>
            <Link to='/about' className="nav-link" ref={link_ref_2} onMouseEnter={() => handleHover(2)}>About</Link>
            <Link to='/resume' className="nav-link" ref={link_ref_3} onMouseEnter={() => handleHover(3)}>Resume</Link>
            <Link to='/designportfolio' className="nav-link" ref={link_ref_4} onMouseEnter={() => handleHover(4)}>Portfolio</Link>
            <div className="hover-selector" style={{left: `${selectorBounds[0]}px`, right: `${10+selectorBounds[1]}px`}}></div>
        </nav>
        <div>{navBounds[0]},{navBounds[1]},{navBounds[2]},{navBounds[3]},{navBounds[4]}</div>
    </div>
    )
}