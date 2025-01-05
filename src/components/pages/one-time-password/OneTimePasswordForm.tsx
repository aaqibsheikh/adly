import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OneTimePasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(5).fill('')); // Array for 6 digits

  // Handle input change for OTP fields
  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a value is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle backspace to move to the previous input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="lg:w-1/2 w-full lg:p-8 flex flex-col items-start">
      <img src="/assets/images/logo.svg" className="cursor-pointer lg:w-auto w-24" onClick={() => navigate('/')} />
      <p className="lg:text-[36px] text-[28px] font-semibold text-black font-inter mt-8 lg:mb-6 mb-4">One-Time Password</p>
      <p className="text-[#4A4D4F] lg:text-xl text-base font-normal font-inter mb-6">
        2FA’s a hassle, we know—but it’s for your safety! Check your email for the code.
      </p>
      <form className="w-full">
        <div className="mb-6 flex items-center justify-between">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-[48px] h-[48px] border border-grayscale-400 rounded-lg text-center text-xl font-inter font-semibold outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button type="button" className="w-full bg-blue-500 text-white py-2 rounded-lg lg:text-lg text-sm font-semibold">Verify</button>
      </form>

      <div className="mt-4 flex items-center justify-center text-black w-full text-center lg:text-lg text-sm font-semibold">
        <p className="cursor-pointer underline underline-offset-4 lg:text-lg text-sm text-[#6277FF]">Resend</p>
      </div>
    </div>
  );
};

export default OneTimePasswordForm;
