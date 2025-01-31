import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { themeAction, selectTheme } from "@store/slice/theme";
import React from "react";

const Layout = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectTheme);

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('schema');
    const theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light';
    dispatch(themeAction.setTheme(theme));
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [])

  const toggleDarkMode = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('schema', newTheme);
    dispatch(themeAction.toggleTheme())
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <header className="absolute top-0 left-0 w-full px-[1rem] py-[0.75rem] dark:border-zinc-800 dark:bg-zinc-800 flex justify-between items-center shadow-md">
        <a href="/" className="text-2xl font-bold text-black dark:text-white">
          Wallet
          <span className="text-violet-500 dark:text-violet-400">fy</span>
        </a>

        <div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md shadow-md bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
          >
            <span className="text-gray-700 dark:text-gray-300">
              <img
                width="20"
                height="20"
                src={currentTheme === 'dark' 
                   ? "https://img.icons8.com/?size=100&id=9313&format=png&color=FAB005" 
                   : "https://img.icons8.com/ios-filled/50/crescent-moon.png"}
                alt={currentTheme === 'dark' ? "crescent-moon": "sun"}
              />
            </span>
          </button>
        </div>
      </header>
      <div className="h-full w-full px-[2rem] pt-[3rem] flex flex-col justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;