import React, { useEffect } from "react";
import "./EmailComponent.css";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EmailComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="container relative mt-[106px] mb-[110px]">
        <div className="absolute pic" data-aos="fade-right">
          <img src="./img/bg.png" alt="" />
        </div>
        <div
          className="w-[1232px] h-[432px] bg-[#F7FAFE] m-auto rounded-2xl"
          data-aos="zoom-in"
        >
          <div className="flex justify-center pt-[80px] pb-[40px]">
            <h2 className="w-[900px] text-center font font-semibold text-[64px] leading-[88px] text-[#2E2E2E]">
              We're here to make your website awesome.
            </h2>
          </div>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button className="bg-[#B00000] py-[12px] w-[208px] flex gap-[9px] justify-center text-white rounded-lg font">
              <span className="pt-1">
                <FaWhatsapp />
              </span>
              <span>Get in touch with us</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailComponent;
