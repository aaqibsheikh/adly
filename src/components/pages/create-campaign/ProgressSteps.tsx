import React from 'react';

interface Step {
  name: string;
}

const steps: Step[] = [
  { name: 'Campaign Type' },
  { name: 'Campaign Name' },
  { name: 'Target Audience' },
  { name: 'Creatives' },
  { name: 'Review' },
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
                  stepIdx < currentStep ? 'bg-black' : 'bg-gray-200' // Black for completed steps
                )}
                style={{ width: '80%', left: '-40%', borderRadius: '30px' }}
              />
            )}

            {/* Circle with Step Number */}
            <div
              className={classNames(
                'z-10 flex items-center justify-center h-10 w-10 rounded-full',
                stepIdx + 1 < currentStep
                  ? 'bg-black text-white' // Black for completed steps
                  : stepIdx + 1 === currentStep
                  ? 'bg-[#6277FF] text-white'
                  : 'bg-[#F7F5FF] text-black'
              )}
            >
              {stepIdx + 1}
            </div>

            {/* Step Name */}
            <span
              className={classNames(
                'absolute top-12 text-base font-normal text-center',
                stepIdx + 1 < currentStep ? 'text-black' : 'text-black'
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
