import React from 'react';

const CampaignInformation: React.FC = () => {
  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-10">
          Campaign Information
        </h2>
        <form className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="business-name"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Business name
            </label>
            <input
              type="text"
              id="business-name"
              placeholder="Enter business name"
              className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="website-url"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Website URL
            </label>
            <input
              type="url"
              id="website-url"
              className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
              placeholder="Enter website URL"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="campaign-category"
              className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
            >
              Campaign category
            </label>
            <select
              id="campaign-category"
              className="w-full px-4 py-2 border rounded-lg bg-white placeholder-grayscale-600 text-base font-inter font-normal outline-none"
            >
              <option>Select campaign category</option>
              <option>Sales</option>
              <option>Leads</option>
              <option>Brand Awareness</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignInformation;
