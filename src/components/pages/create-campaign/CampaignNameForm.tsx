import React from 'react';

const CampaignNameForm: React.FC = () => {
  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-6">
          Welcome to the Adly.ai campaign builder
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {/* Name of your campaign */}
          <div>
            <label
              htmlFor="campaign-name"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Name of your campaign <span className="text-[#CC0E3C]">*</span>
            </label>
            <input
              type="text"
              id="campaign-name"
              placeholder="Enter campaign name"
              className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            />
          </div>

          {/* Account */}
          <div>
            <label
              htmlFor="account"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Account <span className="text-[#CC0E3C]">*</span>
            </label>
            <select
              id="account"
              className="w-full px-4 py-2 border rounded-lg bg-white placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            >
              <option>Select account</option>
            </select>
          </div>

          {/* Ad account */}
          <div>
            <label
              htmlFor="ad-account"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Ad account <span className="text-[#CC0E3C]">*</span>
            </label>
            <select
              id="ad-account"
              className="w-full px-4 py-2 border rounded-lg bg-white placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            >
              <option>Select ad account</option>
            </select>
          </div>

          {/* Facebook page */}
          <div>
            <label
              htmlFor="facebook-page"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Facebook page <span className="text-[#CC0E3C]">*</span>
            </label>
            <select
              id="facebook-page"
              className="w-full px-4 py-2 border rounded-lg bg-white placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            >
              <option>Select facebook page</option>
            </select>
          </div>

          {/* Pixel */}
          <div>
            <label
              htmlFor="pixel"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Pixel <span className="text-[#CC0E3C]">*</span>
            </label>
            <select
              id="pixel"
              className="w-full px-4 py-2 border rounded-lg bg-white placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            >
              <option>Select pixel</option>
            </select>
          </div>

          {/* Special ad category */}
          <div>
            <label
              htmlFor="special-category"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Special ad category <span className="text-[#CC0E3C]">*</span>
            </label>
            <select
              id="special-category"
              className="w-full px-4 py-2 border rounded-lg bg-white placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            >
              <option>Select ad category</option>
            </select>
          </div>

          {/* Daily ad budget */}
          <div className="md:col-span-2 flex items-center gap-x-4">
            <div className="flex-grow">
              <label
                htmlFor="daily-budget"
                className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
              >
                What is your daily ad budget? <span className="text-[#CC0E3C]">*</span>
              </label>
              <input
                type="text"
                id="daily-budget"
                placeholder="$50"
                className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
              />
            </div>
            <span className="text-base font-inter font-semibold text-[#4A4D4F]">USD</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignNameForm;
