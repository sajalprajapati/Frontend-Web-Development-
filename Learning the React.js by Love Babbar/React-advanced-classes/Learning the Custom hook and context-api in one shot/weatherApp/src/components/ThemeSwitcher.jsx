import React, { useContext } from 'react'
import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
    const {theme,setTheme}=useContext(ThemeContext);

  return (
     <button
      onClick={setTheme}
      className="p-2 bg-blue-500 text-white rounded"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  )
}

export default ThemeSwitcher