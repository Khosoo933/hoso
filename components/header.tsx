import Link from "next/link";

interface HeaderProps {
  title: string;
  
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="site-header">
 

      <Link className="logo" href="/">{ title }</Link>
      <nav className="main-nav">
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}