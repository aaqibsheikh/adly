import React, { useState } from 'react';
import DeleteAccount from 'src/components/pages/your-account/DeleteAccount';
import ManageAccount from 'src/components/pages/your-account/ManageAccount';
import Subscription from 'src/components/pages/your-account/Subscription';

const tabs = [
  { name: 'Manage account', component: <ManageAccount /> },
  { name: 'Subscription', component: <Subscription /> },
  { name: 'Delete account', component: <DeleteAccount /> },
];

const YourAccount: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('Manage account');

  const currentComponent = tabs.find((tab) => tab.name === currentTab)?.component;

  return (
    <div className="">
      <h1 className="text-[28px] font-semibold text-black mb-2">Your account</h1>
      <p className="text-gray-500 mb-8">Manage your account and your subscription</p>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setCurrentTab(tab.name)}
              className={`whitespace-nowrap text-black border-b-4 px-1 py-4 text-sm font-medium ${
                currentTab === tab.name
                  ? 'border-[#6277FF] bg-[#F7F5FF] rounded-tl-lg rounded-tr-lg'
                  : 'border-transparent hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>{currentComponent}</div>
    </div>
  );
};

export default YourAccount;
