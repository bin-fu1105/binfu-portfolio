import { AboutPreview } from "@/components/home/AboutPreview";
import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import {
  CompactProjectCard,
  FeaturedProjectCard,
} from "@/components/home/ProjectCard";
import { ProjectSection } from "@/components/home/ProjectSection";
import { Container } from "@/components/layout/Container";
import { aiProjects, designProjects } from "@/content/site";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Positioning />
        <ProjectSection id="work" title="AI 产品项目">
          <div>
            {aiProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </ProjectSection>
        <ProjectSection id="foundation" title="设计基础">
          <div className="grid gap-0 sm:grid-cols-3 sm:gap-5">
            {designProjects.map((project) => (
              <CompactProjectCard key={project.id} project={project} />
            ))}
          </div>
        </ProjectSection>
        <AboutPreview />
      </Container>
    </main>
  );
}
