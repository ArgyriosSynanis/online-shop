import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  bgColor?: 'primary' | 'secondary' | 'transparent';
  textSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl';
  hasSpace?: boolean;
}

const Button = ({
  children,
  onClick,
  bgColor = 'primary',
  textSize = 'text-md',
  hasSpace = true,
}: ButtonProps) => {
  const bg =
    bgColor === 'primary'
      ? 'bg-primary hover:bg-secondary text-white'
      : bgColor === 'secondary'
      ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
      : 'bg-transparent text-indigo-600 hover:text-indigo-500';
  return (
    <button
      onClick={onClick}
      className={`${bg} ${textSize} ${
        hasSpace && 'px-6 py-2'
      } focus:outline-none poppins rounded-md transform transition duration-300 hover:scale-105 flex space-x-2 items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
