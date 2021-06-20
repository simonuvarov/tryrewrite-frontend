import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { Logo } from '../components/Logo';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): ReactElement {
  return (
    <header className={`w-full max-w-[1440px] mx-auto pt-8 pb-4 ${className}`}>
      <nav className="flex justify-between">
        <Logo className="px-2" />
        <ul className="flex space-x-3 items-center">
          <li className="inline">
            <Link href="/signin">
              <a className="flex items-center px-4 py-3 leading-4 text-base rounded font-medium text-gray-500 hover:text-gray-700 transition-colors outline-none">
                Sign in
              </a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a className="flex items-center pl-4 pr-3 py-3 leading-4 bg-blue-600 hover:bg-blue-500 rounded text-base font-medium text-white transition-colors outline-none">
                <span>Sign up</span>
                <ChevronRightIcon className="h-5 w-5 ml-0.5" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
