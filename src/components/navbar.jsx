import React, { Component } from "react";

function NavB(){
  return(
    <div>
      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#more">More</a>
        <button className="btnlogin">Login</button>
      </nav>
    </div>
  )
}


export default NavB;