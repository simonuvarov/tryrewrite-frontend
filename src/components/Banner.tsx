import React from 'react';

interface BannerProps {
  children: React.ReactNode;
}

export const Banner = (props: BannerProps) => {
  return (
    <article className="flex bg-blue-50 border-b border-blue-100 items-center justify-center text-sm leading-5 font-medium py-3 text-blue-900">
      {props.children}
    </article>
  );
};
