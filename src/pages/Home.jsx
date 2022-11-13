import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Users from "../components/Users";
import { themeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className={`home ${theme}`}>
      <div className="container">
        <Sidebar />
        <Chat />
        <Users />
      </div>
    </div>
  );
};

export default Home;
