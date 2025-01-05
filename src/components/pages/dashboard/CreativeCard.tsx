import React from 'react';

interface CreativeCardProps {
  imageSrc: string;
  stats: { label: string; value: string }[];
  detailsLink: string;
}

const CreativeCard: React.FC<CreativeCardProps> = ({ imageSrc, stats, detailsLink }) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-lg bg-white shadow-sm overflow-hidden">
      {/* Video/Image Section */}
      <div className="relative w-full md:w-1/2">
        <img src={imageSrc} alt="Creative preview" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-5.197-3.3A1 1 0 008 8.737v6.526a1 1 0 001.555.832l5.197-3.3a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col p-4 space-y-4 w-full md:w-1/2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm font-semibold text-black font-inter border border-[#00000029] rounded-[10px] px-4 py-5"
          >
            <span>{stat.label}</span>
            <span className="font-normal text-[#4A4D4F]">{stat.value}</span>
          </div>
        ))}
        <a
          href={detailsLink}
          className="text-blue-500 text-sm underline underline-offset-2 font-medium"
        >
          View details
        </a>
      </div>
    </div>
  );
};

export default CreativeCard;
