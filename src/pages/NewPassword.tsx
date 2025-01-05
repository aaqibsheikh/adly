import React from 'react';
import RightContent from 'src/components/pages/newpassword/RightContent';
import NewPasswordForm from 'src/components/pages/newpassword/NewPasswordForm';

const NewPassword: React.FC = () => {
  return (
    <div className="flex lg:h-screen lg:p-10 p-5">
      <NewPasswordForm />
      <RightContent
        image="/assets/images/new-password.png"
      />
    </div>
  );
};

export default NewPassword;
