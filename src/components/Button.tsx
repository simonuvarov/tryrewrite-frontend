import React from 'react';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'white';
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  let styles: string;
  switch (props.type) {
    case 'primary':
      styles = 'text-white bg-blue-600 hover:bg-blue-700';
      break;
    case 'secondary':
      styles = 'text-blue-700 bg-blue-50 hover:bg-blue-100';
      break;
    case 'white':
      styles =
        'shadow-sm border border-gray-300 text-gray-700 bg-white hover:bg-gray-50';
      break;
  }

  return (
    <button
      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${styles} ${
        props.className || ''
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
