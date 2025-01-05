import React from 'react';

const DeleteAccount: React.FC = () => {
  const handleDeleteAccount = () => {
    // Handle account deletion logic here
    console.log('Account deletion initiated');
    alert('Your account deletion request has been initiated.');
  };

  return (
    <div className="p-6 border border-[#E5E7E7] rounded-lg max-w-2xl">
      <div className="flex items-start space-x-4">
        {/* Warning Icon */}
        <div className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
          >
            <path
              d="M37.5042 10.0374C35.1156 5.70368 28.887 5.70368 26.4985 10.0374L5.37159 48.3185C3.06074 52.5083 6.08931 57.6397 10.8756 57.6397H53.1202C57.9042 57.6397 60.9373 52.5083 58.6242 48.3185L37.5042 10.0374ZM34.2859 46.2157C34.2859 46.8219 34.0451 47.4033 33.6164 47.8319C33.1878 48.2606 32.6064 48.5014 32.0002 48.5014C31.394 48.5014 30.8126 48.2606 30.3839 47.8319C29.9553 47.4033 29.7145 46.8219 29.7145 46.2157C29.7145 45.6095 29.9553 45.0281 30.3839 44.5994C30.8126 44.1708 31.394 43.93 32.0002 43.93C32.6064 43.93 33.1878 44.1708 33.6164 44.5994C34.0451 45.0281 34.2859 45.6095 34.2859 46.2157ZM30.2859 38.7871V23.93C30.2859 23.4753 30.4665 23.0393 30.788 22.7178C31.1095 22.3963 31.5455 22.2157 32.0002 22.2157C32.4548 22.2157 32.8909 22.3963 33.2123 22.7178C33.5338 23.0393 33.7144 23.4753 33.7144 23.93V38.7871C33.7144 39.2418 33.5338 39.6778 33.2123 39.9993C32.8909 40.3208 32.4548 40.5014 32.0002 40.5014C31.5455 40.5014 31.1095 40.3208 30.788 39.9993C30.4665 39.6778 30.2859 39.2418 30.2859 38.7871Z"
              fill="#CC0E3C"
            />
          </svg>
        </div>
        {/* Delete Warning */}
        <div>
          <h2 className="text-lg font-semibold text-black">Delete account</h2>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. In ac elit morbi erat sed purus mauris augue
            risus. Gravida.
          </p>
        </div>
      </div>
      {/* Delete Button */}
      <div className="mt-8">
        <button
          onClick={handleDeleteAccount}
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          Delete account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
