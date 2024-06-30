import { FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
import "../index.css";
import React from 'react'


const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    <div>
                        <p>G-325,Adhyapak Nagar</p>
                        <p>Nangloi,Delhi-110041</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    9315450810</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    krishff48@gmail.com</h4>
                
                </div>
                
                
                
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is Krish Sharma.Sophomore at NSUT
                    I enjoy creating new challenging projects
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff",marginRight: "2rem"}} /><FaTwitter size={30} style={{color:"#fff",marginRight: "2rem"}}/><FaLinkedin size={30} style={{color:"#fff",marginRight: "2rem"}}/>
                
                </div>
            </div>
                    
                    
            

        </div>
      
    </div>
  )
}

export default footer
