import React, { useEffect } from "react";
import "./NavberComponent.css";
import { IoCallOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NavberComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <nav className="container flex justify-between items-center mt-[20px] md:mt-[41px]">
        <div className="flex items-center">
          <div data-aos="fade-right">
            <img src="./img/Logo.png" alt="Logo" className="h-8 md:h-auto" />
          </div>
          <div
            className="NavText pl-4 md:pl-[65px]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Link to="#">Our Services</Link>
          </div>
        </div>
        <div className="hidden md:flex gap-6 md:gap-[33px]" data-aos="fade-up">
          <NavLink to="#" className="NavText">
            About
          </NavLink>
          <NavLink to="#" className="NavText">
            Blog&News
          </NavLink>
          <NavLink to="#" className="NavText">
            Contact
          </NavLink>
        </div>
        <div className="flex items-center" data-aos="fade-left">
          <div className="pt-2 md:pt-5">
            <NavLink to="#" className="NavText">
              Account
            </NavLink>
          </div>
          <div className="px-4 md:px-[31px] text-[#DAD8D8] pt-2 md:pt-5">l</div>
          <div className="flex gap-2 md:gap-[6px] items-center">
            <div className="text-[#B00000] pt-2 md:pt-5">
              <IoCallOutline />
            </div>
            <div className="NavText">
              <h5>+2349067322844</h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavberComponent;
