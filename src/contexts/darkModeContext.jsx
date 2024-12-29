import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // Get stored dark mode preference or default to 'light'
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  // Apply dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
