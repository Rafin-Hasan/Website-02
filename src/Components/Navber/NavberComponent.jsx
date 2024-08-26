import React from "react";
import "./NavberComponent.css";
import { IoCallOutline } from "react-icons/io5";
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
            Blog&News
          </NavLink>
          <NavLink to="#" className="NavText">
            Contact
          </NavLink>
        </div>
        <div className=" flex ">
          <div className="pt-5">
            <NavLink to="#" className="NavText">
              Account
            </NavLink>
          </div>
          <div className="px-[31px] text-[#DAD8D8] pt-5">l</div>
          <div className="flex gap-[6px]">
            <div className="text-[#B00000] pt-5">
              <IoCallOutline />
            </div>
            <div className="NavText">
              <h5>+2349067322844</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavberComponent;
