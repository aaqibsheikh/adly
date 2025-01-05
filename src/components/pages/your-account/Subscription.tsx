import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    frequency: '/month',
    description: 'Lorem ipsum dolor sit amet consectetur. In varius donec in.',
    features: [
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
    ],
    actionText: 'Choose Plan',
    isCurrent: false,
  },
  {
    name: 'Professional',
    price: '$124',
    frequency: '/month',
    description: 'Lorem ipsum dolor sit amet consectetur. In varius donec in.',
    features: [
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
    ],
    actionText: 'Cancel Plan',
    isCurrent: true,
  },
  {
    name: 'Company',
    price: '$159',
    frequency: '/month',
    description: 'Lorem ipsum dolor sit amet consectetur. In varius donec in.',
    features: [
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
    ],
    actionText: 'Choose Plan',
    isCurrent: false,
  },
];

const Subscription: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-6 relative"
        >
          {plan.isCurrent && (
            <span className="absolute top-2 right-2 bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded">
              Current plan
            </span>
          )}
          <h3 className="text-lg font-semibold">{plan.name}</h3>
          <p className="text-3xl font-bold mt-4">
            {plan.price}
            <span className="text-sm font-normal">{plan.frequency}</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
          <ul className="mt-4 space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={`mt-6 w-full py-2 text-sm font-medium rounded ${
              plan.isCurrent
                ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
            }`}
            disabled={plan.isCurrent}
          >
            {plan.actionText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Subscription;
