import React, { ReactElement } from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): ReactElement {
  return (
    <header
      className={`w-full py-6 px-2 border-b border-gray-200 ${className}`}
    >
      <article className="flex max-w-[1440px] mx-auto justify-between items-center">
        <Logo className="px-2" />
        <nav className="flex space-x-3 items-center">
          <Button href="/signin" type="ghost" size="md">
            Sign in
          </Button>
          <Button href="/signup" type="primary" size="md">
            Sign up
          </Button>
        </nav>
      </article>
    </header>
  );
}
