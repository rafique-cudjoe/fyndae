import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full max-w-[1392px] mx-auto my-6 px-6 md:px-20 py-6 flex items-center justify-between rounded-3xl border-t border-b border-white-95 bg-white">
      <Link to="/" className="flex-shrink-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f8f9fbdfa907c4f71c7b4696f0efe937b95cf67b?width=180"
          alt="Fyndae Logo"
          className="w-[90px] h-auto"
        />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className="px-5 py-3 text-grey-15 font-medium text-base leading-[150%] hover:opacity-80 transition-opacity"
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

      <div className="flex items-center gap-8">
        <button className="hidden sm:flex px-6 py-3 items-center gap-2 rounded-lg border-[0.5px] border-gray-40 bg-[#F7F7F8] text-dark-90 font-medium text-base leading-[150%] hover:bg-gray-50 transition-colors">
          Search Database
        </button>
        <button className="flex px-6 py-3 items-center gap-2 rounded-lg bg-green-70 text-white font-medium text-base leading-[150%] hover:bg-green-70/90 transition-colors">
          Register / Login
        </button>
      </div>
    </nav>
  );
}
