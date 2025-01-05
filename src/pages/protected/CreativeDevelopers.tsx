import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CampaignPerformanceModal from 'src/components/pages/creative-developers/CampaignPerformanceModal';
import ScriptGenerator from 'src/components/pages/creative-developers/ScriptGenerator';
import StoryboardCreator from 'src/components/pages/creative-developers/StoryboardCreator';
import VideoTutorials from 'src/components/pages/creative-developers/VideoTutorials';

const tabs = ['Script Generator', 'Storyboard Creator', 'Video Tutorials'];

const CreativeDevelopers: React.FC = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<string>('Script Generator');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScript, setSelectedScript] = useState<any>(null);

  // Handle Editing Script
  const handleEditScript = (script: any) => {
    setSelectedScript(script);
    setIsModalOpen(true);
  };

  // Handle Save from Modal
  const handleSaveScript = (updatedScript: any) => {
    console.log('Updated Script:', updatedScript);
    // Here you can update the scripts list or perform an API call
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'Script Generator':
        return <ScriptGenerator onEditScript={handleEditScript} />;
      case 'Storyboard Creator':
        return <StoryboardCreator />;
      case 'Video Tutorials':
        return <VideoTutorials />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center pb-4">
        <div>
          <p className="text-[28px] font-semibold text-black font-inter">Creative Developer</p>
          <p className="text-base font-inter font-normal text-[#4A4D4F]">
            Use this page to craft and refine your standout creative.
          </p>
        </div>

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
          </span>
          Generate new script
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`whitespace-nowrap text-black border-b-4 px-1 py-4 text-sm font-medium ${
                currentTab === tab
                  ? 'border-[#6277FF] bg-[#F7F5FF] rounded-tl-lg rounded-tr-lg'
                  : 'border-transparent hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>{renderTabContent()}</div>

      {/* Modal */}
      <CampaignPerformanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        script={selectedScript}
        onSave={handleSaveScript}
      />
    </div>
  );
};

export default CreativeDevelopers;
