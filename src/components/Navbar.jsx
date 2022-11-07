import React, { useContext } from "react";
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import Logo from "../img/deneme2.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  const { t } = useTranslation();

  
  
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>{t("logout")}</button>
      </div>
    </div>
  );
};

export default Navbar;
