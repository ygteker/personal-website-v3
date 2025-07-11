import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50">
      <div className="text-sm font-medium text-foreground">gunes teker</div>
      <nav className="space-x-4 text-sm">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          about
        </a>
        <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
          projects
        </a>
        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
          contact
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}

