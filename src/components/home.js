import { Routes } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import heroImage from "../assests/altumcode-dMUt0X3f59Q-unsplash.jpg";


function Home(){
    return(
<div>
    <Navbar/>
    <Hero heroImage={heroImage} />
    <Footer/>
    {/* <h2>Hi,Developers</h2>
    <h3>Myself Krish Sharma</h3> */}
</div>
    
    )
} 
export default Home; 
