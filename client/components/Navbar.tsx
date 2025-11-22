import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 py-3 bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f8f9fbdfa907c4f71c7b4696f0efe937b95cf67b?width=180"
            alt="Fyndae Logo"
            className="w-[90px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center h-full">
          <Link
            to="/"
            className="text-gray-800 font-medium text-base hover:text-green-600 transition-colors flex items-center h-full"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-gray-800 font-medium text-base hover:text-green-600 transition-colors flex items-center h-full"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="text-gray-800 font-medium text-base hover:text-green-600 transition-colors flex items-center h-full"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 font-medium text-base hover:text-green-600 transition-colors flex items-center h-full"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0 h-full">
          <button className="hidden lg:flex px-6 py-2.5 items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium text-base hover:bg-gray-50 transition-colors whitespace-nowrap h-full">
            Search Database
          </button>
          <button className="flex px-4 lg:px-6 py-2.5 items-center gap-2 rounded-lg bg-green-70 text-white font-medium text-sm lg:text-base hover:bg-green-70/90 transition-colors whitespace-nowrap h-full">
            Register / Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 pt-6 border-t border-gray-200 flex flex-col gap-4 bg-gray-50 rounded-lg p-4">
          <Link
            to="/"
            className="px-4 py-3 text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="px-4 py-3 text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/about"
            className="px-4 py-3 text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="px-4 py-3 text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <button className="w-full px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-50 transition-colors">
              Search Database
            </button>
            <button className="w-full px-6 py-3 rounded-lg bg-green-70 text-white font-medium text-base leading-[150%] hover:bg-green-70/90 transition-colors">
              Register / Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
