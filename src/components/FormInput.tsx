import React from 'react';
import { OnChange } from '../hooks/useInput';

interface FormInputProps {
  label: string;
  value: string;
  setValue: OnChange;
  autofocus?: boolean;
  type?: 'text' | 'email' | 'password';
  spellcheck?: boolean;
}
export const FormInput = (props: FormInputProps) => {
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
        className="block w-full px-4 py-2 border border-gray-200 rounded text-base leading-8 text-gray-700 outline-none focus:outline-none focus:ring transition-shadows transition mt-2"
        value={props.value}
        onChange={props.setValue}
        autoFocus={props.autofocus || false}
        type={props.type || 'text'}
        spellCheck={props.spellcheck || false} />
    </div>
  );
};
