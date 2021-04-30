import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { Logo } from '../components/Logo';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): ReactElement {
  return (
    <header className={`w-full pt-8 pb-4 px-4 ${className}`}>
      <nav className="flex justify-between md:mx-auto max-w-5xl">
        <Logo className="px-2" />
        <div className="flex justify-end items-center">
          <Link href="/signin">
            <a className="flex items-center pl-4 pr-3 py-2 leading-4 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-600 hover:text-gray-700 transition-colors outline-none">
              <span>Sign in</span>
              <ChevronRightIcon className="h-5 w-5 ml-0.5" />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
