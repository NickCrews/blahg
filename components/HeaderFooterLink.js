import Link from 'next/link';

export default function HeaderFooterLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <a className="px-1 sm:px-4 text-gray-100 hover:text-gray-400 transition">
        {children}
      </a>
    </Link>
  );
}
