import React from "react";
import Logo from "../movie.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center px-3 py-3 font-serif">
      <img
        className="w-[100px] hover:scale-110 transition-transform duration-300"
        src={Logo}
        alt=""
      />
      <h1 className="text-2xl font-bold tracking-wide "> MoviewFlix</h1>

      <div className="flex space-x-7 text-lg">
        <Link
          to="/"
          className="text-purple-700 transition-colors duration-300 text-xl font-bold"
        >
          Movies
        </Link>
        <Link
          to="/watchlist"
          className="text-purple-700 transition-colors duration-300 text-xl font-bold"
        >
          Watchlist
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
