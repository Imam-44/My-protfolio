import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // only for brand link
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

  // Update activeHash on scroll or hash change
  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Style links: active if matches hash
  const linkClass = (hash) =>
    activeHash === hash
      ? "text-yellow-300 border-b-4 rounded border-yellow-300 pb-1"
      : "hover:text-yellow-200";

  // Close menu and update hash on link click
  const handleLinkClick = (hash) => {
    setMenuOpen(false);
    // Optional: update hash without page reload
    if (window.location.hash !== hash) {
      window.history.pushState(null, null, hash);
      setActiveHash(hash);
    }
  };

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700  text-white z-50">
      <div className="w-11/12 mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer select-none flex gap-2">
          <img src="../logo.png" alt="logo" className="w-8 h-8" />
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-amber-300 text-3xl font-signature">
            Imam Hasan
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-xl font-semibold ">
          <a
            href="#home"
            className={linkClass("#home")}
            onClick={() => handleLinkClick("#home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={linkClass("#about")}
            onClick={() => handleLinkClick("#about")}
          >
            About
          </a>
          <a
            href="#skills"
            className={linkClass("#skills")}
            onClick={() => handleLinkClick("#skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={linkClass("#projects")}
            onClick={() => handleLinkClick("#projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={linkClass("#contact")}
            onClick={() => handleLinkClick("#contact")}
          >
            Contact
          </a>
        </div>

        {/* Resume Button desktop */}
        <a
          href="/resume"
          className="hidden md:inline-block bg-yellow-300 text-purple-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Resume
        </a>


        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-yellow-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 px-6 pb-6">
          <nav className="flex flex-col space-y-4 text-lg font-medium">
            <a
              href="#home"
              className={linkClass("#home")}
              onClick={() => handleLinkClick("#home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={linkClass("#about")}
              onClick={() => handleLinkClick("#about")}
            >
              About
            </a>
            <a
              href="#skills"
              className={linkClass("#skills")}
              onClick={() => handleLinkClick("#skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={linkClass("#projects")}
              onClick={() => handleLinkClick("#projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={linkClass("#contact")}
              onClick={() => handleLinkClick("#contact")}
            >
              Contact
            </a>

            {/* Resume Button mobile */}
            <a
              href="/resume"
              target="_self"
              rel="noopener noreferrer"
              className="mt-4 bg-yellow-300 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>

          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
