import React, { useState } from 'react';
import FooterNavigation from 'src/components/pages/create-campaign/FooterNavigation';
import ProgressSteps from 'src/components/pages/account-setup/ProgressSteps';
import AccountSetupIntro from 'src/components/pages/account-setup/AccountSetupIntro';
import AccountSetupInformation from 'src/components/pages/account-setup/AccountSetupInformation';
import ConnectFacebookToInstagram from 'src/components/pages/account-setup/ConnectFacebookToInstagram';
import GiveFacebookPermissions from 'src/components/pages/account-setup/GiveFacebookPermissions';

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
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (showProductServiceForm) {
      // Go back to the initial Target Audience form
      setShowProductServiceForm(false);
    } else {
      setCurrentStep(prev => Math.max(1, prev - 1));
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
      {currentStep === 1 && <AccountSetupIntro />}
      {currentStep === 2 && <AccountSetupInformation />}
      {currentStep === 3 && <ConnectFacebookToInstagram />}
      {currentStep === 4 && <GiveFacebookPermissions />}

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
