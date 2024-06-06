import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('mytheme');

  const toggleTheme = () => {
    const newTheme = theme === 'mytheme' ? 'mygreen' : 'mytheme';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 bg-gray-200 rounded-full shadow-md"
    >
      {theme === 'mytheme' ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-blue-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
