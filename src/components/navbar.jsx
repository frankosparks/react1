import React, { Component } from "react";
import Footer from "./footer";

function NavB(){
  return(
    <div>   
      <header className="nav">
      <div>
       <img src="/logo192.png" alt="No logo" className="w"/> 
       <span className="Rapp">ReactFacts</span>
      </div>
        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#more">More</a>
          <button className="btnlogin">Login</button>
        </nav>
      </header>
    
    </div>
  )
}


export default NavB;