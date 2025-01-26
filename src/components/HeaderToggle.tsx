const HeaderToggle = () => {
    return (
        <header className="absolute top-0 left-0 w-full px-[1rem] py-[0.75rem] dark:border-zinc-800 dark:bg-zinc-800 flex justify-between items-center shadow-md">
        <a href="/" className="text-2xl font-bold text-black dark:text-white">
          Wallet
          <span className="cd-text-violet-500 dark:cd-text-violet-400">fy</span>
        </a>

        <div>
            <button className="p-2 rounded-md shadow-md bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600">
                <span className="text-gray-700 dark:text-gray-300">
                    <img width="20" height="20" src="https://img.icons8.com/?size=100&id=9313&format=png&color=FAB005" alt="crescent-moon" />
                </span>
            </button>

            <button className="p-2 rounded-md shadow-md bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600">
                <span className="text-gray-700 dark:text-gray-300">
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/crescent-moon.png" alt="crescent-moon" />
                </span>
            </button>   
        </div>

      </header>
    );
}

export default HeaderToggle;