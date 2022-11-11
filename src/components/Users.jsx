import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "./Navbar1"



const Users = () => {
    const [users, setUsers] = useState([]);
    const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getUsers = () => {
      const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        setUsers(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getUsers();
  }, [currentUser.uid]);

 

  return (
    <div className="usersList">
        <Navbar/>
      {Object.entries(users)
        
        .map(() => (
          <div className="userList">
            <img src={users.photoURL} alt="" />
            <div className="userListInfo">
                <span>{users.displayName}</span>
              <p>{users.email}</p>
            </div>
            
          </div>
        ))}
        </div>
        )

}

export default Users
