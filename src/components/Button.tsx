import Link from 'next/link'
import React from 'react'

interface BaseProps {
  type: 'primary' | 'secondary' | 'white' | 'ghost'
  size: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  className?: string
  id?: string
}

interface LinkProps extends BaseProps {
  href: string
}

interface ButtonProps extends BaseProps {
  onClick: () => void
}

const isButtonProps = (
  object: LinkProps | ButtonProps
): object is ButtonProps => {
  return 'onClick' in object
}

export const Button = (props: LinkProps | ButtonProps) => {
  const styles = [
    'inline-flex',
    'items-center',
    'rounded-md',
    'focus:outline-none',
    'transition'
  ]

  switch (props.type) {
    case 'primary':
      styles.push('text-white', 'bg-blue-600', 'hover:bg-blue-700', 'shadow-sm')
      break
    case 'secondary':
      styles.push('text-blue-600', 'bg-blue-50', 'hover:text-blue-700')
      break
    case 'white':
      styles.push(
        'border',
        'border-gray-300',
        'text-gray-700',
        'bg-white',
        'hover:bg-gray-50',
        'shadow-sm'
      )
      break
    case 'ghost':
      styles.push('text-gray-500 hover:text-gray-600 bg-transparent')
      break
  }

  switch (props.size) {
    case 'sm':
      styles.push('text-sm', 'leading-5', 'font-medium', 'px-4', 'py-2')
      break
    case 'md':
      styles.push('text-base', 'leading-6', 'font-medium', 'px-4', 'py-2')
      break
    case 'lg':
      styles.push('text-base', 'leading-6', 'font-medium', 'px-6', 'py-3')
      break
    case 'xl':
      styles.push('text-xl', 'leading-7', 'font-medium', 'px-6', 'py-4')
      break
  }

  if (props.className) styles.push(props.className)

  if (isButtonProps(props))
    return (
      <button
        className={styles.join(' ')}
        onClick={props.onClick}
        id={props.id}>
        {props.children}
      </button>
    )
  else
    return (
      <Link href={props.href} className={styles.join(' ')}>
        {props.children}
      </Link>
    )
}
