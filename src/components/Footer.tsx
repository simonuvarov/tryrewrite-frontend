import Link from 'next/link';

interface FooterProps {
  classname?: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={`py-10 flex justify-center ${props.classname || ''}`}>
      <nav className="space-x-4">
        <Link href="/terms">
          <a className="text-sm leading-5 font-medium text-gray-400 hover:text-gray-500 transition-colors">
            Terms of Service
          </a>
        </Link>
        <Link href="/privacy">
          <a className="text-sm leading-5 font-medium text-gray-400 hover:text-gray-500 transition-colors">
            Privacy Policy
          </a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
