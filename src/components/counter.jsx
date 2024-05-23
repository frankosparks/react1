import React, { Component } from "react";

function Counter(){
  return(
    <main  className="wrapper">
      <h1 className="letter">Fun facts about React</h1>
      <ul className="facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars in Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprice apps, including mobile apps</li>
      </ul>
    </main>
  )
}

export default Counter;
