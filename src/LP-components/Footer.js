import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/Sturum.png";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#080b1a] w-full h-fit py-10 px-10">
      <div className="flex justify-between items-center py-4">
        <div>
          <Link
            className="flex items-center cursor-pointer text-[#a3a3a3] text-md"
            to="home"
            smooth={true}
            offset={50}
            duration={500}
          >
            <img src={logo} alt="Logo Image" style={{ width: "50px" }} />
            <h1 className="font-bold pl-2">STURUM</h1>
          </Link>
        </div>
        <div className="flex text-2xl w-[9rem] justify-between">
          <FaFacebook className="text-[#a3a3a3]" />
          <FaTwitter className="text-[#a3a3a3]" />
          <FaInstagram className="text-[#a3a3a3]" />
        </div>
      </div>
      <div className="pt-9 md:flex md:justify-between items-center">
        <ul className="flex md:justify-start justify-start items-center font-semibold text-[1rem] text-[#a3a3a3]">
          <li className="px-0">
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className="px-0">
            <Link to="features" smooth={true} offset={50} duration={500}>
              Features
            </Link>
          </li>
        </ul>
        <p className="text-center md:pt-0 pt-[4rem] text-gray-600 text-md">
          Copyright 2023-2024 @ Sturum LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
