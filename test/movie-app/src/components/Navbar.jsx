import React from "react";
import Logo from "../assets/movie.png";
import { Link } from "react-router-dom" 

const Navbar = () => {
  return (
    <div className="flex border space-x-8 item-center pl-3 py-4">
      <img className="w-[50px]" src={Logo}  alt="Movie-icon"/>
      <Link to="/" className="text-blue-500 text-xl font-bold">Home</Link>
      <Link to="/watchlist" className="text-blue-900 text-xl font-bold">Watchlist</Link>
    </div>
  );
};
export default Navbar;
