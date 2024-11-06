import { notFound } from 'next/navigation'
import { getProjectById } from '@/data/projects'
import { getAllProjects } from '@/data/projects'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectById(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
