import { createContext, useState, useEffect } from "react";

// Define the light and dark themes
export const light = {
  background: "#fff",
  color: "#000",
};

export const dark = {
  background: "#333",
  color: "#fff",
};

// Create the context with light as the default theme
export const ThemeContext = createContext();

function PortContext({ children }) {
  const [theme, setTheme] = useState(false);
  function themeChanger() {
    setTheme((prevMode) => !prevMode);
  }

  return (
    <ThemeContext.Provider value={{ theme, themeChanger }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default PortContext;
