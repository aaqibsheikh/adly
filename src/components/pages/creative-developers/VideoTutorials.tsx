import React from 'react';

const tutorials = [
  {
    id: 1,
    title: 'How to build a good creative for your business?',
    description: 'Learn hooks, payoffs and call to actions',
    videoThumbnail: 'https://via.placeholder.com/600x400', // Replace with actual video thumbnail
  },
  {
    id: 2,
    title: 'How to film narration part',
    description: '',
    videoThumbnail: 'https://via.placeholder.com/600x400', // Replace with actual video thumbnail
  },
  {
    id: 3,
    title: 'What do I capture on video and how?',
    description: '',
    videoThumbnail: 'https://via.placeholder.com/600x400', // Replace with actual video thumbnail
  },
  {
    id: 4,
    title: 'How to edit it all together?',
    description: '',
    videoThumbnail: 'https://via.placeholder.com/600x400', // Replace with actual video thumbnail
  },
];

const VideoTutorials: React.FC = () => {
  return (
    <div className="space-y-6 mt-6">
      {tutorials.map((tutorial) => (
        <div
          key={tutorial.id}
          className="border border-gray-200 rounded-lg shadow-sm bg-white p-4"
        >
          <h3 className="text-lg font-semibold text-black">{tutorial.title}</h3>
          {tutorial.description && (
            <p className="text-sm text-gray-500 mt-1">{tutorial.description}</p>
          )}
          <div className="mt-4">
            <img
              src={tutorial.videoThumbnail}
              alt={tutorial.title}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoTutorials;
