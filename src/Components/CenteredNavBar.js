import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CenteredNavBar() {
    const nav_ref = useRef(null);
    const link_ref_1 = useRef(null);
    const link_ref_2 = useRef(null);
    const link_ref_3 = useRef(null);
    const link_ref_4 = useRef(null);
    const link_ref_5 = useRef(null);

    const [navHeight, setNavHeight] = useState(0)
    const [navBounds, setNavBounds] = useState([0,0,0,0,0,0]);
    const [selectorBounds, setSelectorBounds] = useState([0,0]);
    const [transitionStyle, setTransitionStyle] = useState("opacity 0.3s");
    const [firstDisplay, setFirstDisplay] = useState(true);
    const [prevLinkNumber, setPrevLinkNumber] = useState(0);



    useEffect(() => {
      function handleResize() {
        const x_1 = link_ref_1.current.offsetLeft;
        const x_2 = link_ref_2.current.offsetLeft;
        const x_3 = link_ref_3.current.offsetLeft;
        const x_4 = link_ref_4.current.offsetLeft;
        const x_5 = link_ref_5.current.offsetLeft;
        const x_6 = link_ref_5.current.offsetLeft+link_ref_5.current.offsetWidth;
        setNavBounds([x_1,x_2,x_3,x_4,x_5,x_6]);
        const nav_height = nav_ref.current.offsetHeight;
        setNavHeight(nav_height);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, 
    [nav_ref, link_ref_1, link_ref_2, link_ref_3, link_ref_4,link_ref_5]);

    function handleLinkHover(linkNumber) {
      if (linkNumber === 1){
        setSelectorBounds([navBounds[0],navBounds[5]-navBounds[1]]);
      }else if (linkNumber === 2){
        setSelectorBounds([navBounds[1],navBounds[5]-navBounds[2]]);
      }else if (linkNumber === 3){
        setSelectorBounds([navBounds[2],navBounds[5]-navBounds[3]]);
      }else if (linkNumber === 4){
        setSelectorBounds([navBounds[3],navBounds[5]-navBounds[4]]);
      }else if (linkNumber === 5){
        setSelectorBounds([navBounds[4],0]);
      }else{
        console.log("Invalid link number passed...");
      }

      if (firstDisplay) {
        setTransitionStyle("opacity 0.3s");
        setFirstDisplay(false);
      }else{
        if (prevLinkNumber > linkNumber){
          setTransitionStyle("opacity 0.3s, left 0.3s, right 0.3s 0.1s");
        }else{
          setTransitionStyle("opacity 0.3s, left 0.3s 0.1s, right 0.3s");
        }
      }
      setPrevLinkNumber(linkNumber);
    };

    function handleNavHover(){
      setFirstDisplay(true);
    }

    return (
      <div className="nav-container">
        <nav className="navbar" onMouseEnter={() => handleNavHover() } ref={nav_ref}>
            <Link to='/home' className="nav-link" ref={link_ref_1} onMouseEnter={() => handleLinkHover(1)}>Home</Link>
            <Link to='/about' className="nav-link" ref={link_ref_2} onMouseEnter={() => handleLinkHover(2)}>About</Link>
            <Link to='/resume' className="nav-link" ref={link_ref_3} onMouseEnter={() => handleLinkHover(3)}>Resume</Link>
            <Link to='/designportfolio' className="nav-link" ref={link_ref_4} onMouseEnter={() => handleLinkHover(4)}>Portfolio</Link>
            <Link to='/profiles' className="nav-link" ref={link_ref_5} onMouseEnter={() => handleLinkHover(5)}>Profiles</Link>
            <div className="hover-selector" style={{left: `${selectorBounds[0]}px`, right: `${10+selectorBounds[1]}px`, transition: `${transitionStyle}`}}></div>
        </nav>
        <div className="spacer" style={{height: `${navHeight}px`}}></div>
      </div>
    )
}