import React from 'react';

const scripts = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description: `Lorem ipsum dolor sit amet consectetur. A dolor donec diam molestie magna leo rhoncus orci tincidunt. 
      Mollis quis facilisi volutpat sed at tellus laoreet. Dictumst faucibus phasellus faucibus mattis neque enim donec sollicitudin. 
      Mauris turpis fusce facilisis amet sagittis id velit. Maecenas blandit eu at viverra commodo libero vitae egestas.`,
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    description: `Lorem ipsum dolor sit amet consectetur. A dolor donec diam molestie magna leo rhoncus orci tincidunt. 
      Mollis quis facilisi volutpat sed at tellus laoreet. Dictumst faucibus phasellus faucibus mattis neque enim donec sollicitudin. 
      Mauris turpis fusce facilisis amet sagittis id velit. Maecenas blandit eu at viverra commodo libero vitae egestas.`,
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    description: `Lorem ipsum dolor sit amet consectetur. A dolor donec diam molestie magna leo rhoncus orci tincidunt. 
      Mollis quis facilisi volutpat sed at tellus laoreet. Dictumst faucibus phasellus faucibus mattis neque enim donec sollicitudin. 
      Mauris turpis fusce facilisis amet sagittis id velit. Maecenas blandit eu at viverra commodo libero vitae egestas.`,
  },
  {
    id: 4,
    title: 'Lorem Ipsum',
    description: `Lorem ipsum dolor sit amet consectetur. A dolor donec diam molestie magna leo rhoncus orci tincidunt. 
      Mollis quis facilisi volutpat sed at tellus laoreet. Dictumst faucibus phasellus faucibus mattis neque enim donec sollicitudin. 
      Mauris turpis fusce facilisis amet sagittis id velit. Maecenas blandit eu at viverra commodo libero vitae egestas.`,
  },
  {
    id: 5,
    title: 'Lorem Ipsum',
    description: `Lorem ipsum dolor sit amet consectetur. A dolor donec diam molestie magna leo rhoncus orci tincidunt. 
      Mollis quis facilisi volutpat sed at tellus laoreet. Dictumst faucibus phasellus faucibus mattis neque enim donec sollicitudin. 
      Mauris turpis fusce facilisis amet sagittis id velit. Maecenas blandit eu at viverra commodo libero vitae egestas.`,
  },
  {
    id: 6,
    title: 'Lorem Ipsum',
    description: `Lorem ipsum dolor sit amet consectetur. A dolor donec diam molestie magna leo rhoncus orci tincidunt. 
      Mollis quis facilisi volutpat sed at tellus laoreet. Dictumst faucibus phasellus faucibus mattis neque enim donec sollicitudin. 
      Mauris turpis fusce facilisis amet sagittis id velit. Maecenas blandit eu at viverra commodo libero vitae egestas.`,
  },
];


interface ScriptGeneratorProps {
  onEditScript: (script: any) => void;
}

const ScriptGenerator: React.FC<ScriptGeneratorProps> = ({ onEditScript }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {scripts.map(script => (
        <div key={script.id} className="p-6 bg-white shadow-sm border border-gray-200 rounded-lg">
          {/* Title and Options */}
          <div className="flex justify-between items-start">
            <h3 className="text-[26px] font-semibold text-black font-inter">{script.title}</h3>
            <button className="text-black">
              {/* Options Button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M4.33301 12.5C4.33301 12.7652 4.43836 13.0196 4.6259 13.2071C4.81344 13.3946 5.06779 13.5 5.33301 13.5C5.59822 13.5 5.85258 13.3946 6.04011 13.2071C6.22765 13.0196 6.33301 12.7652 6.33301 12.5C6.33301 12.2348 6.22765 11.9804 6.04011 11.7929C5.85258 11.6054 5.59822 11.5 5.33301 11.5C5.06779 11.5 4.81344 11.6054 4.6259 11.7929C4.43836 11.9804 4.33301 12.2348 4.33301 12.5ZM11.333 12.5C11.333 12.7652 11.4384 13.0196 11.6259 13.2071C11.8134 13.3946 12.0678 13.5 12.333 13.5C12.5982 13.5 12.8526 13.3946 13.0401 13.2071C13.2277 13.0196 13.333 12.7652 13.333 12.5C13.333 12.2348 13.2277 11.9804 13.0401 11.7929C12.8526 11.6054 12.5982 11.5 12.333 11.5C12.0678 11.5 11.8134 11.6054 11.6259 11.7929C11.4384 11.9804 11.333 12.2348 11.333 12.5ZM18.333 12.5C18.333 12.7652 18.4384 13.0196 18.6259 13.2071C18.8134 13.3946 19.0678 13.5 19.333 13.5C19.5982 13.5 19.8526 13.3946 20.0401 13.2071C20.2277 13.0196 20.333 12.7652 20.333 12.5C20.333 12.2348 20.2277 11.9804 20.0401 11.7929C19.8526 11.6054 19.5982 11.5 19.333 11.5C19.0678 11.5 18.8134 11.6054 18.6259 11.7929C18.4384 11.9804 18.333 12.2348 18.333 12.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-[#4A4D4F] mt-2 text-sm font-normal font-inter">{script.description}</p>

          {/* Buttons */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => onEditScript(script)}
              className="text-[#6277FF] text-sm font-normal underline underline-offset-2"
            >
              Edit script
            </button>
            <button className="bg-[#000000] text-white px-4 py-2 rounded-md text-sm font-medium">
              Go to storyboard
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScriptGenerator;