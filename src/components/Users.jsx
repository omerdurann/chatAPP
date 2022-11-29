import React from "react";
import { db } from "../firebase";
import UserList from "./UserList";
import { collection,  getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import "../img/ico2.png";


const Users = () => {
  const [users, setUsers] = useState([])
  const getUsers  = async ()=> {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usersdb = [];
    querySnapshot.docs.forEach((doc) => {
      usersdb.push({...doc.data()})
    })
    console.log("users",usersdb);
    setUsers(usersdb)
  };

  useEffect(()=>{getUsers()},[])


  return (
    <div className="usersList">
      <UserList />
      <div className="scrool">
        {users.map((user) => (
          <div className="userList">
            <img
              src={user?.photoURL ? user?.photoURL  : "../img/ico2.png"} alt=""
            />
            <div className="userListInfo">
              <span>{user.displayName}</span>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
