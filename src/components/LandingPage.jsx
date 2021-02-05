import React from "react";
import Logo from "../assets/logo@2x.png";
import banner from "../assets/banner.webp";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
     <div className="landing-page">
        <div className="navbar-container">
          <nav>
            <div className="logo-container">
              
            </div>
            <div className="navlist-container">
            
              <div class="dropdown">
            <button class="dropbtn">Login</button>
            <div class="dropdown-content">
            <Link to="/employeelogin">
            Employee 
            </Link>
            <Link to="/managerlogin">
            Manager 
            </Link>
            <Link to="/adminlogin">
            Admin 
            </Link>
            </div>
          </div>

            </div>
          </nav>
        </div>
        <div className="img-container">
          <img src={Logo} alt="logo"/>
        </div>
        <div >
          <img src={banner} alt="logo"/>
        </div>
       
        {/* <div className="headliner-container">
          <div className="headliner">To MEET all your customer Needs</div>
          
        </div>
        <div className="login-cards" id="Login">
          <div className="headliner">Who Are We?</div>
          <div className="d-flex" >
            <div>
            <h2>A CRM software that makes sales a breeze.</h2>
            <br/>
              <p>We know selling can be hard. And it gets even more complicated when your sales teams have to juggle multiple tools to make a sale. </p>
              <br/>
              <p>But with a single, comprehensive tool like Freshworks CRM (formerly Freshsales), you can:</p>
              <br/>
             
              <ul className="main_ul">
                <li>Discover the best leads</li>
                <li>Boost contextual engagement </li>
                <li>Manage multiple pipelines</li>
                <li>Drive deals to closure, and </li>
                <li>Nurture leads and existing customers</li>
                <li>Choose Freshworks CRM, sit back, and watch your team crush sales numbers.</li>
              </ul>
           </div>
            <div>
              <img src={bg} className="main_img"/>
            </div>
          </div>
         
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
