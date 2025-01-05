import React from 'react';

const TargetAudienceForm: React.FC = () => {
  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-10">
          Tell us about your target audience
        </h2>
        <form className="space-y-6">
          {/* Keywords Input */}
          <div>
            <label
              htmlFor="keywords"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Enter 3 - 5 keywords that refer to your target audience
            </label>
            <input
              type="text"
              id="keywords"
              placeholder="Enter keywords"
              className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            />
          </div>

          {/* Location Input */}
          <div>
            <label
              htmlFor="location"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              What location(s) would you like to target?
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter location"
              className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TargetAudienceForm;
