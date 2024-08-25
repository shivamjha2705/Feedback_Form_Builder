import { logo } from "../assets";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

  // Determine if the current path is the form-builder page
  const showButtons = location.pathname === "/form-builder";
  return (
    <nav className=" flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-2 lg:bg-n-8/90 lg:backdrop-blur-md bg-n-8/90 backdrop-blur-md">
    <div className="p-2 flex gap-2 items-center">
    <img
        src={logo}
        alt="Feedback Logo"
        className=""
      />
      <div className="text-2xl font-semibold">USER FEEDBACK</div>
    </div>
    
      <div className={`space-x-4 px-3 ${showButtons ? "block" : "hidden"}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Publish</button>
        </div>
    </nav>
  );
};

export default Navbar;
