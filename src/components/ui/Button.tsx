
import React from 'react';

const Button: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};

export default Button;
