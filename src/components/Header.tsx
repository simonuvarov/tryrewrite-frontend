import React, { ReactElement } from 'react'

interface HeaderProps {
  className?: string
  children: React.ReactNode
}

export default function Header({
  className = '',
  children
}: HeaderProps): ReactElement {
  return (
    <header
      className={`w-full border-b border-gray-200 py-6 px-4 ${className}`}>
      <article className="mx-auto flex max-w-[1200px] items-center justify-between">
        {children}
      </article>
    </header>
  )
}
