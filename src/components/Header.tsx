import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

export default function Header(): ReactElement {
  return (
    <section className="w-full">
      <div className="max-w-3xl mt-8 mb-4 mx-auto">
        <nav className="grid grid-cols-2">
          <div className="flex justify-start">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.png"
                  width={32}
                  height={32}
                  alt="logo"
                  quality={100}
                />
              </a>
            </Link>
          </div>
          <div className="flex justify-end items-center gap-4">
            <Link href="/blog">
              <a className="inline-flex justify-center items-center px-3 py-1 rounded text-gray-500 hover:bg-gray-200 text-center font-medium ">
                Blog
              </a>
            </Link>
            <Link href="#/about">
              <a className="inline-flex justify-center items-center px-3 py-1 rounded text-gray-500 hover:bg-gray-200 text-center font-medium ">
                About
              </a>
            </Link>
            <div className="h-4 border border-l rounded border-gray-200"></div>
            <Link href="#/signin">
              <a className="inline-flex justify-center items-center px-3 py-1 rounded text-gray-500 hover:bg-gray-200 text-center font-medium ">
                Sign in
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
