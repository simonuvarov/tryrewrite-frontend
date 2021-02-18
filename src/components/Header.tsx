import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

export function Header(): ReactElement {
  return (
    <section className="w-full">
      <div className="max-w-3xl my-4 mx-auto">
        <nav>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={40}
                height={40}
                alt="logo"
                quality={100}
              />
            </a>
          </Link>
        </nav>
      </div>
    </section>
  );
}
