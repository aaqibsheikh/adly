import React, { useState } from 'react';
import CampaignInformation from 'src/components/pages/create-campaign/CampaignInformation';
import CampaignNameForm from 'src/components/pages/create-campaign/CampaignNameForm';
import CategorySelection from 'src/components/pages/create-campaign/CategorySelection';
import FooterNavigation from 'src/components/pages/create-campaign/FooterNavigation';
import ProgressSteps from 'src/components/pages/create-campaign/ProgressSteps';
import ReviewLaunch from 'src/components/pages/create-campaign/ReviewLaunch';
import TargetAudienceForm from 'src/components/pages/create-campaign/TargetAudienceForm';
import UploadCreativeForm from 'src/components/pages/create-campaign/UploadCreativeForm';

export default function CreateCampaign() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showProductServiceForm, setShowProductServiceForm] = useState(false);

  const totalSteps = 5;

  // Placeholder data
  const [campaignData, setCampaignData] = useState({
    category: '',
    name: '',
    account: '',
    keywords: [],
    location: '',
    creativeFiles: [],
    dailyBudget: '',
  });


  const handleNext = () => {
    if (currentStep === 3 && !showProductServiceForm) {
      // Show the product/service form when moving from the initial Target Audience form
      setShowProductServiceForm(true);
    } else {
      // Move to the next step if product/service form is already shown
      setShowProductServiceForm(false);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (showProductServiceForm) {
      // Go back to the initial Target Audience form
      setShowProductServiceForm(false);
    } else {
      setCurrentStep((prev) => Math.max(1, prev - 1));
    }
  };



  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submit-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(campaignData),
      });

      if (response.ok) {
        alert('Campaign submitted successfully!');
      } else {
        alert('Failed to submit campaign.');
      }
    } catch (error) {
      console.error('Error submitting campaign:', error);
      alert('An error occurred while submitting the campaign.');
    }
  };

  return (
    <>
      <ProgressSteps currentStep={currentStep} />
      {currentStep === 1 && <><CategorySelection /><CampaignInformation /></>}
      {currentStep === 2 && <CampaignInformation />}
      {currentStep === 3 && !showProductServiceForm && <TargetAudienceForm />}
      {currentStep === 3 && showProductServiceForm && (
        <div className="my-8 p-6 border border-[#E5E7E7] rounded-2xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[28px] text-center font-semibold font-inter text-black mb-10">
              Now tell us about your product(s) / service(s)
            </h2>
            <form className="space-y-6">
              {/* Services Input */}
              <div>
                <label
                  htmlFor="services"
                  className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
                >
                  What product(s) / service(s) do you offer?
                </label>
                <input
                  type="text"
                  id="services"
                  placeholder="Enter services"
                  className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
                  required
                />
              </div>

              {/* Advantages Input */}
              <div>
                <label
                  htmlFor="advantages"
                  className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
                >
                  Please talk about any competitive advantage(s) you have
                </label>
                <input
                  type="text"
                  id="advantages"
                  placeholder="Enter advantages"
                  className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
                  required
                />
              </div>

              {/* Offers Input */}
              <div>
                <label
                  htmlFor="offers"
                  className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
                >
                  Do you provide any offers? If so, what are they and for what period?
                </label>
                <input
                  type="text"
                  id="offers"
                  placeholder="Enter offers"
                  className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
                  required
                />
              </div>

              {/* Explanation Input */}
              <div>
                <label
                  htmlFor="explanation"
                  className="block text-[#4A4D4F] text-base font-normal font-inter mb-2"
                >
                  Please give a short explanation of the services, the customer problems, and how you solve it.
                </label>
                <textarea
                  id="explanation"
                  placeholder="Write explanation"
                  className="w-full px-4 py-2 border rounded-lg placeholder-grayscale-600 text-base font-inter font-normal outline-none"
                  rows={4}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {currentStep === 4 && <UploadCreativeForm />}
      {currentStep === 5 && (
        <ReviewLaunch
          data={{
            category: 'Lorem ipsum',
            industry: 'Campaign 1',
            companyName: 'xxxxx',
            facebookPage: '(555) 123-4567',
            instagramPage: 'johndoe@yourmail.com',
            dailyBudget: '$$$',
            keywords: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
            locations: 'New York',
            creativeVideos: ['/assets/video1.jpg', '/assets/video2.jpg', '/assets/video3.jpg'],
          }}
        />
      )}
      {/* Footer Navigation */}
      <FooterNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={handleSubmit} // Pass the handleSubmit function
      />
    </>
  );
}
