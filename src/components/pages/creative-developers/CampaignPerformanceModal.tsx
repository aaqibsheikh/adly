import { Dialog, DialogPanel } from '@headlessui/react';
import React, { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  script: any; // Script passed dynamically from the parent component
  onSave?: (updatedScript: any) => void; // Callback to save updates
}

const CampaignPerformanceModal: React.FC<Props> = ({ isOpen, onClose, script, onSave }) => {
  const [currentOption, setCurrentOption] = useState(''); // Script title
  const [currentDescription, setCurrentDescription] = useState(''); // Script description

  // Update state whenever the modal opens or the script changes
  useEffect(() => {
    if (isOpen && script) {
      setCurrentOption(script.title || '');
      setCurrentDescription(script.description || '');
    }
  }, [isOpen, script]);

  const handleSave = () => {
    const updatedScript = {
      ...script,
      title: currentOption,
      description: currentDescription,
    };

    if (onSave) onSave(updatedScript);
    onClose(); // Close the modal after saving
  };

  return (
    <Dialog open={isOpen} as="div" className="relative z-[60]" onClose={onClose}>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <DialogPanel className="w-full max-w-lg bg-white rounded-lg p-6 shadow-lg">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Campaign Performance</h2>

          {/* Dropdown Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Storyboard associated with <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={currentOption}
              onChange={(e) => setCurrentOption(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>

          {/* Textarea Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={currentDescription}
              onChange={(e) => setCurrentDescription(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
              rows={6}
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
            >
              Save changes
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CampaignPerformanceModal;
