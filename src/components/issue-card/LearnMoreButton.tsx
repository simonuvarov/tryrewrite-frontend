import { ChevronRightIcon } from '@heroicons/react/24/solid'

interface LearnMoreButtonProps {
  href: string
}
export const LearnMoreButton = (props: LearnMoreButtonProps) => {
  return (
    <a
      href={props.href}
      className="mt-4 flex items-center text-gray-400 transition-all hover:text-gray-500 2xl:mt-5"
      target="_blank"
      rel="noopener noreferrer">
      <span className="text-sm font-medium leading-4">Learn more</span>
      <ChevronRightIcon className="h-4 w-4 " />
    </a>
  )
}
