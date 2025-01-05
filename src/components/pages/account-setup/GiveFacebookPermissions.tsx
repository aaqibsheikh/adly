import React from 'react';

const GiveFacebookPermissions: React.FC = () => {
  const permissions = [
    {
      category: 'Lorem ipsum',
      options: [
        'Lorem ipsum dolor emit concequeter',
        'Lorem ipsum',
        'Lorem ipsum dolor concequeter',
        'Lorem ipsum',
      ],
    },
    {
      category: 'Lorem ipsum',
      options: [
        'Lorem ipsum dolor emit concequeter',
        'Lorem ipsum',
        'Lorem ipsum dolor concequeter',
        'Lorem ipsum',
      ],
    },
    {
      category: 'Lorem ipsum',
      options: [
        'Lorem ipsum dolor emit concequeter',
        'Lorem ipsum',
        'Lorem ipsum dolor concequeter',
        'Lorem ipsum',
      ],
    },
  ];

  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl max-w-2xl mx-auto">
      <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-8">
        Give Facebook Page Permissions
      </h2>
      <div className="flex flex-col items-center">
        {/* Facebook Page Information */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://via.placeholder.com/50"
            alt="Facebook Page"
            className="rounded-full w-14 h-14"
          />
          <h3 className="text-lg font-semibold text-black mt-2">Social Gathering</h3>
          <p className="text-sm text-gray-600">@socialgathering</p>
        </div>

        {/* Permissions List */}
        <div className="w-full space-y-6">
          {permissions.map((permission, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4">
              <h4 className="text-base font-semibold text-black mb-4">
                {permission.category}
              </h4>
              <div className="space-y-2">
                {permission.options.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`permission-${index}-${idx}`}
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      defaultChecked={idx === 0} // First option is checked by default
                    />
                    <label
                      htmlFor={`permission-${index}-${idx}`}
                      className="text-sm text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiveFacebookPermissions;
