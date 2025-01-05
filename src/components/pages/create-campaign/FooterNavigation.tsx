import React from 'react';

const FooterNavigation: React.FC<{
  currentStep: number;
  totalSteps: number;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit: () => void; // Add handleSubmit prop
}> = ({ currentStep, totalSteps, handleNext, handleBack, handleSubmit }) => {
  return (
    <div className="flex justify-between mt-8 max-w-2xl mx-auto space-x-3">
      <button
        type="button"
        className={`bg-[#00000014] font-inter text-lg font-medium text-black px-4 py-2 rounded-lg flex-1 ${
          currentStep === 1 ? 'cursor-not-allowed opacity-50' : ''
        }`}
        onClick={handleBack}
        disabled={currentStep === 1}
      >
        Back
      </button>
      {currentStep === totalSteps ? (
        <button
          type="button"
          className="bg-[#6277FF] font-inter text-lg font-medium text-white px-4 py-2 rounded-lg flex-1"
          onClick={handleSubmit} // Call handleSubmit on click
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          className={`bg-[#6277FF] font-inter text-lg font-medium text-white px-4 py-2 rounded-lg flex-1 ${
            currentStep === totalSteps ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default FooterNavigation;
