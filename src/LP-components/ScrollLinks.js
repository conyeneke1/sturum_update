import React from "react";
import { Link as LinkScroll } from "react-scroll";

const ScrollLinks = () => {
  return (
    <ul className="hidden md:flex px-8">
      <li className="hover:text-green-500">
        <LinkScroll to="home" smooth={true} offset={50} duration={500}>
          Home
        </LinkScroll>
      </li>
      <li className="hover:text-green-500">
        <LinkScroll to="about" smooth={true} offset={50} duration={500}>
          About
        </LinkScroll>
      </li>
      <li className="hover:text-green-500">
        <LinkScroll to="features" smooth={true} offset={50} duration={500}>
          Features
        </LinkScroll>
      </li>
    </ul>
  );
};

export default ScrollLinks;
