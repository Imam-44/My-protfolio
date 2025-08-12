import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // active link styling function
  const linkClass = (path) =>
    location.pathname === path
      ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
      : "hover:text-yellow-200";

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white shadow-lg">
      <div className="w-11/12 mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left - Brand */}
        <h1 className="text-2xl font-bold tracking-wide">MyPortfolio</h1>
        
        {/* Center - Menu */}
        <div className="space-x-6 text-lg font-medium flex">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/about" className={linkClass("/about")}>About</Link>
          <Link to="/skills" className={linkClass("/skills")}>Skills</Link>
          <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>
        
        {/* Right - Resume Button */}
        <a
          href="/resume.pdf" // এখানে তোমার Resume path দাও
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
