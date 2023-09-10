import React from "react";

import Logos from "../assets/logo.png";
import logoybee from "../assets/sagegreenbeelogo-removebg.png";
import { Link } from "react-scroll";
import {CgWebsite} from "react-icons/cg"

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/*logo*/}
          <a href="#">
            <img src={logoybee} alt="" className="w-[200px] h-[100px]" />
          </a>
          {/* button */}
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
