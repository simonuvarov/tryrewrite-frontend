import React from 'react'

interface FormButtonProps {
  className?: string
  children: React.ReactNode
  isLoading?: boolean
}

export const FormButton = (props: FormButtonProps) => {
  return (
    <button
      className={`rounded-md bg-blue-600 px-4 py-2 text-base font-medium leading-8 text-white transition hover:bg-blue-500 focus:outline-none disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:bg-blue-600 ${
        props.className || ''
      }`}
      type="submit"
      disabled={props.isLoading}>
      {props.children}
    </button>
  )
}
