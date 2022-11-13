import React from "react";
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

export default function ThemeButton() {
  const { toggleTheme, theme } = useContext(themeContext);
  return (
    <div className="buttonWrapper">
      <button className="theme" onClick={toggleTheme}>
        {theme === "light" ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </button>
    </div>
  );
}
