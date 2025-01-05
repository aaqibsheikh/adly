import React from 'react';

interface RightContentProps {
  image: string;
}

const RightContent: React.FC<RightContentProps> = ({ image }) => {
  return (
    <img src={image} className="w-1/2 lg:block hidden" />
  );
};

export default RightContent;
