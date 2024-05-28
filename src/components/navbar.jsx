import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import AllMain from "./AllMain";
import AllAbout from "./AllAbout";

function NavB() {
  return (
  
      <div>
        <header className="nav">
          <div>
            <img src="/logo192.png" alt="No logo" className="w" />
            <span className="Rapp">ReactFacts</span>
          </div>

          <Nav className="navigation">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/more">
              More
            </Nav.Link>
            <button className="btnlogin">Login</button>
          </Nav>
        </header>
        <div>
        
            <Routes>
              <Route exact path="/" element={<AllMain />} />
              <Route path="/about" element={<AllAbout />} />
            </Routes>
          
        </div>
      </div>
    
  );
}

export default NavB;
