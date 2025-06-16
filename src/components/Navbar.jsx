import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "font-semibold text-sm sm:text-base border-2 border-black px-3 py-2 rounded shadow-[2px_2px_0_#000] transition-all transform hover:-translate-y-1 hover:bg-black hover:text-white";

  return (
    <header className="sticky top-0 z-50 py-2 bg-white text-black border-b-2 border-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center min-h-[64px]">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold border-2 border-black px-3 py-2 rounded shadow-[2px_2px_0_#000] leading-none"
        >
          Azmi Nailal Hadi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-3">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>
          <Link to="/project" className={navLinkClass}>
            Projects
          </Link>
          <Link to="/contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden px-3 py-2 border border-black rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-60 opacity-100 pt-4 px-4 pb-4 space-y-2"
            : "max-h-0 opacity-0 px-4 pt-0 pb-0 space-y-0"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={navLinkClass + " block"}
        >
          Home
        </Link>
        <Link
          to="/project"
          onClick={() => setIsOpen(false)}
          className={navLinkClass + " block"}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={navLinkClass + " block"}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
