import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavberComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NavberComponent2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <nav className="container">
        <div
          className="w-full md:w-[248px] flex flex-col md:flex-row gap-4 md:gap-[18px] mt-[20px] md:mt-[60px]"
          data-aos="fade-up"
        >
          <NavLink to="#" className="NavText2">
            Hosting
          </NavLink>
          <NavLink to="#" className="NavText2">
            Domain
          </NavLink>
          <NavLink to="#" className="NavText2">
            SEO
          </NavLink>
          <NavLink to="#" className="NavText2">
            Email
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavberComponent2;
