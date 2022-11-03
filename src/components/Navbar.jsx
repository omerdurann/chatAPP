import React from "react";
import Logo from "../img/deneme2.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />
      <div className="user">
        <img src="https://i.pinimg.com/474x/e8/7b/2c/e87b2c4e603f6af5060c5badebfedd92.jpg" alt="" />
        <span>Sinan</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
