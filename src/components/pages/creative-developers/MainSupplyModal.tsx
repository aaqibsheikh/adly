import { Dialog, DialogPanel } from '@headlessui/react';
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: { id: number; image: string; description: string }[]; // Array of items to display
}

const MainSupplyModal: React.FC<Props> = ({ isOpen, onClose, items }) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-[60]" onClose={onClose}>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <DialogPanel className="w-full max-w-4xl bg-white rounded-lg p-6 shadow-lg">
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
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Main Supply</h2>

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-white border rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="Supply Item"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination or Other Controls */}
          <div className="mt-4 flex justify-center">
            <button
              className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
              onClick={() => console.log('Load more items or pagination logic here')}
            >
              Load More
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MainSupplyModal;
