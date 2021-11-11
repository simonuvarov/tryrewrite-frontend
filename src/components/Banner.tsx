import React from 'react'

interface BannerProps {
  children: React.ReactNode
}

export const Banner = (props: BannerProps) => {
  return (
    <article className="flex items-center justify-center border-b border-blue-100 bg-blue-50 py-3 px-2 text-sm font-medium leading-5 text-blue-700">
      {props.children}
    </article>
  )
}
