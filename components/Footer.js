import NowPlaying from '@/components/NowPlaying';
import Link from '@/components/HeaderFooterLink';

const FooterColumn = ({ children }) => (
  <div className="flex flex-col space-y-4">{children}</div>
);

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="p-8 mx-auto max-w-xl">
        <NowPlaying />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
          <FooterColumn>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </FooterColumn>
          <FooterColumn>
            <Link href="https://github.com/NickCrews">GitHub</Link>
            <Link href="https://linkedin.com/in/nicholas-b-crews">
              LinkedIn
            </Link>
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
}
