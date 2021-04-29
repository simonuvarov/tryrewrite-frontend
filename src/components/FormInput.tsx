import React from 'react';
import { OnChange } from '../hooks/useInput';

interface FormInputProps {
  label: string;
  value: string;
  onChange: OnChange;
  autofocus?: boolean;
  type?: 'text' | 'email' | 'password';
  spellcheck?: boolean;
  error?: string;
  touched?: boolean;
  onBlur: (event: React.FormEvent) => void;
}
export const FormInput = (props: FormInputProps) => {
  const shouldShowError = props.error && props.touched;
  return (
    <div>
      <label
        htmlFor={props.label.toLowerCase()}
        className="block text-sm text-gray-600 font-medium"
      >
        {props.label}
      </label>
      <input
        id={props.label.toLowerCase()}
        className={`block w-full px-4 py-2 border border-gray-200 rounded-md text-base leading-8 text-gray-700 outline-none focus:outline-none focus:ring ${
          shouldShowError
            ? 'focus:ring-red-300 border-red-400'
            : 'focus:border-blue-400'
        } transition-shadows transition mt-2`}
        value={props.value}
        onChange={props.onChange}
        autoFocus={props.autofocus || false}
        onBlur={props.onBlur}
        type={props.type || 'text'}
        spellCheck={props.spellcheck || false}
      />
      {shouldShowError && (
        <label
          htmlFor={props.label.toLowerCase()}
          className="block text-red-600 text-sm ml-1 mt-1"
        >
          {props.error}
        </label>
      )}
    </div>
  );
};
