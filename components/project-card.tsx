import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  demoLink?: string
  githubLink?: string
}

export function ProjectCard({ title, description, image, tech, demoLink, githubLink }: ProjectCardProps) {
  return (
    <div className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-background">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
