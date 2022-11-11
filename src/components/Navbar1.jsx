import React, { useContext } from "react";
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import Logo from "../img/deneme2.png";

const Navbar = () => {

  return (
    <div className="userlistLogo">
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  );
};

export default Navbar;
