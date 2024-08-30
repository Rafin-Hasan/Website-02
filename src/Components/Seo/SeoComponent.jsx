import React from "react";

const SeoComponent = () => {
  return (
    <>
      <section className="container relative">
        <div className="pl-16">
          <img className="pic absolute" src="./img/qute.png" alt="" />
          <div className="pt-[56px] pl-[90px]">
            <h2 className="inter w-[456px] font-extrabold text-[48px] leading-[64px]">
              Real Stories from Real Customers
            </h2>
            <p className="inter font-normal text-[18px] leading-8 pt-2">
              Get inspired by these stories.
            </p>
          </div>
        </div>
        <div className="flex pb-[64px]">
          <div className="w-[350px] h-[468px] absolute top-[248px] left-[254px] shadow-md rounded-lg">
            d
          </div>
          <div>
            <div className="w-[445px] h-[340px] absolute top-[104px] right-[115px] shadow-md rounded-lg ">
              a
            </div>
            <div className="w-[350px] h-[276px] absolute top-[476px] right-[210px] shadow-md rounded-lg">
              v
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-[553px]">
        <div
          className="flex justify-between"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <h2 className="inter font-extrabold text-[48px] text-[#18191F]">
              We serve over 100 Nigerian Websites
            </h2>
            <p className="inter w-[573px] flex flex-col justify-center font-normal text-[18px] leading-[32px] text-[#18191F]">
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div
            className="flex flex-wrap justify-between gap-[65px] "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              className="w-[120px] h-[120px]"
              src="./img/jpnl2.png"
              alt="True Cloud Pic"
            />
            <img
              className="w-[120px] h-[120px]"
              src="./img/korane.png"
              alt="True Cloud Pic"
            />
            <img
              className="w-[120px] h-[120px]"
              src="./img/Nadine.png"
              alt="True Cloud Pic"
            />

            <img
              className="w-[120px] h-[120px]"
              src="./img/brand2.png"
              alt="True Cloud Pic"
            />
            <img
              className="w-[120px] h-[120px]"
              src="./img/glass.png"
              alt="True Cloud Pic"
            />
            <img
              className="w-[120px] h-[120px]"
              src="./img/cli.png"
              alt="True Cloud Pic"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoComponent;
