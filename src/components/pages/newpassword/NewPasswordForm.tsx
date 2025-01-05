import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewPasswordForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:w-1/2 w-full lg:p-8 flex flex-col items-start">
      <img src="/assets/images/logo.svg" className="cursor-pointer lg:w-auto w-24" onClick={() => navigate('/')} />
      <p className="lg:text-[36px] text-[28px] font-semibold text-black font-inter mt-8 lg:mb-6 mb-4">New password</p>
      <p className="text-[#4A4D4F] lg:text-xl text-base font-normal font-inter mb-6">
        Out with the old, in with the new—let’s get your password sorted!
      </p>
      <form className="w-full">
        <div className="mb-4">
          <label className="block text-[#4A4D4F] lg:text-lg text-base font-normal mb-2">
            Password <span className="text-[#CC0E3C]">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 lg:text-base text-sm font-inter font-normal outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#4A4D4F] lg:text-lg text-base font-normal mb-2">
            Confirm password <span className="text-[#CC0E3C]">*</span>
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 lg:text-base text-sm font-inter font-normal outline-none"
          />
        </div>
        <button type="button" className="w-full bg-blue-500 text-white lg:text-lg text-sm py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewPasswordForm;
