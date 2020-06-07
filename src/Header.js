import React from 'react'
import logo from './logo.png';
import "./Header.css"
import Button from "./Button"

function Header() {
    return (
      <div>
          <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <a href="#home" className="btn-floating pulse center" style={{
            float: "righ",
            border: "1px solid red",
            color: "red",
          }}>ok</a>
        </header>
        <Button>tomek</Button>

      </div>
    );
  }

export default Header