import React, { useState, useEffect } from "react";
import "./DomainComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { TiTick } from "react-icons/ti";

const DomainComponent = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isYearly, isPremium]);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  const selectBasic = () => {
    setIsPremium(false);
  };

  const selectPremium = () => {
    setIsPremium(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen mt-[133px] mb-[105px]">
      <h1
        className="text-[50px] font-semibold leading-[60px] text-center mb-4 font w-[650px] "
        data-aos="fade-down"
      >
        Ready to get started with Lemon Wares?
      </h1>
      <p
        className="text-[25px] leading-[25px] font text-black text-center mb-[57px] mt-[38px]"
        data-aos="fade-up"
      >
        Choose the package that suits you
      </p>

      <div
        className="flex items-center justify-center mb-10"
        data-aos="zoom-in"
      >
        <span className="mr-4 text-[25px] leading-[25px] font text-black font-normal">
          Monthly
        </span>
        <div
          className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
            isYearly ? "bg-red-500" : "bg-gray-300"
          }`}
          onClick={togglePlan}
        >
          <div
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
              isYearly ? "transform translate-x-8" : ""
            }`}
          />
        </div>
        <span className="ml-4 text-[25px] leading-[25px] font text-black font-normal">
          Yearly
        </span>
        {isYearly && (
          <span className="ml-4 bg-yellow-300 text-black py-1 px-2 rounded-full text-sm">
            20% Discount
          </span>
        )}
      </div>

      <div className="flex items-center justify-center mb-10">
        <div className="flex">
          <button
            onClick={selectBasic}
            className={`px-8 py-3 border-b-4 font-semibold text-[30px] transition-colors duration-300 ${
              !isPremium
                ? "border-red-500 text-black"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
            data-aos="fade-right"
          >
            Basic
          </button>
          <button
            onClick={selectPremium}
            className={`px-8 py-3 border-b-4 font-semibold text-[30px] transition-colors duration-300 ${
              isPremium
                ? "border-red-500 text-black"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
            data-aos="fade-left"
          >
            Premium
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl ">
        {/* Starter Plan */}
        <div
          className="border rounded-[15px] p-8 bg-white shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-down-right"
        >
          <h3 className="text-[28px] font-semibold mb-3">
            {isPremium ? "Premium Starter" : "Starter"}
          </h3>
          <p className="text-[14px] text-black mb-7">
            Get all your customers in-vat conversions with one central
            dashboard.
          </p>
          <div className="text-4xl font-bold mb-3">
            $
            {isPremium
              ? isYearly
                ? "5.00"
                : "6.50"
              : isYearly
              ? "2.80"
              : "3.50"}
            <p className="text-sm font-normal"> per month</p>
          </div>
          <button className="w-full py-[9px] hover:py-[7px] px-[56px] hover:px-[54px] font-semibold leading-[32px] font plan text-white rounded-[12px] mt-6 ">
            Choose this Plan
          </button>
          <ul className="text-[16px] font-semibold font2 text-[#808080] mt-6 space-y-3 my-[15px]">
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              20B SSD
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              10GB Bandwidth
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              10 Email Accounts
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Unlimited Databases
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              4 Subdomains
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Parked Domain
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              2 Websites
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Free SSL
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Softaculous
            </li>
            {isPremium && (
              <>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  Daily Backups
                </li>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  24/7 Support
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Standard Plan */}
        <div
          className="border rounded-[15px] p-8 bg-white shadow-lg transform hover:translate-y-2 transition-all duration-300 hover:scale-125 hover:shadow-2xl"
          data-aos="fade-down-right"
        >
          <h3 className="text-[28px] font-semibold mb-3">
            {isPremium ? "Premium Standard" : "Standard"}
          </h3>
          <p className="text-[14px] text-black mb-7">
            Get all your customers in-vat conversions with one central
            dashboard.
          </p>
          <div className="text-4xl font-bold mb-3">
            $
            {isPremium
              ? isYearly
                ? "7.50"
                : "9.00"
              : isYearly
              ? "4.20"
              : "5.00"}
            <p className="text-sm font-normal"> per month</p>
          </div>
          <button className="w-full py-[9px] hover:py-[7px] px-[56px] hover:px-[54px] font-semibold leading-[32px] font plan text-white rounded-[12px] mt-6 ">
            Choose this Plan
          </button>
          <ul className="text-[16px] font-semibold font2 text-[#808080] mt-6 space-y-3 my-[15px]">
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              20B SSD
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              10GB Bandwidth
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              15 Email Accounts
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Unlimited Databases
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              4 Subdomains
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Parked Domain
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              2 Websites
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Free SSL
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Softaculous
            </li>
            {isPremium && (
              <>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  Daily Backups
                </li>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  24/7 Support
                </li>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  Advanced Security
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Suprem Plan */}
        <div
          className="border rounded-[15px] p-8 bg-white shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-down-right"
        >
          <h3 className="text-[28px] font-semibold mb-3">
            {isPremium ? "Premium Suprem" : "Suprem"}
          </h3>
          <p className="text-[14px] text-black mb-7">
            Get all your customers in-vat conversions with one central
            dashboard.
          </p>
          <div className="text-4xl font-bold mb-3">
            $
            {isPremium
              ? isYearly
                ? "10.00"
                : "12.00"
              : isYearly
              ? "7.00"
              : "8.50"}
            <p className="text-[14px] leading-[14px] font-normal"> per month</p>
          </div>
          <button className="w-full py-[9px] hover:py-[7px] px-[56px] hover:px-[54px] font-semibold leading-[32px] font plan text-white rounded-[12px] mt-6 ">
            Choose this Plan
          </button>
          <ul className="text-[16px] font-semibold font2 text-[#808080] mt-6 space-y-3 my-[15px]">
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              20B SSD
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              10GB Bandwidth
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              15 Email Accounts
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Unlimited Databases
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              4 Subdomains
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Parked Domain
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              2 Websites
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Free SSL
            </li>
            <li className="flex gap-6">
              <span className="pt-1">
                <TiTick />
              </span>
              Softaculous
            </li>
            {isPremium && (
              <>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  Daily Backups
                </li>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  24/7 Support
                </li>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  Advanced Security
                </li>
                <li className="flex gap-6">
                  <span className="pt-1">
                    <TiTick />
                  </span>
                  Priority Support
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DomainComponent;
