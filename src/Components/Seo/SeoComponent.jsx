import React from "react";

const SeoComponent = () => {
  return (
    <div className="bg-white py-12 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            <span className="text-gray-500 text-6xl mr-2">“</span>
            Real Stories from Real Customers
          </h2>
        </div>
        <p className="text-center text-gray-600 mb-12">
          Get inspired by these stories.
        </p>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Testimonial */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40x40"
                alt="CLI Logo"
                className="h-10 w-10 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Floyd Miles
                </h3>
                <p className="text-gray-500 text-sm">Vice President, CLI</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo.”
            </p>
          </div>

          {/* Second Testimonial */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40x40"
                alt="JPNL Logo"
                className="h-10 w-10 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Jane Cooper
                </h3>
                <p className="text-gray-500 text-sm">CEO, JPNL</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo.”
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold text-gray-800">
            We serve over 100 Nigerian Websites
          </h3>
          <p className="text-gray-600 mt-4 mb-8">
            Connect LemonWares with your favourite tools that you use daily and
            keep things on track.
          </p>
          <div className="flex justify-center gap-4">
            <img
              src="https://via.placeholder.com/80x40"
              alt="Some Brand Logo"
              className="h-8 w-auto"
            />
            <img
              src="https://via.placeholder.com/80x40"
              alt="Another Brand Logo"
              className="h-8 w-auto"
            />
            <img
              src="https://via.placeholder.com/80x40"
              alt="Another Brand Logo"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoComponent;
