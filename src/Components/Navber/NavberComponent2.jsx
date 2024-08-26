import React from "react";
import { NavLink } from "react-router-dom";
import "./NavberComponent.css";

const NavberComponent2 = () => {
  return (
    <>
      <div className="container w-[248px] flex gap-[18px] mt-[60px] ">
        <NavLink to="#" className="NavText">
          Hosting
        </NavLink>
        <NavLink to="#" className="NavText">
          Domain
        </NavLink>
        <NavLink to="#" className="NavText">
          SEO
        </NavLink>
        <NavLink to="#" className="NavText">
          Email
        </NavLink>
      </div>
    </>
  );
};

export default NavberComponent2;
