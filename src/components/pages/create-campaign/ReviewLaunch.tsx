import React from 'react';

interface ReviewData {
  category: string;
  industry: string;
  companyName: string;
  facebookPage: string;
  instagramPage: string;
  dailyBudget: string;
  keywords: string[];
  locations: string;
  creativeVideos: string[]; // URLs or file paths for the videos
}

const ReviewLaunch: React.FC<{ data: ReviewData }> = ({ data }) => {
  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-8">
          Review & Launch
        </h2>
        <div className="space-y-6">
          {/* Campaign Details */}
          <div>
            <p className="text-sm font-semibold text-black mb-1">
              What is the category of your campaign?
            </p>
            <p className="text-base text-gray-600">{data.category}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-black mb-1">Industry</p>
            <p className="text-base text-gray-600">{data.industry}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-black mb-1">Company name</p>
            <p className="text-base text-gray-600">{data.companyName}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-black mb-1">Facebook Page</p>
            <p className="text-base text-gray-600">{data.facebookPage}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-black mb-1">Instagram page</p>
            <p className="text-base text-gray-600">{data.instagramPage}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-black mb-1">Daily Budget</p>
            <p className="text-base text-gray-600">{data.dailyBudget}</p>
          </div>

          {/* Keywords */}
          <div>
            <p className="text-sm font-semibold text-black mb-1">
              Keywords that refer to your target audience
            </p>
            <p className="text-base text-gray-600">{data.keywords.join(', ')}</p>
          </div>

          {/* Locations */}
          <div>
            <p className="text-sm font-semibold text-black mb-1">
              Location(s) within your city you want to target
            </p>
            <p className="text-base text-gray-600">{data.locations}</p>
          </div>

          {/* Creative Videos */}
          <div>
            <p className="text-sm font-semibold text-black mb-1">Creative video</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.creativeVideos.map((video, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden border border-gray-300">
                  <img
                    src={video} // Replace with video thumbnail if available
                    alt={`Creative ${index + 1}`}
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewLaunch;
