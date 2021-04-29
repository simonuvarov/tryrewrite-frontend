import Link from 'next/link';
import React from 'react';
import { joinClassNames } from '../lib/joinClassNames';

interface LogoProps {
  className?: string;
}

export const Logo = (props: LogoProps) => {
  return (
    <div className={joinClassNames(props.className || '')}>
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="App Logo"
          className="h-6 w-auto cursor-pointer"
        />
      </Link>
    </div>
  );
};
