import React from 'react';

interface StoryboardData {
  id: number;
  storyboardId: string;
  name: string;
  count: number;
  allCount: number;
  type: string;
  shelfCode: string;
  mainSupply: string;
}

interface Props {
  data: StoryboardData[];
  onMainSupplyClick: (supplyData: StoryboardData) => void;
}

const StoryboardCreatorsTable: React.FC<Props> = ({ data, onMainSupplyClick }) => {
  return (
    <div className="overflow-x-auto border rounded-lg mt-4">
      <table className="min-w-full text-sm text-left text-gray-500">
        {/* Table Header */}
        <thead className="text-sm font-medium font-inter text-[#4A4D4F] bg-[#F7F5FF]">
          <tr>
            <th className="px-6 py-4">Image</th>
            <th className="px-6 py-4">Storyboard ID</th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Count</th>
            <th className="px-6 py-4">All count</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Shelf code</th>
            <th className="px-6 py-4">Main supply</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="border-t bg-white hover:bg-gray-50 text-black">
              {/* Image */}
              <td className="px-6 py-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Thumbnail"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              {/* Storyboard ID */}
              <td className="px-6 py-4">{item.storyboardId}</td>
              {/* Name */}
              <td className="px-6 py-4">{item.name}</td>
              {/* Count */}
              <td className="px-6 py-4">{item.count}</td>
              {/* All Count */}
              <td className="px-6 py-4">{item.allCount}</td>
              {/* Type */}
              <td className="px-6 py-4">{item.type}</td>
              {/* Shelf Code */}
              <td className="px-6 py-4">{item.shelfCode}</td>
              {/* Main Supply */}
              <td
                onClick={() => onMainSupplyClick(item)}
                className="px-6 py-4 text-indigo-500 cursor-pointer"
              >
                {item.mainSupply}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoryboardCreatorsTable;
