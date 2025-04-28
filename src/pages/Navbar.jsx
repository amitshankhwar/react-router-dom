import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <Link to="/">MyLogo</Link>
        </div>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navbar;
