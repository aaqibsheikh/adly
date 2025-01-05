import React from 'react';
import GenderPieChart from './GenderPieChart';
import AgeRangeBarChart from './AgeRangeBarChart';

const AudienceStats: React.FC = () => {
  return (
    <>
      <div className="mt-8 mb-5">
        <p className="text-[28px] font-semibold text-black font-inter">Your Top Audiences</p>
        <p className="text-base font-inter font-normal text-[#4A4D4F]">
          See Who’s Engaging the Most with Your Campaigns.
        </p>
      </div>
      <div className="flex items-stretch space-x-4 justify-between">
        <GenderPieChart />
        <AgeRangeBarChart />
      </div>
    </>
  );
};

export default AudienceStats;
