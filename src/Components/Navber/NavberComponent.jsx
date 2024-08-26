import React from "react";
import "./NavberComponent.css";
import { Link, NavLink } from "react-router-dom";

const NavberComponent = () => {
  return (
    <>
      <div className="container flex justify-between mt-[41px]">
        <div className="flex ">
          <div className="">
            <img src="./img/Logo.png" alt="Logo" />
          </div>
          <div className="NavText pl-[65px]">
            <Link to="#">Our Services</Link>
          </div>
        </div>
        <div className=" flex gap-[33px]">
          <NavLink to="#" className="NavText">
            About
          </NavLink>
          <NavLink to="#" className="NavText">
            About
          </NavLink>
          <NavLink to="#" className="NavText">
            About
          </NavLink>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default NavberComponent;
