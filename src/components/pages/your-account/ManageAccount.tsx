import React from 'react';

const ManageAccount: React.FC = () => {
  return (
    <form className="space-y-6 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label
            htmlFor="first-name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="first-name"
            defaultValue="John"
            className="w-full px-4 py-2 border rounded-lg text-sm"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="last-name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="last-name"
            defaultValue="Doe"
            className="w-full px-4 py-2 border rounded-lg text-sm"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          defaultValue="johndoe@gmail.com"
          className="w-full px-4 py-2 border rounded-lg text-sm"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Change password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          defaultValue="**********"
          className="w-full px-4 py-2 border rounded-lg text-sm"
        />
      </div>

      {/* Update Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium"
      >
        Update
      </button>
    </form>
  );
};

export default ManageAccount;
