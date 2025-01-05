import React from 'react';

interface Step {
  name: string;
}

const steps: Step[] = [
  { name: 'Account Setup' },
  { name: 'Information' },
  { name: 'Connect Facebook page to Instagram' },
  { name: 'Give Facebook page Permissions' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ProgressSteps: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  return (
    <nav aria-label="Progress" className="h-[80px]">
      <ol className="flex items-center justify-between w-full">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className="relative flex-1 flex items-center justify-center"
          >
            {/* Connector Line */}
            {stepIdx > 0 && (
              <div
                className={classNames(
                  'absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1',
                  stepIdx < currentStep ? 'bg-blue-500' : 'bg-gray-200' // Blue for completed steps
                )}
                style={{ width: '80%', left: '-40%', borderRadius: '30px' }}
              />
            )}

            {/* Circle with Step Number */}
            <div
              className={classNames(
                'z-10 flex items-center justify-center h-10 w-10 rounded-full',
                stepIdx + 1 < currentStep
                  ? 'bg-blue-500 text-white' // Blue for completed steps
                  : stepIdx + 1 === currentStep
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-500'
              )}
            >
              {stepIdx + 1}
            </div>

            {/* Step Name */}
            <span
              className={classNames(
                'absolute top-12 text-sm font-medium text-center',
                stepIdx + 1 < currentStep ? 'text-black' : 'text-gray-500'
              )}
            >
              {step.name}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressSteps;
