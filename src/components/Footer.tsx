import Link from 'next/link'

interface FooterProps {
  classname?: string
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={`flex justify-center py-10 ${props.classname || ''}`}>
      <nav className="space-x-4">
        <Link
          href="/terms"
          className="text-sm font-medium leading-5 text-gray-400 transition-colors hover:text-gray-500">
          Terms of Service
        </Link>
        <Link
          href="/privacy"
          className="text-sm font-medium leading-5 text-gray-400 transition-colors hover:text-gray-500">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
