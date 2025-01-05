import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pricing from 'src/components/pages/home/Pricing';
import PricingMobile from 'src/components/pages/home/PricingMobile';
import TestimonialCarousel from 'src/components/pages/home/Testimonial';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:w-[1317px] lg:mx-auto lg:pt-10 pt-5 lg:pb-20 pb-0 lg:px-0 px-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <img
            src="/assets/images/logo.svg"
            className="cursor-pointer lg:h-auto h-8"
            onClick={() => navigate('/')}
          />

          <svg
            className="lg:hidden block"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M4 23.1666H28M4 16.5H28M4 9.83331H28"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="lg:flex hidden items-center space-x-32">
            <div className="flex items-center space-x-20">
              <p className="text-[22px] font-normal text-grayscale-800 cursor-pointer font-inter">
                About
              </p>
              <p className="text-[22px] font-normal text-grayscale-800 cursor-pointer font-inter">
                Testimonial
              </p>
              <p className="text-[22px] font-normal text-grayscale-800 cursor-pointer font-inter">
                Contact
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => navigate('/signin')}
                className="px-6 py-3 rounded-lg cursor-pointer text-grayscale-100 bg-black text-lg font-medium font-inter w-[154px]"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate('/signup')}
                type="button"
                className="px-6 py-3 rounded-lg cursor-pointer text-grayscale-100 bg-[#6277FF] text-lg font-medium font-inter w-[154px]"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="mt-24 relative lg:block hidden">
          <div className="flex flex-col absolute top-[32%] left-[10%]">
            <p className="font-normal text-[40px] text-white font-inter leading-tight">
              Lorem ipsum dolor sit <br /> amet consectetur.{' '}
            </p>
            <p className="font-normal text-lg text-grayscale-400 font-inter my-5">
              Lorem morbi et tellus non lorem purus mauris eu <br /> consequat.{' '}
            </p>
            <button
              type="button"
              className="px-4 py-2 rounded-lg cursor-pointer text-grayscale-100 bg-[#6277FF] text-xs font-medium font-inter w-[124px]"
            >
              Lorem ispum
            </button>
          </div>
          <img src="/assets/images/banner.png" className="" />
        </div>
        <img src="/assets/images/home1.png" className="lg:hidden block mt-10" />

        {/* Banner2 */}
        <div className="mt-24 relative w-full lg:block hidden">
          <div className="flex flex-col w-full items-center justify-center pt-20 absolute">
            <p className="font-bold text-[34px] text-grayscale-100 font-inter">Apply Cases</p>
            <p className="font-normal text-lg text-grayscale-400 font-inter mt-4">
              Lorem ipsum dolor sit amet consectetur. Amet porta malesuada nunc <br /> pretium vitae
              quis enim eros. Turpis tincidunt euismod.
            </p>
            <button
              type="button"
              className="px-6 py-3 rounded-lg cursor-pointer text-grayscale-100 mt-6 bg-[#6277FF] text-lg font-medium font-inter w-[200px]"
            >
              Lorem ispum
            </button>
          </div>
          <img src="/assets/images/banner2.png" className="" />
        </div>
        <img src="/assets/images/home2.png" className="lg:hidden block mt-10" />


        {/* Testimonials */}

        <TestimonialCarousel />
        <Pricing />
        <PricingMobile />
      </div>

      {/* Footer */}
      <div
        className="lg:h-[100px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/footer.png')", // Replace with your footer background image path
        }}
      >
        <div className="lg:w-[1317px] lg:mx-auto flex items-center justify-between py-6 lg:px-0 px-4">
          {/* Logo */}
          <img
            src="/assets/images/footer-logo.png"
            onClick={() => navigate('/')}
            alt="Logo"
            className="lg:h-12 h-8 cursor-pointer"
          />

          {/* Navigation Links */}
          <div className="flex items-center lg:space-x-16 space-x-8">
            <p className="text-white lg:text-[22px] text-sm font-normal cursor-pointer font-inter">
              About
            </p>
            <p className="text-white lg:text-[22px] text-sm font-normal cursor-pointer font-inter">
              Testimonial
            </p>
            <p className="text-white lg:text-[22px] text-sm font-normal cursor-pointer font-inter">
              Contact
            </p>
          </div>

          {/* Sign In Button */}
          <div className="lg:block hidden">
            <button
              type="button"
              className="px-6 py-2 rounded-lg bg-white text-black text-[18px] font-medium font-inter shadow-md hover:bg-gray-200 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-4 space-x-2">
        <p className="font-inter lg:text-lg text-sm lg:font-medium font-normal text-black">
          Copyright 2024
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M10.08 11.6496C10.13 11.3196 10.24 11.0296 10.38 10.7796C10.52 10.5296 10.72 10.3196 10.97 10.1596C11.21 10.0096 11.51 9.93955 11.88 9.92955C12.11 9.93955 12.32 9.97955 12.51 10.0596C12.71 10.1496 12.89 10.2696 13.03 10.4196C13.17 10.5696 13.28 10.7496 13.37 10.9496C13.46 11.1496 13.5 11.3696 13.51 11.5896H15.3C15.28 11.1196 15.19 10.6896 15.02 10.2996C14.85 9.90955 14.62 9.56955 14.32 9.28955C14.02 9.00955 13.66 8.78955 13.24 8.62955C12.82 8.46955 12.36 8.39955 11.85 8.39955C11.2 8.39955 10.63 8.50955 10.15 8.73955C9.67 8.96955 9.27 9.26955 8.95 9.65955C8.63 10.0496 8.39 10.4996 8.24 11.0196C8.09 11.5396 8 12.0796 8 12.6596V12.9296C8 13.5096 8.08 14.0496 8.23 14.5696C8.38 15.0896 8.62 15.5396 8.94 15.9196C9.26 16.2996 9.66 16.6096 10.14 16.8296C10.62 17.0496 11.19 17.1695 11.84 17.1695C12.31 17.1695 12.75 17.0896 13.16 16.9396C13.57 16.7896 13.93 16.5796 14.24 16.3096C14.55 16.0396 14.8 15.7296 14.98 15.3696C15.16 15.0096 15.27 14.6296 15.28 14.2196H13.49C13.48 14.4296 13.43 14.6196 13.34 14.7996C13.25 14.9796 13.13 15.1296 12.98 15.2596C12.83 15.3896 12.66 15.4896 12.46 15.5596C12.27 15.6296 12.07 15.6496 11.86 15.6596C11.5 15.6496 11.2 15.5796 10.97 15.4296C10.72 15.2696 10.52 15.0596 10.38 14.8096C10.24 14.5596 10.13 14.2596 10.08 13.9296C10.03 13.5996 10 13.2596 10 12.9296V12.6596C10 12.3096 10.03 11.9796 10.08 11.6496ZM12 2.78955C6.48 2.78955 2 7.26955 2 12.7896C2 18.3096 6.48 22.7896 12 22.7896C17.52 22.7896 22 18.3096 22 12.7896C22 7.26955 17.52 2.78955 12 2.78955ZM12 20.7896C7.59 20.7896 4 17.1996 4 12.7896C4 8.37955 7.59 4.78955 12 4.78955C16.41 4.78955 20 8.37955 20 12.7896C20 17.1996 16.41 20.7896 12 20.7896Z"
            fill="black"
          />
        </svg>
      </div>
    </>
  );
};

export default Home;
