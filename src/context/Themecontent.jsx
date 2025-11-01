import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "claro";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  // 🔹 Aplica la clase al <div className="app"> cada vez que cambia el tema
  useEffect(() => {
    const appElement = document.querySelector(".app");
    if (appElement) {
      appElement.className = `app app-${theme}`;
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🔹 Cambiar tema manualmente (claro / oscuro)
  const actualizarTema = (nuevoTema) => {
    setTheme(nuevoTema);
  };

  // 🔹 Cambiar tema automáticamente (toggle)
  const toggleTema = () => {
    setTheme(theme === "oscuro" ? "claro" : "oscuro");
  };

  return (
    <ThemeContext.Provider value={{ theme, actualizarTema, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Theme = () => useContext (ThemeContext);