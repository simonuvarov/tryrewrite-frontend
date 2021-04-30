import React, { ReactElement } from 'react';
import { Logo } from '../components/Logo';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): ReactElement {
  return (
    <header className={`w-full pt-8 pb-4 px-4 ${className}`}>
      <nav className="flex justify-between md:mx-auto max-w-3xl">
        <Logo className="px-2" />
        <div className="flex justify-end items-center"></div>
      </nav>
    </header>
  );
}
