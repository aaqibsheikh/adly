import React from 'react';
import RightContent from 'src/components/pages/forgot-password/RightContent';
import ForgotPasswordForm from 'src/components/pages/forgot-password/ForgotPasswordForm';

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex lg:h-screen lg:p-10 p-5">
      <ForgotPasswordForm />
      <RightContent image="/assets/images/forgot-password.png" />
    </div>
  );
};

export default ForgotPassword;
