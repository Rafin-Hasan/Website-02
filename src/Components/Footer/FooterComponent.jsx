import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <div className="bg-[#B00000] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-start">
        {/* Logo and description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className=" w-[121px] flex items-center mb-4">
            <img
              src="./img/Logo2.png"
              alt="LemonWares Logo"
              className="h-8 w-auto"
            />
          </div>
          <p className=" w-[296px] inter font-normal text-[16px] leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem
          </p>
        </div>

        {/* Service Links */}
        <div className="w-full md:w-1/6 mb-6 md:mb-0">
          <h4 className="font-bold inter text-[16px] leading-6 mb-2">
            Service
          </h4>
          <ul className="inter font-normal text-[16px] leading-8">
            <li className="pt-6">Domain</li>
            <li className="pt-6">Shared Hosting</li>
            <li className="pt-6">Cloud Hosting</li>
            <li className="pt-6">Private Hosting</li>
          </ul>
        </div>

        {/* Hosting Links */}
        <div className="w-full md:w-1/6 mb-6 md:mb-0">
          <h4 className="font-bold inter text-[16px] leading-6 mb-2">
            Hosting
          </h4>
          <ul className="inter font-normal text-[16px] leading-8">
            <li className="pt-6">Cheap Hosting</li>
            <li className="pt-6">Hosting Wordpress</li>
            <li className="pt-6">Email Hosting</li>
            <li className="pt-6">Hosting Unlimited</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/6 mb-6 md:mb-0">
          <h4 className="font-bold inter text-[16px] leading-6 mb-2">
            Company
          </h4>
          <ul className="inter font-normal text-[16px] leading-8">
            <li className="pt-6">About</li>
            <li className="pt-6">Career</li>
            <li className="pt-6">Contact Us</li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="w-full md:w-1/6">
          <h4 className="font-bold inter text-[16px] leading-6 mb-2">Help</h4>
          <ul className="inter font-normal text-[16px] leading-8">
            <li className="pt-6">FAQ</li>
            <li className="pt-6">Help support</li>
          </ul>
        </div>

        {/* Footer bottom line */}
        <div className="w-full flex justify-between items-center border-t border-red-700 pt-4 mt-4">
          <span className="inter font-normal text-[16px] leading-8">
            Built by Jeremiah with ❤ in Lagos. Copyright 2021
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
