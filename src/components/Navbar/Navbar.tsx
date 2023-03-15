import { ButtonOutline, ButtonTransparent } from "@looker/components";
import React from "react";
import { Nav } from "./nav-css";

const Navbar = () => {
  const logo = require("../../assets/imgs/shiba-logo.png"); //require ta from backend na nya ani

  return (
    <Nav>
      <div className="nav-head">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="Logo" className="h-full" />
          </div>
          <div className="flex justify-center items-center">
            <div className="nav-icons mr-8">
              <nav>
                <ul>
                  <li className="text-shadow-orig text-center text-3xl  font-black uppercase hover:text-orange-600 sm:text-sm sm:font-normal">
                    <a href="#">Solutions</a>
                  </li>
                  <li className="text-shadow-orig text-center text-3xl  font-black uppercase hover:text-orange-600 sm:text-sm sm:font-normal">
                    <a href="#">Platform</a>
                  </li>
                  <li className="text-shadow-orig text-center text-3xl  font-black uppercase hover:text-orange-600 sm:text-sm sm:font-normal">
                    <a href="#">Customers</a>
                  </li>
                  <li className="text-shadow-orig text-center text-3xl  font-black uppercase hover:text-orange-600 sm:text-sm sm:font-normal">
                    <a href="#">Company</a>
                  </li>
                  <li className="text-shadow-orig text-center text-3xl  font-black uppercase hover:text-orange-600 sm:text-sm sm:font-normal">
                    <a href="#">Resource</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              {/* <ButtonTransparent
                className="!mx-5 !p-4 !rounded-lg"
                size="large"
                color="neutral"
              >
                Login
              </ButtonTransparent> */}
              <ButtonOutline
                color="neutral"
                className=" !border-black !text-base !text-white !rounded-full !bg-orange-500"
                size="large"
              >
                Get Started
              </ButtonOutline>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
