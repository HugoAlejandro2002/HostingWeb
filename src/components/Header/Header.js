// import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { HeaderStyle } from "./HeaderStyles";
import { elementHider, HeaderHider } from "./elementHider";
import logo1 from "../../assets/logo_hacking_etico.png";
/** hiding/showing the top menu when scrolling  */
window.addEventListener("scroll", elementHider);

const Header = () => {
  return (
    <HeaderHider>
      <header className="header-wrapper">
        <HeaderStyle>
          <>
          <img src={logo1} width="15%"/>
          <Link to="/" aling="left"> 
          
          <h4 align="center" >ETHICAL HACKING </h4>
           <h6 align="center" >STUDENTS CLUB</h6></Link>
           </>
          <Navbar />
        </HeaderStyle>
      </header>
    </HeaderHider>
  );
};

export { Header };
