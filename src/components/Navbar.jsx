import React, { useContext } from "react";
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  
  
  return (
    <div className="navbar">
      
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button className="ico" onClick={() => signOut(auth)}>
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
