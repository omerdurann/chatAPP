import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";



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
    <div className="users">
      {Object.entries(users)
        
        .map((user) => (
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
