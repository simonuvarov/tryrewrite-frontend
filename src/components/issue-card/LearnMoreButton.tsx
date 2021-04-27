import { ChevronRightIcon } from '@heroicons/react/solid';

interface LearnMoreButtonProps {
  href: string;
}
export const LearnMoreButton = (props: LearnMoreButtonProps) => {
  return (
    <a
      href={props.href}
      className="flex items-center mt-5 text-gray-400 hover:text-gray-500 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-sm leading-4 font-medium">Learn more</span>
      <ChevronRightIcon className="h-6 w-6" />
    </a>
  );
};
