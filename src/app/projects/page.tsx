import type { Metadata } from "next";
import {
  CompactProjectCard,
  ExperienceProjectCard,
  FeaturedProjectCard,
  FeaturedWorkCard,
} from "@/components/home/ProjectCard";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/TextLink";
import {
  aiProjects,
  designProjects,
  projectOrder,
  roomwiseProject,
  vrProjects,
} from "@/content/site";

export const metadata: Metadata = {
  title: "全部作品｜富彬",
  description:
    "按设计基础、产品体验到 AI 产品实践排列的完整作品列表。",
};

export default function ProjectsPage() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Container>
        <header className="border-b border-line py-12 sm:py-16">
          <TextLink href="/">← 返回首页</TextLink>
          <h1 className="mt-8 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            全部作品
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
            先看设计基础与 UX / 交互，再看产品体验，最后是把 AI 融入产品的实践。
          </p>
        </header>

        <div className="min-w-0">
          {projectOrder.map((id, index) => {
            if (id === "roomwise") {
              return (
                <FeaturedWorkCard
                  key={id}
                  project={roomwiseProject}
                  index={index}
                />
              );
            }

            const design = designProjects.find((project) => project.id === id);
            if (design) {
              return (
                <CompactProjectCard
                  key={id}
                  project={design}
                  index={index}
                />
              );
            }

            const experience = vrProjects.find((project) => project.id === id);
            if (experience) {
              return (
                <ExperienceProjectCard
                  key={id}
                  project={experience}
                  index={index}
                />
              );
            }

            const ai = aiProjects.find((project) => project.id === id);
            if (ai) {
              return (
                <FeaturedProjectCard key={id} project={ai} index={index} />
              );
            }

            return null;
          })}
        </div>
      </Container>
    </main>
  );
}
