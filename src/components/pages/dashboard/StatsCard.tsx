import React from 'react';
import GraphLine from './GraphLine';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col border border-[#E5E7E7] rounded-xl p-5 bg-white w-full max-w-[300px]">
      <div className="bg-[#F2F6FF] rounded-md w-fit">{icon}</div>
      <div className="mt-2">
        <p className="text-sm font-normal font-inter text-[#4A4D4F]">{title}</p>
      </div>
      <div className="flex items-center justify-between w-full space-x-2">
        <p className="text-[26px] font-semibold text-black font-inter">{value}</p>
        <GraphLine />
      </div>
    </div>
  );
};

export default StatsCard;
