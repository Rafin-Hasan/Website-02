import React from "react";
import "./HomeComponent.css";

const HomeComponent = () => {
  return (
    <>
      <section className="container flex justify-between">
        <div>
          <h1 className="header w-[608px] font-bold text-[64px] text-[#2E2E2E] pt-[26px]">
            Premium Web Hosting for Your Website
          </h1>
          <p className="w-[448px] pera leading-7 text-[#808080] pt-[34px] pb-[60px]">
            Blazing fast web hosting for individuals and businesses of all sizes
            backed by 24x7x365 Support.
          </p>
          <div className="flex gap-6">
            <button className="bg-[#B00000] px-[13.5px] hover:px-[12.5px] py-[12px] hover:py-[11px] header text-[14px] leading-6 text-white rounded-[8px] btn">
              Create an Account
            </button>
            <button className="bg-[#B00000] px-[13.5px] hover:px-[12.5px] py-[12px] hover:py-[11px] header text-[14px] leading-6 text-white rounded-[8px] btn">
              Choose your plan
            </button>
          </div>
        </div>
        <div>
          <img src="./img/HeaderPic.png" alt="Header Pic" />
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
