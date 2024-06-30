import { Link } from "react-router-dom";
import "../index.css"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react";
function Navbar(){
    const[click,setClick]=useState(false);
    

    return(
        <div className="header">
            <Link to="/">
                <h1>ITZ MEE</h1>
            </Link>
            <ul className={click?"nav-items active": "nav-items"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={()=>{setClick(!click)}}>
                {click ?(<FaTimes size={20} style={{color: "#fff"}}/>):(<FaBars size={20} style={{color: "#fff"}}/>)}
                
                


            </div>
        </div>
    );

}
export default Navbar;