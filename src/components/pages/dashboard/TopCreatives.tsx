import React from 'react';
import CreativeCard from './CreativeCard';

const TopCreatives: React.FC = () => {
  const creatives = [
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      stats: [
        { label: 'Amount of leads', value: '10,324' },
        { label: 'Amount of clicks', value: '1,324' },
        { label: 'Cost per lead', value: '$20' },
        { label: 'Cost per click', value: '$2' },
        { label: 'Hook rate', value: '30%' },
        { label: 'Hold rate', value: '10%' },
      ],
      detailsLink: '#',
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      stats: [
        { label: 'Amount of leads', value: '8,521' },
        { label: 'Amount of clicks', value: '1,124' },
        { label: 'Cost per lead', value: '$18' },
        { label: 'Cost per click', value: '$1.8' },
        { label: 'Hook rate', value: '28%' },
        { label: 'Hold rate', value: '12%' },
      ],
      detailsLink: '#',
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      stats: [
        { label: 'Amount of leads', value: '9,832' },
        { label: 'Amount of clicks', value: '1,514' },
        { label: 'Cost per lead', value: '$22' },
        { label: 'Cost per click', value: '$2.1' },
        { label: 'Hook rate', value: '31%' },
        { label: 'Hold rate', value: '11%' },
      ],
      detailsLink: '#',
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      stats: [
        { label: 'Amount of leads', value: '12,543' },
        { label: 'Amount of clicks', value: '1,634' },
        { label: 'Cost per lead', value: '$25' },
        { label: 'Cost per click', value: '$2.3' },
        { label: 'Hook rate', value: '33%' },
        { label: 'Hold rate', value: '13%' },
      ],
      detailsLink: '#',
    },
  ];

  return (
    <div className="space-y-6 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[28px] font-semibold text-black font-inter">Top creatives</p>
          <p className="text-base font-inter font-normal text-[#4A4D4F]">
            Your Top Creatives: Discover What’s Capturing Attention and Driving Results.
          </p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
          See all creatives
        </button>
      </div>

      {/* Creatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {creatives.map((creative, index) => (
          <CreativeCard
            key={index}
            imageSrc={creative.imageSrc}
            stats={creative.stats}
            detailsLink={creative.detailsLink}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCreatives;
