import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeComponent.css";

const HomeComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* ======= Premium web hosting ========== */}
      <section className="container flex justify-between">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="header w-[608px] font-bold text-[64px] text-[#2E2E2E] pt-[26px]">
            Premium Web Hosting for Your Website
          </h1>
          <p className="w-[448px] pera leading-7 text-[#808080] pt-[34px] pb-[60px]">
            Blazing fast web hosting for individuals and businesses of all sizes
            backed by 24x7x365 Support.
          </p>
          <div className="flex gap-6">
            <button
              className="bg-[#B00000] px-[13.5px] hover:px-[12.5px] py-[12px] hover:py-[11px] header text-[14px] leading-6 text-white rounded-[8px] btn"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Create an Account
            </button>
            <button
              className="bg-[#B00000] px-[13.5px] hover:px-[12.5px] py-[12px] hover:py-[11px] header text-[14px] leading-6 text-white rounded-[8px] btn"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Choose your plan
            </button>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <img src="./img/HeaderPic.png" alt="Header Pic" />
        </div>
      </section>
      {/* ======= End of Premium web hosting ========== */}

      {/* =======  True Cloud Web  Hosting ============*/}
      <section className="container mt-[79px]">
        <div
          className="flex justify-between"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <h2 className="inter font-extrabold text-[48px] text-[#18191F]">
              True Cloud Web Hosting
            </h2>
            <p className="pera w-[573px] h-[224px] flex flex-col justify-center font-normal text-[18px] leading-[32px] text-[#18191F]">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div
            className="flex flex-wrap justify-between gap-[65px] pl-[93px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              className="w-[140px] h-[30px]"
              src="./img/one.png"
              alt="True Cloud Pic"
            />
            <img
              className="w-[125px] h-[50px]"
              src="./img/two.png"
              alt="True Cloud Pic"
            />
            <img
              className="w-[125px] h-[53px]"
              src="./img/three.png"
              alt="True Cloud Pic"
            />

            <img
              className="w-[172px] h-[92px]"
              src="./img/four.png"
              alt="True Cloud Pic"
            />
            <img
              className="w-[168px] h-[56px]"
              src="./img/five.png"
              alt="True Cloud Pic"
            />
            <img
              className="w-[143px] h-[47px]"
              src="./img/six.png"
              alt="True Cloud Pic"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-center w-[252px]" data-aos="fade-down-right">
            <img className="m-auto" src="./img/icn1.png" alt="clock" />
            <h5 className="header font-bold text-[20px] pt-3 pb-1">
              99.9% Uptime
            </h5>
            <p className="header font-light text-[12px]">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div className="text-center w-[252px]" data-aos="zoom-in">
            <img className="m-auto" src="./img/icn2.png" alt="clock" />
            <h5 className="header font-bold text-[20px] pt-3 pb-1">
              Blazing Fast Web Hosting{" "}
            </h5>
            <p className="header font-light text-[12px]">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div className="text-center w-[252px]" data-aos="zoom-in">
            <img className="m-auto" src="./img/icn3.png" alt="clock" />
            <h5 className="header font-bold text-[20px] pt-3 pb-1">
              Free SSL Certificates
            </h5>
            <p className="header font-light text-[12px]">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div className="text-center w-[252px]" data-aos="fade-down-left">
            <img className="m-auto" src="./img/icn4.png" alt="clock" />
            <h5 className="header font-bold text-[20px] pt-3 pb-1">
              24x7 Friendly Support
            </h5>
            <p className="header font-light text-[12px]">
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
