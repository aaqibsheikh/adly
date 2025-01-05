import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm: React.FC = () => {
    const navigate = useNavigate();
  
  return (
    <div className="lg:w-1/2 w-full lg:p-8 flex flex-col items-start">
      <img src="/assets/images/logo.svg" className="cursor-pointer lg:w-auto w-24" onClick={() => navigate('/')} />
      <p className="lg:text-[36px] text-[28px] font-semibold text-black font-inter mt-8 lg:mb-6 mb-4">Sign up</p>
      <p className="text-[#4A4D4F] lg:text-xl text-base font-normal font-inter mb-6">
        Start Your Journey with Us – It All Begins Here!
      </p>
      <form className="w-full">
        <div className="flex lg:flex-row flex-col lg:items-center lg:space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-[#4A4D4F] lg:text-lg text-base font-normal mb-2">First name <span className="text-[#CC0E3C]">*</span></label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 lg:text-base text-sm font-inter font-normal outline-none"
            />
          </div>
          <div className="flex-1 lg:mt-0 mt-4">
            <label className="block text-[#4A4D4F] lg:text-lg text-base font-normal mb-2">Last name <span className="text-[#CC0E3C]">*</span></label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 lg:text-base text-sm font-inter font-normal outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-[#4A4D4F] lg:text-lg text-base font-normal mb-2">Email <span className="text-[#CC0E3C]">*</span></label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 lg:text-base text-sm font-inter font-normal outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4A4D4F] lg:text-lg text-base font-normal mb-2">Password <span className="text-[#CC0E3C]">*</span></label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 lg:text-base text-sm font-inter font-normal outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#4A4D4F] lg:text-lg text-base font-normal mb-2">Confirm password <span className="text-[#CC0E3C]">*</span></label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 lg:text-base text-sm font-inter font-normal outline-none"
          />
        </div>
        <button type="button" className="w-full bg-blue-500 text-white py-2 rounded">Sign up</button>
      </form>
      <div className="mt-4 flex items-center w-full">
        <div className="flex-1 h-px border-t border-[#00000029]"></div>
        <div className="mx-2 text-gray-500">OR</div>
        <div className="flex-1 h-px border-t border-[#00000029]"></div>
      </div>
      <button type="button" className="w-full mt-4 bg-white border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center">
        <img
          src="https://img.icons8.com/color/16/000000/google-logo.png"
          alt="Google"
          className="mr-2"
        />
        Continue with Google
      </button>
      <div className="mt-4 flex items-center justify-center space-x-2 text-black w-full text-center lg:text-lg text-sm font-semibold">
        <p>Already have an account?{' '}</p>
        <p onClick={() => navigate('/signin')} className="cursor-pointer underline underline-offset-4 text-[#6277FF]">
          Login
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
