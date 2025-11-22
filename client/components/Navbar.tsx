import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-t border-b border-white-95 px-5 md:px-20 py-6">
      <div className="max-w-[1392px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f8f9fbdfa907c4f71c7b4696f0efe937b95cf67b?width=180"
              alt="Fyndae Logo"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-grey-15 font-medium text-base leading-[150%] hover:text-green-70 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-grey-15 font-medium text-base leading-[150%] hover:text-green-70 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-grey-15 font-medium text-base leading-[150%] hover:text-green-70 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-grey-15 font-medium text-base leading-[150%] hover:text-green-70 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <button className="hidden sm:flex px-6 py-3 items-center gap-2 rounded-lg border border-gray-40 bg-[#F7F7F8] text-dark-90 font-medium text-base leading-[150%] hover:bg-gray-50 transition-colors">
            Search Database
          </button>
          <button className="flex px-4 sm:px-6 py-3 items-center gap-2 rounded-lg bg-green-70 text-white font-medium text-sm sm:text-base leading-[150%] hover:bg-green-70/90 transition-colors">
            Register / Login
          </button>
        </div>
      </div>
    </nav>
  );
}
