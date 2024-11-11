import ProjectCard from '@/components/ProjectCard'
import { Button } from "@/components/ui/button"
<<<<<<< HEAD

const projects = [
  {
    title: "我的博客",
    description: "即本站。一个使用 NextJS + Tailwind CSS + shadcn/ui 搭建的博客。",
    link: "/projects/project1",
    tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    image: "/images/projects/project1.png",
    imageUrl: "/images/projects/project1.png"
  },
  {
    title: "flowLog",
    description: "flowLog 是一个用于记录和分析工作流程的工具。",
    link: "/projects/flowLog",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    image: "/images/projects/project2.png",
    imageUrl: "/images/projects/project2.png"
  },
  {
    title: "项目3",
    description: "项目3展示了高级的前端技术应用。这是对其功能的简要概述。",
    link: "/projects/project3",
    tags: ["Vue.js", "Vuex", "Firebase"]
  },
]
=======
import { getAllProjects } from '@/data/projects'
>>>>>>> 455b417bf93a6fe746452da5e00f5988fd198e95

export default function Projects() {
  const projects = getAllProjects()

  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <section className="mb-12 sm:mb-16 mt-8 sm:mt-20 bg-background/80 backdrop-blur-md rounded-lg p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">我的项目</h1>
          <p className="text-xl sm:text-xl mb-6 sm:mb-8">这里展示了我正在进行的一些项目</p>
          <Button>添加新项目</Button>
        </section>
        
        <section className="bg-background/80 backdrop-blur-md rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                link={`/projects/${project.id}`}
                tags={project.tags}
                imageUrl={project.imageUrl || ""}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
