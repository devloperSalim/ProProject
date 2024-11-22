import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/logo";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
    <nav className="bg-gradient-to-r from-black to-green-600 text-white dark:from-gray-900 dark:to-green-700 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <div className="flex items-center">
            {/* {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />*/ }
            <Logo/>
            {/* <span className="text-2xl font-semibold">Salim School</span> */}

          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-yellow-300"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="hover:text-yellow-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-yellow-300"
            >
              Register
            </Link>
            <Link
              to="/users"
              className="hover:text-yellow-300"
            >
              Users
            </Link>
            <button
              onClick={toggleDarkMode}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-lg shadow-md dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <Outlet />
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 text-center p-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 Salim School. All rights reserved.
        </p>
      </footer>
    </>
  );
}
