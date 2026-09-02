import { profile } from "@/content/site";
import { Container } from "./Container";
import { TextLink } from "../ui/TextLink";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-line py-10 sm:py-12"
    >
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-muted">{profile.role}</p>
        </div>
        <address className="flex flex-col gap-2 text-sm not-italic text-ink-muted sm:items-end">
          <a href={`tel:${profile.phone}`} className="transition-colors hover:text-ink">
            {profile.phone}
          </a>
          <TextLink href={`mailto:${profile.email}`}>{profile.email}</TextLink>
          <TextLink href={profile.githubUrl} external>
            GitHub：{profile.github}
          </TextLink>
        </address>
      </Container>
    </footer>
  );
}
