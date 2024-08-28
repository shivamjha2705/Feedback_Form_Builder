import { logo } from "../assets";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine if the current path is the form-builder page
  const showButtons = location.pathname === "/form-builder";

  return (
    <nav className="flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-10 bg-n-8/90 bg-white backdrop-blur-md p-2">
      
      <a href="/" className="flex gap-2 items-center">
        <img src={logo} alt="Feedback Logo" />
        <div className="text-2xl font-semibold">USER FEEDBACK</div>
      </a>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Desktop Menu */}
      <div className={`space-x-4 ${showButtons ? "flex" : "hidden"}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Publish</button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && showButtons && (
        <div className="md:hidden flex flex-col items-center bg-white absolute top-12 right-0 bg-n-8/90 backdrop-blur-md shadow-lg p-4 space-y-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Save</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Publish</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
