import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-1/2 w-full lg:p-8 flex flex-col items-start">
      <img src="/assets/images/logo.svg" className="cursor-pointer lg:w-auto w-24" onClick={() => navigate('/')} />
      <p className="lg:text-[36px] text-[28px] font-semibold text-black font-inter mt-8 lg:mb-6 mb-4">Forgot password</p>
      <p className="text-[#4A4D4F] lg:text-xl text-base font-normal font-inter mb-6">
        Let’s Help You Regain Your Access
      </p>
      <form className="w-full">
        <div className="mb-4">
          <label className="block text-[#4A4D4F] lg:text-lg text-base font-normal mb-2">
            Email <span className="text-[#CC0E3C]">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 lg:text-base text-sm font-inter font-normal outline-none"
          />
        </div>

        <button type="button" className="w-full bg-blue-500 text-white py-2 rounded">Send</button>
      </form>

      <div className="mt-4 flex items-center justify-center  text-black w-full text-center lg:text-lg text-sm font-semibold">
        <p className="cursor-pointer underline underline-offset-4 text-[#6277FF]">Resend</p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
