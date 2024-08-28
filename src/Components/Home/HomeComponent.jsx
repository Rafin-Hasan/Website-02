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
          <div className="" data-aos="fade-left" data-aos-duration="1000">
            <div className="flex justify-between gap-[77px]">
              <img src="./img/one.png" alt="True Cloud Pic" />
              <img src="./img/two.png" alt="True Cloud Pic" />
              <img src="./img/three.png" alt="True Cloud Pic" />
            </div>
            <div className="flex justify-between pt-[55.5px]">
              <img src="./img/four.png" alt="True Cloud Pic" />
              <img src="./img/five.png" alt="True Cloud Pic" />
              <img src="./img/six.png" alt="True Cloud Pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
