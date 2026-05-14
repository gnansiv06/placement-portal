import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur text-white">

      <h1 className="text-2xl font-bold">
        PlacePrep AI
      </h1>

      <div className="flex gap-6">

        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About</Link>

      </div>
    </nav>
  );
}

export default Navbar;