import React, { ReactElement } from 'react';
import { Logo } from '../components/Logo';

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

export default function Header({
  className = '',
  children
}: HeaderProps): ReactElement {
  return (
    <header
      className={`w-full py-6 px-4 border-b border-gray-200 ${className}`}
    >
      <article className="flex max-w-[1440px] mx-auto justify-between items-center">
        <Logo />
        {children}
      </article>
    </header>
  );
}
