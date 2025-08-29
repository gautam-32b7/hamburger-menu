import { useState } from "react";

import { Menu, X } from "lucide-react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-lg font-bold">LOGO</div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-blue-700 rounded transition-colors focus:ring-2 focus:ring-blue-300"
          >
            {isOpen ? (
              <X
                size={24}
                className="transition-transform duration-200 cursor-pointer"
              />
            ) : (
              <Menu
                size={24}
                className="transition-transform duration-200 cursor-pointer"
              />
            )}
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <a
            href="#"
            className="block py-2 text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to MyApp
        </h1>
        <p className="text-gray-600 mb-4">
          This is a demonstration of a responsive hamburger menu. On desktop,
          you'll see the navigation links in the header. On mobile devices (or
          when you resize your browser window), the menu will collapse into a
          hamburger icon.
        </p>
        <p className="text-gray-600">
          Click the hamburger menu icon (three horizontal lines) to toggle the
          mobile menu open and closed. The icon smoothly animates between the
          hamburger and X states.
        </p>
      </div>
    </div>
  );
}
