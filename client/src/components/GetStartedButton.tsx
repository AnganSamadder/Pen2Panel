"use client";

import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  const buttonClasses = `
    bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-7 rounded-full 
    border border-white border-opacity-50 absolute top-1/2 left-1/2 
    transform -translate-x-1/2 translate-y-1/2 z-30 mt-4
  `;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
