import React, { ReactNode } from 'react';

interface MainButtonProps {
  value: ReactNode;
}

const MainButton: React.FC<MainButtonProps> = ({ value }) => {
  return (
    <button className="main__button">
      {value}
    </button>
  );
};

export default MainButton;
