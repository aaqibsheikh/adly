import React from 'react';
import RightContent from 'src/components/pages/signup/RightContent';
import SignupForm from 'src/components/pages/signup/SignupForm';

const Signup: React.FC = () => {
  return (
    <div className="flex lg:h-screen lg:p-10 p-5">
      <SignupForm />
      <RightContent
        image="/assets/images/signup.png"
      />
    </div>
  );
};

export default Signup;
