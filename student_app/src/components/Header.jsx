import { NavLink } from "react-router-dom";
import DarkMode from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="p-4 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
      <h1 className="text-2xl flex justify-center font-bold text-gray-800"></h1>
      <DarkMode />
      <nav className="mt-2 flex dark:text white justify-center space-x-4">
        <NavLink
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Home
        </NavLink>

        <NavLink to="/tasks" className="text-blue-600 hover:text-blue-800">
          Tasks
        </NavLink>
      </nav>
    </header>
  );
}
