import React from 'react';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'white';
  size: 'small' | 'medium';
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  let styles: string;
  switch (props.type) {
    case 'primary':
      styles = 'text-white bg-blue-600 hover:bg-blue-700 shadow-sm';
      break;
    case 'secondary':
      styles = 'text-blue-600 bg-blue-50 hover:text-blue-700';
      break;
    case 'white':
      styles =
        'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm';
      break;
  }

  let sizeStyles: string;
  switch (props.size) {
    case 'small':
      sizeStyles = 'text-sm font-medium';
      break;
    case 'medium':
      sizeStyles = 'text-base font-medium';
      break;
  }

  return (
    <button
      className={`inline-flex items-center px-4 py-2 rounded-md focus:outline-none  ${styles} ${sizeStyles} ${
        props.className || ''
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
