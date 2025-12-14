import type React from "react"
interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-surface border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
      <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  )
}
