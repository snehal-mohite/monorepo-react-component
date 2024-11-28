import React from 'react';
import { ButtonProps } from './interfaces/button-interface';

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  className = '',
}) => {
  const baseStyles = 'px-4 py-2 font-semibold rounded-lg';
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-300 text-black hover:bg-gray-400';

  const combinedStyles =`${baseStyles} ${variantStyles} ${className}`.trim();

  return (
    <button className={combinedStyles} onClick={onClick}>
      {label}
    </button>
  );
};