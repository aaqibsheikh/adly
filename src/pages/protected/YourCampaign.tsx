import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CampaignTable from 'src/components/pages/your-campaign/CampaignTable';
import Pagination from 'src/components/pages/your-campaign/Pagination';

const mockData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    leads: `Campaign ${index + 1}`,
    campaignId: `${Math.floor(10000 + Math.random() * 90000)}`, // Random 5-digit campaign ID
    budget: `$${(Math.random() * 5000 + 1000).toFixed(2)}`, // Random budget between $1,000 and $6,000
    results: `$${(Math.random() * 20000 + 1000).toFixed(2)}`, // Random results between $1,000 and $21,000
    costPerResult: `$${(Math.random() * 50 + 1).toFixed(2)}`, // Random cost per result between $1 and $50
    totalSpent: `$${(Math.random() * 20000 + 500).toFixed(2)}`, // Random total spent between $500 and $20,500
    costPerClick: `${(Math.random() * 3 + 1).toFixed(2)}`, // Random cost per click between $1 and $4
    creativesCount: Math.floor(Math.random() * 12) + 1, // Random creatives count between 1 and 12
    hookRate: `${(Math.random() * 100).toFixed(2)}%`, // Random hook rate percentage
    holdRate: `${(Math.random() * 100).toFixed(2)}%`, // Random hold rate percentage
  }));
  

const YourCampaign: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentData = mockData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="">
      <div className="flex justify-between items-center pb-4">
        <div>
          <p className="text-[28px] font-semibold text-black font-inter">Your Campaign</p>
          <p className="text-base font-inter font-normal text-[#4A4D4F]">
            Your Campaigns at a Glance: Review All Your Campaigns and Their Results in One Easy
            View.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => navigate('/dashboard/create-campaign')}
            className="bg-[#00000014] text-black px-4 py-2 rounded-[10px] text-base font-medium flex items-center"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path d="M14.1 3.9V1.125H12.9V7.875H14.1V5.1H16.875V3.9H14.1Z" fill="black" />
                <path d="M7.875 14.1H16.875V12.9H7.875V14.1Z" fill="black" />
                <path d="M1.125 14.1H3.9V16.875H5.1V10.125H3.9V12.9H1.125V14.1Z" fill="black" />
                <path d="M1.125 5.1H10.125V3.9H1.125V5.1Z" fill="black" />
              </svg>
            </span>{' '}
            Filters
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/create-campaign')}
            className="bg-[#6277FF] text-white px-4 py-2 rounded-[10px] text-base font-medium flex items-center"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5999 3.15039V8.40039H14.8499V9.60039H9.5999V14.8504H8.3999V9.60039H3.1499V8.40039H8.3999V3.15039H9.5999Z"
                  fill="white"
                />
              </svg>
            </span>{' '}
            Create new campaign
          </button>
        </div>
      </div>

      <CampaignTable data={currentData} />
      <Pagination
        currentPage={currentPage}
        totalItems={mockData.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default YourCampaign;
