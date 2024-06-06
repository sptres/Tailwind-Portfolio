import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('mytheme');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'mytheme') {
      root.style.setProperty('--primary-color', '#F97316'); // Orange
      root.style.setProperty('--secondary-color', '#9CAFB7'); // Sage Green
    } else {
      root.style.setProperty('--primary-color', '#9CAFB7'); // Sage Green
      root.style.setProperty('--secondary-color', '#F97316'); // Orange
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'mytheme' ? 'mygreen' : 'mytheme';
    setTheme(newTheme);
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
