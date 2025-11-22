import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full mx-auto my-6 px-4 sm:px-6 py-4 rounded-3xl border-b border-[#F1F1F3] bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f8f9fbdfa907c4f71c7b4696f0efe937b95cf67b?width=180"
            alt="Fyndae Logo"
            className="w-[90px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link
            to="/"
            className="text-grey-15 font-medium text-base leading-[150%] hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-grey-15 font-medium text-base leading-[150%] hover:opacity-80 transition-opacity"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="text-grey-15 font-medium text-base leading-[150%] hover:opacity-80 transition-opacity"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-grey-15 font-medium text-base leading-[150%] hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <button className="hidden lg:flex px-6 py-3 items-center gap-2 rounded-lg border-[0.5px] border-gray-40 bg-[#F7F7F8] text-dark-90 font-medium text-base leading-[150%] hover:bg-gray-50 transition-colors whitespace-nowrap">
            Search Database
          </button>
          <button className="flex px-4 lg:px-6 py-3 items-center gap-2 rounded-lg bg-green-70 text-white font-medium text-sm lg:text-base leading-[150%] hover:bg-green-70/90 transition-colors whitespace-nowrap">
            Register / Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-grey-15 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 pt-6 border-t border-white-95 flex flex-col gap-4">
          <Link
            to="/"
            className="px-4 py-3 text-grey-15 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="px-4 py-3 text-grey-15 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/about"
            className="px-4 py-3 text-grey-15 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="px-4 py-3 text-grey-15 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-3 pt-4 border-t border-white-95">
            <button className="w-full px-6 py-3 rounded-lg border-[0.5px] border-gray-40 bg-[#F7F7F8] text-dark-90 font-medium text-base leading-[150%] hover:bg-gray-50 transition-colors">
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
