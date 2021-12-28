import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg"

const Header = () => {
  return(
      <div className="header">
          <Link to="/">
            <div className="logo">
              <img className="logo-img" src={logo}></img> 
              <span className="logo-text"> RECIPE<b>FINDER</b></span>
            </div>
          </Link>
      </div>
  )
}

export default Header