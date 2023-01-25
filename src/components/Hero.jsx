import React from "react";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="container mx-auto relative overflow-hidden rounded-sm">
      <img
        className="h-[90vh] w-full object-cover rounded-sm"
        src={hero}
        alt=""
      />
      <div className="flex px-4 text-center flex-col justify-center items-center absolute inset-0 transition-opacity duration-200 bg-black bg-opacity-50 rounded-sm">
        <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif">
          Welcome To Smart Home
        </h1>
        <p className=" text-white font-serif lg:text-lg">
          Best E-commerce platform for buying high quality Smart Home Appliances
          at extremely affordable Price.
        </p>
        <div className="flex gap-2">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200">
            Shop Now
          </button>
          <button className="px-8 py-3 m-2 text-lg text-white border rounded-full border-cyan-400 ">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
