import React from 'react';

const ConnectFacebookToInstagram: React.FC = () => {
  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
        <div className="max-w-2xl mx-auto">
        <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-8">
            Connect Facebook page to Instagram
        </h2>
        <div className="flex flex-col items-center space-y-6 border border-[#E5E7E7] rounded-2xl p-6">
            {/* Facebook Page */}
            <div className="flex flex-col items-center">
            <img
                src="https://via.placeholder.com/50"
                alt="Facebook Page"
                className="rounded-full w-14 h-14"
            />
            <h3 className="text-lg font-semibold text-black mt-2">Social Gathering</h3>
            <p className="text-sm text-gray-600">@socialgathering</p>
            </div>

            {/* Connection Icon */}
            <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-indigo-500"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25v7.5m3.75-3.75h-7.5m11.25-7.5v15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-15A2.25 2.25 0 015.25 2.25h11.25a2.25 2.25 0 012.25 2.25z"
                />
                </svg>
            </div>
            </div>

            {/* Instagram Page */}
            <div className="flex flex-col items-center">
            <img
                src="https://via.placeholder.com/50"
                alt="Instagram Page"
                className="rounded-full w-14 h-14"
            />
            <h3 className="text-lg font-semibold text-black mt-2">Live Freely</h3>
            <p className="text-sm text-gray-600">@livefreely</p>
            </div>
        </div>

        </div>
    </div>
  );
};

export default ConnectFacebookToInstagram;
