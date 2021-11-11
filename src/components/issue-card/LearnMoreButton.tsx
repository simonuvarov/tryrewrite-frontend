import { ChevronRightIcon } from '@heroicons/react/solid'

interface LearnMoreButtonProps {
  href: string
}
export const LearnMoreButton = (props: LearnMoreButtonProps) => {
  return (
    <a
      href={props.href}
      className="mt-5 flex items-center text-gray-400 transition-all hover:text-gray-500"
      target="_blank"
      rel="noopener noreferrer">
      <span className="text-sm font-medium leading-4">Learn more</span>
      <ChevronRightIcon className="h-6 w-6" />
    </a>
  )
}
