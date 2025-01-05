import React, { useState } from 'react';
import StoryboardCreatorsTable from './StoryboardCreatorsTable';
import Pagination from './Pagination';
import MainSupplyModal from './MainSupplyModal';

const mockData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  storyboardId: `12345${i}`,
  name: 'Lorem Ipsum',
  count: 25,
  allCount: 1234,
  type: 'Simple',
  shelfCode: '54,355',
  mainSupply: 'Lorem Ipsum',
}));

const sampleItems = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const StoryboardCreator: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSupply, setSelectedSupply] = useState<any>(null);
  const pageSize = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleMainSupplyClick = (supplyData: any) => {
    setSelectedSupply(supplyData);
    setIsModalOpen(true);
  };

  // Calculate current data based on the page
  const currentData = mockData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      {/* Modal */}
        <MainSupplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={sampleItems}
        />
      
      {/* Table Component */}
      <StoryboardCreatorsTable data={currentData} onMainSupplyClick={handleMainSupplyClick} />
      
      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalItems={mockData.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />

    </div>

    
  );
};

export default StoryboardCreator;
