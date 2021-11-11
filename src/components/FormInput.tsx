import React from 'react'
import { OnChange } from '../hooks/useInput'

interface FormInputProps {
  label: string
  value: string
  onChange: OnChange
  type?: 'text' | 'email' | 'password'
  spellcheck?: boolean
  error?: string
  touched?: boolean
  onBlur: (event: React.FormEvent) => void
}
export const FormInput = (props: FormInputProps) => {
  const shouldShowError = props.error && props.touched
  return (
    <div>
      <label
        htmlFor={props.label.toLowerCase()}
        className="block text-sm font-medium text-gray-600">
        {props.label}
      </label>
      <input
        id={props.label.toLowerCase()}
        className={`block w-full rounded-md border border-gray-200 px-4 py-2 text-base leading-8 text-gray-700 outline-none focus:outline-none focus:ring ${
          shouldShowError
            ? 'border-red-400 focus:ring-red-300'
            : 'focus:border-blue-400'
        } transition-shadows mt-2 transition`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type || 'text'}
        spellCheck={props.spellcheck || false}
      />
      {shouldShowError && (
        <label
          htmlFor={props.label.toLowerCase()}
          className="ml-1 mt-1 block text-sm text-red-600">
          {props.error}
        </label>
      )}
    </div>
  )
}
