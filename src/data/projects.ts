import { ProjectData } from '@/types/project'

export const projects: ProjectData[] = [
  {
    id: 'project1',
    title: "我的博客",
    description: "即本站。一个使用 NextJS + Tailwind CSS + shadcn/ui 搭建的博客。",
    tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    imageUrl: "/images/projects/project1.png"
  },
  {
    id: 'project2',
    title: "flowLog | 心流日志",
    description: "心流日志是一个创新的应用，用户可以在其中无压地记录，而不会被过多地干扰，从而保持心流状态，高效记录自己最有价值的思考",
    tags: ["TypeScript", "NextJS", "shadcn/ui"],
    imageUrl: "/images/projects/project2.png"
  },
  {
    id: 'project3',
    title: "next-bookmark | Next网址导航 - 书签管理器",
    description: "next-bookmark 是一个美观的网址导航项目，用户可以使用该项目，创造性地管理自己的网址书签",
    tags: ["NextJS", "shadcn/ui", "React", "Tailwind CSS"],
    imageUrl: "/images/projects/project3.jpg"
  }
]

// 获取所有项目
export function getAllProjects(): ProjectData[] {
  return projects
}

// 根据ID获取单个项目
export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(project => project.id === id)
}

// 获取最近的项目（例如前3个）
export function getRecentProjects(count: number = 3): ProjectData[] {
  return projects.slice(0, count)
}
