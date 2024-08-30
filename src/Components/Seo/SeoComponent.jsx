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
          {/* ====================== CLI ========================= */}
          <div
            className="w-[350px] h-[468px] absolute top-[248px] left-[254px] shadow-md rounded-lg"
            data-aos="flip-left"
          >
            <img className="pl-16" src="./img/cli.png" alt="cli" />
            <div className="px-8 flex gap-4">
              <div>
                <img
                  className="w-[16px] h-[14px]"
                  src="./img/Quote.png"
                  alt="quote"
                />
              </div>
              <div className="w-[254px]">
                <p className="inter font-normal text-[16px] leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elem
                </p>
              </div>
            </div>
            <div className="pt-6 pl-16">
              <h6 className="inter font-bold text-[18px] leading-7">
                Floyd Miles
              </h6>
              <p className="inter font-normal text-[14px] leading-6">
                Vice President, CLI
              </p>
            </div>
          </div>

          {/* ================= jpnl ========================= */}
          <div>
            <div
              className="w-[445px] h-[340px] absolute top-[104px] right-[115px] shadow-md rounded-lg "
              data-aos="flip-right"
            >
              <img
                className="pl-16 pt-[39px]"
                src="./img/jpnl1.png"
                alt="jpnl"
              />
              <div className="px-8 flex gap-4 pt-[15px]">
                <div>
                  <img
                    className="w-[16px] h-[14px]"
                    src="./img/Quote.png"
                    alt="quote"
                  />
                </div>
                <div className="w-[349px]">
                  <p className="inter font-normal text-[16px] leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                </div>
              </div>
              <div className="pt-6 pl-16">
                <h6 className="inter font-bold text-[18px] leading-7">
                  Jane Cooper
                </h6>
                <p className="inter font-normal text-[14px] leading-6">
                  CEO, JPNL
                </p>
              </div>
            </div>

            {/* ============================ Brand ==================== */}
            <div
              className="w-[350px] h-[276px] absolute top-[476px] right-[210px] shadow-md rounded-lg"
              data-aos="flip-up"
            >
              <img
                className="pl-[55px] pt-[41px]"
                src="./img/brand.png"
                alt="brand"
              />
              <div className="flex gap-4 px-8">
                <img
                  className="w-[16px] h-[14px]"
                  src="./img/Quote.png"
                  alt="quote"
                />
                <div className="w-[254px]">
                  <p className="inter font-normal text-[16px] leading-8">
                    LemonWares saved our time in Hosting my company page.
                  </p>
                </div>
              </div>
              <div className="pt-6 pl-16">
                <h6 className="inter font-bold text-[18px] leading-7">
                  Kristin Watson
                </h6>
                <p className="inter font-normal text-[14px] leading-6">
                  Co-Founder, LeeveOn Branding
                </p>
              </div>
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
