import React from 'react';

const AccountSetupInformation: React.FC = () => {
  return (
    <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-10">
            Information
        </h2>
        <form className="space-y-10">
            {/* Facebook Page Login */}
            <div>
            <h3 className="text-lg font-semibold text-black mb-6">
                Facebook page login
            </h3>
            <div className="space-y-4">
                <div>
                <label
                    htmlFor="facebook-email"
                    className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
                >
                    Email or phone number
                </label>
                <input
                    type="email"
                    id="facebook-email"
                    placeholder="Enter email address or phone number"
                    className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
                />
                </div>
                <div>
                <label
                    htmlFor="facebook-password"
                    className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="facebook-password"
                    placeholder="Enter password"
                    className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
                />
                </div>
            </div>
            </div>

            {/* Instagram Login */}
            <div>
            <h3 className="text-lg font-semibold text-black mb-6">
                Instagram login
            </h3>
            <div className="space-y-4">
                <div>
                <label
                    htmlFor="instagram-email"
                    className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
                >
                    Email or phone number
                </label>
                <input
                    type="email"
                    id="instagram-email"
                    placeholder="Enter email address or phone number"
                    className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
                />
                </div>
                <div>
                <label
                    htmlFor="instagram-password"
                    className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="instagram-password"
                    placeholder="Enter password"
                    className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
                />
                </div>
            </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSetupInformation;
