import React from 'react';
import RightContent from 'src/components/pages/signin/RightContent';
import SigninForm from 'src/components/pages/signin/SigninForm';

const Signin: React.FC = () => {
  return (
    <div className="flex lg:h-screen lg:p-10 p-5">
      <SigninForm />
      <RightContent
        image="/assets/images/signin.png"
      />
    </div>
  );
};

export default Signin;
