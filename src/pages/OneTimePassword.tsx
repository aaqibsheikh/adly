import React from 'react';
import RightContent from 'src/components/pages/one-time-password/RightContent';
import OneTimePasswordForm from 'src/components/pages/one-time-password/OneTimePasswordForm';

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex lg:h-screen lg:p-10 p-5">
      <OneTimePasswordForm />
      <RightContent image="/assets/images/one-time-password.png" />
    </div>
  );
};

export default ForgotPassword;
