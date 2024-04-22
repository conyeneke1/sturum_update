import React, { useState } from "react";
import { FaBars, FaTimes, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Sturum.png";
import ScrollLinks from "./ScrollLinks";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <header>
      <nav className="fixed z-10 w-full h-[80px] flex items-center justify-between px-6 bg-[#fefffd] text-black-600 border-b-1 border-black shadow-md">
        <div className="flex items-center">
          <div>
            <Link className="flex items-center cursor-pointer" to="/">
              <img src={logo} alt="Logo Image" style={{ width: "50px" }} />
              <h1 className="font-bold pl-2 md:pr-6">STURUM</h1>
            </Link>
          </div>

          <ScrollLinks />
        </div>

        <div className="flex">
          <Link to="/signup">
            <button className="bg-transparent hover:bg-green-500 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded">
              Sign up
            </button>
          </Link>

          <Link to="/login">
            <button className="hidden md:flex bg-green-500 hover:bg-green-600 text-black font-bold py-2.5 px-4 rounded mr-0">
              <div className="flex content-center justify-between items-center">
                Log in
                <FaLongArrowAltRight className="ml-4" />
              </div>
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? (
            <FaBars className="text-xl" />
          ) : (
            <FaTimes className="text-xl" />
          )}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : `absolute left-0 top-0 w-full h-screen bg-[#d1ffba] flex flex-col items-center justify-center font-semibold`
          }
        >
          <li className="py-5 text-4xl hover:text-green-500">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="py-5 text-4xl hover:text-green-500">
            <Link onClick={handleClick} to="/signup">
              Sign up
            </Link>
          </li>

          <li className="py-5 text-4xl hover:text-green-500">
            <Link onClick={handleClick} to="/login">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
