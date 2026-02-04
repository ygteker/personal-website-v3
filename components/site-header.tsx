import { ThemeToggle } from "./theme-toggle";
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50">
      <div className="text-sm font-medium text-foreground">gunes teker</div>
      <nav className="space-x-4 text-sm">
        <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
          about
        </Link>
        <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
          projects
        </Link>
        <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
          contact
        </Link>
        <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
          blog
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

