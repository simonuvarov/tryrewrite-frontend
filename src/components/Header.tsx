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
          <div className="flex justify-end items-center">
            <Link href="#/signin">
              <a className="inline-flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-6 py-2 leading-4 rounded-full text-gray-500 hover:text-gray-600 text-center text-sm font-medium ">
                Sign in
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
