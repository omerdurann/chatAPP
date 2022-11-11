import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Users from "../components/Users";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
        <Users />
      </div>
    </div>
  );
};

export default Home;
