import ProjectCard from '@/components/ProjectCard'
import { Button } from "@/components/ui/button"
import { getAllProjects } from '@/data/projects'

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
