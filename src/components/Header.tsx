import Link from 'next/link';
import { ReactElement } from 'react';

export default function Header(): ReactElement {
  return (
    <section className="w-full">
      <div className="max-w-3xl mt-8 mb-4 mx-auto">
        <nav className="grid grid-cols-2">
          <div className="flex justify-start">
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
              <a className="inline-flex justify-center items-center px-3 py-1 rounded text-gray-500 hover:bg-gray-200 text-center font-medium ">
                Blog
              </a>
            </Link>
            <Link href="#/about">
              <a className="ml-2 inline-flex justify-center items-center px-3 py-1 rounded text-gray-500 hover:bg-gray-200 text-center font-medium ">
                About
              </a>
            </Link>
            <div className="ml-2 h-4 border border-l rounded border-gray-200"></div>
            <Link href="#/signin">
              <a className="ml-2 inline-flex justify-center items-center px-3 py-1 rounded text-gray-500 hover:bg-gray-200 text-center font-medium ">
                Sign in
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
