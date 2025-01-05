import React, { useState } from 'react';
import EditDailyBudgetModal from './EditDailyBudgetModal';

interface CampaignData {
  id: number;
  leads: string;
  campaignId: string;
  budget: string;
  results: string;
  costPerResult: string;
  totalSpent: string;
  costPerClick: string;
  creativesCount: number;
  hookRate: string;
  holdRate: string;
}

const CampaignTable: React.FC<{ data: CampaignData[] }> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const handleOpenModal = (budget: string) => {
    setSelectedBudget(budget); // Set the selected budget value
    setIsModalOpen(true); // Open the modal
  };

  const handleSaveBudget = (newBudget: string) => {
    console.log('Updated Budget:', newBudget);
    setIsModalOpen(false); // Close the modal after saving
  };

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-sm font-normal font-inter text-[#4A4D4F]">
          <tr>
            <th className="px-6 py-4">Generated leads</th>
            <th className="px-6 py-4">Daily budget</th>
            <th className="px-6 py-4">Results</th>
            <th className="px-6 py-4">Cost per result</th>
            <th className="px-6 py-4">Total spent</th>
            <th className="px-6 py-4">Cost per click</th>
            <th className="px-6 py-4">No. of creatives</th>
            <th className="px-6 py-4">Avg. hook rate</th>
            <th className="px-6 py-4">Avg. hold rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-t bg-white hover:bg-gray-50 text-black"
            >
              <td className="px-6 py-4 flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Lead Thumbnail"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-black font-medium">{item.leads}</p>
                  <p className="text-gray-400 text-xs">{item.campaignId}</p>
                </div>
              </td>
              {/* Daily Budget with onClick */}
              <td
                className="px-6 py-4 text-indigo-500 cursor-pointer"
                onClick={() => handleOpenModal(item.budget)} // Open modal on click
              >
                {item.budget}
              </td>
              <td className="px-6 py-4">{item.results}</td>
              <td className="px-6 py-4">{item.costPerResult}</td>
              <td className="px-6 py-4">{item.totalSpent}</td>
              <td className="px-6 py-4">{item.costPerClick}</td>
              <td className="px-6 py-4">
                {item.creativesCount}{' '}
                <a href="#" className="text-indigo-500 text-sm">
                  see creatives
                </a>
              </td>
              <td className="px-6 py-4">{item.hookRate}</td>
              <td className="px-6 py-4">{item.holdRate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Daily Budget Modal */}
      <EditDailyBudgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialBudget={selectedBudget || ''}
        onSave={handleSaveBudget}
      />
    </div>
  );
};

export default CampaignTable;
