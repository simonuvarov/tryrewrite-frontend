import React from 'react';

interface FormButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const FormButton = (props: FormButtonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-base leading-8 font-medium transition focus:outline-none  ${
        props.className || ''
      }`}
      type="submit"
    >
      {props.children}
    </button>
  );
};
