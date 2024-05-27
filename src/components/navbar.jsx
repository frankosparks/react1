import React, { Component } from "react";
import {Nav} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllAbout from './AllAbout';
import Counter from "./counter";

function NavB(){
  return(
  <BrowserRouter>
    <div>   
      <header className="nav">
      <div>
       <img src="/logo192.png" alt="No logo" className="w"/> 
       <span className="Rapp">ReactFacts</span>
      </div>

        <Nav className="navigation">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/more">More</Nav.Link>
          <button className="btnlogin">Login</button>
        </Nav>
      
      </header>
    <div>
      <Routes>
        <Route path="/" element = {<Counter />}></Route>
        <Route path="/about" element ={<AllAbout />}></Route>
      </Routes>
    </div>
    </div>
 </BrowserRouter>
    
  )
}


export default NavB;