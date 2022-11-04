import React, { useContext } from "react";
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import Logo from "../img/deneme2.png";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Çıkış</button>
      </div>
    </div>
  );
};

export default Navbar;
