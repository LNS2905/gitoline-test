import React from "react";
import { useState, useEffect } from "react";
const themes = {
  dark: {
    backgroundColor: "#333",
    color: "white",
    color1: "white",
    backgroundColor1: "rgb(162, 7, 7)",
    backgroundColor2: "white",
   
  },
 
  light: {
    backgroundColor: "white",
    color: "#333",
    color1: "#333",
    backgroundColor1: "rgb(162, 7, 7)",
    backgroundColor2: "#FFCBA4"
  },
};
const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    //store the state mode to the local storage
    setDark(isDark);
  }, [dark]);
  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };
  
  const theme = dark ? themes.dark : themes.light;
  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeProvider, ThemeContext };
