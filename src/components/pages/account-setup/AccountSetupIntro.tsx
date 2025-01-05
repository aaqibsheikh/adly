import React from 'react';

interface SetupStep {
  title: string;
  videoUrl: string;
}

const setupSteps: SetupStep[] = [
  {
    title: 'Setup business account',
    videoUrl: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Setup Facebook page',
    videoUrl: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Setup Ad Account',
    videoUrl: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Setup dataset',
    videoUrl: 'https://via.placeholder.com/600x400',
  },
];

const AccountSetupIntro: React.FC = () => {
  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
      <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-10">
        Account Setup
      </h2>
      <div className="space-y-6">
        {setupSteps.map((step, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">{step.title}</h3>
            <div className="relative">
              <img
                src={step.videoUrl}
                alt={step.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-black bg-opacity-50 text-white rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSetupIntro;
