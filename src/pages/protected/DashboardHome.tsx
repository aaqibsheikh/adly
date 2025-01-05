'use client';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AudienceBarChart from 'src/components/pages/dashboard/AudienceBarChart';
import AudienceStats from 'src/components/pages/dashboard/AudienceStats';
import DashboardStats from 'src/components/pages/dashboard/DashboardStats';
import TopCreatives from 'src/components/pages/dashboard/TopCreatives';

export default function DashboardHome() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <div>
          <p className="text-[28px] font-semibold text-black font-inter">Generated leads</p>
          <p className="text-base font-inter font-normal text-[#4A4D4F]">
            Your Performance Snapshot: Insights to Keep You on Track and Optimizing.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate('/dashboard/create-campaign')}
          className="bg-[#6277FF] text-white px-4 py-2 rounded-[10px] text-base font-medium flex items-center"
        >
          <span className="mr-2">+</span> Create new campaign
        </button>
      </div>

      <DashboardStats />
      <AudienceStats />
      <AudienceBarChart />
      <TopCreatives />
    </div>
  );
}
