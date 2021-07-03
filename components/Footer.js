import NowPlaying from '@/components/NowPlaying';
import Link from '@/components/HeaderFooterLink';

const FooterColumn = ({ children }) => (
  <div className="flex flex-col space-y-4">{children}</div>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full bg-primary p-8">
      <NowPlaying />
      <div className="w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3 max-w-xl">
        <FooterColumn>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </FooterColumn>
        <FooterColumn>
          <Link href="https://github.com/NickCrews">GitHub</Link>
          <Link href="https://linkedin.com/in/nicholas-b-crews">LinkedIn</Link>
        </FooterColumn>
        <FooterColumn>
          <Link href="/guestbook">Guestbook</Link>
        </FooterColumn>
      </div>
    </footer>
  );
}
