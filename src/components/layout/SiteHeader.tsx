import { navItems, profile } from "@/content/site";
import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <a href="#top" className="text-sm font-medium tracking-tight text-ink">
          {profile.name}
        </a>
        <nav aria-label="页面导航" className="flex items-center gap-5 text-sm text-ink-muted sm:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
