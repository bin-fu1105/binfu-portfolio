import { navItems, profile } from "@/content/site";
import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper">
      <Container className="flex min-h-14 items-center justify-between gap-4 py-2 sm:h-16 sm:py-0">
        <a href="/" className="shrink-0 text-sm font-medium tracking-tight text-ink">
          {profile.name}
        </a>
        <nav aria-label="页面导航" className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-ink-muted sm:gap-x-8">
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
