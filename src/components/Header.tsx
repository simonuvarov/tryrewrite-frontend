import Link from 'next/link';
import { ReactElement } from 'react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps): ReactElement {
  return (
    <header className={`w-full pt-8 pb-4 px-4 ${className}`}>
      <nav className="flex justify-between md:mx-auto max-w-3xl">
        <div className="flex justify-start flex-shrink-0">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="App Logo"
              className="w-8 h-8 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <Link href="/blog">
            <a className="inline-flex justify-center items-center px-4 py-2 rounded text-gray-500 hover:bg-gray-200 text-center font-medium ">
              Blog
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
