import { AboutPreview } from "@/components/home/AboutPreview";
import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { FeaturedWorkCard } from "@/components/home/ProjectCard";
import { ProjectSection } from "@/components/home/ProjectSection";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/TextLink";
import { featuredWorks } from "@/content/site";

export default function Home() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Container>
        <Hero />
        <Positioning />
        <ProjectSection id="work" title="精选作品">
          <div>
            {featuredWorks.map((project, index) => (
              <FeaturedWorkCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
          <p className="mt-10 text-sm">
            <TextLink href="/projects">查看全部作品</TextLink>
          </p>
        </ProjectSection>
        <AboutPreview />
      </Container>
    </main>
  );
}
