"use client"

import type React from "react"

import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { ProjectCard } from "../components/project-card"
import { ServiceCard } from "../components/service-card"
import { projects, services, skills, experience } from "../lib/data"
import { ArrowRight, Download, Mail } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Creative Developer</span> Building Digital Experiences
            </h1>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              I craft modern, responsive web applications with clean code and thoughtful design. Specializing in React,
              Next.js, and creating seamless user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                Get In Touch <ArrowRight size={18} />
              </a>
              <a
                href="https://drive.google.com/file/d/1Pl3ODwpQ0G6tzHRHe6ePaI2q4mUHPg0N/view?usp=sharing"
                download
                className="px-8 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-3xl" />
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/283/061/original/web-development-concept-in-3d-isometric-design-designer-works-with-code-interface-engineering-programming-settings-and-optimizes-pages-template-with-people-scene-illustration-for-webpage-vector.jpg"
              alt="Developer"
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Profile */}
            <div className="md:col-span-1">
              <img
                src="rizki.jpg"
                alt="Profile"
                className="w-full rounded-2xl mb-6 shadow-lg"
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
              />
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Rizki Alfian</h3>
                <p className="text-text-secondary">Junior Full Stack Developer</p>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                I'm a dedicated fresh graduate with strong passion in web development. I am hardworking, quick to learn new technologies, and have 1 year of practical experience, including an internship at PT Taekyung. I have hands-on skills in HTML, CSS, Java, React.js, Next.js, SQL, and Laravel. I focus on writing clean, efficient code and continuously improving my abilities to deliver impactful and reliable digital solutions.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                {experience.map((exp, idx) => (
                  <div key={idx} className="pb-4 border-b border-border last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">{exp.role}</p>
                        <p className="text-sm text-text-secondary">{exp.company}</p>
                      </div>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <p className="text-sm text-text-secondary">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Skills & Technologies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="font-semibold mb-4 text-primary">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Featured Projects</h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one showcases my skills in modern web development and design.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Services</h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            I offer a range of services to help bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={
                  idx === 0 ? (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : idx === 1 ? (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M14.293 6.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z" />
                      <path
                        fillRule="evenodd"
                        d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1h-2v1a1 1 0 11-2 0v-1H7a2 2 0 01-2-2v-1H4a1 1 0 110-2h1v-2H4a1 1 0 110-2h1V9H4a1 1 0 110-2h1V7H4a1 1 0 110-2h1V4a2 2 0 012-2h1V2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Get In Touch</h2>
          <p className="text-text-secondary text-center mb-12">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Mail size={20} className="text-primary" />
                  Email
                </h3>
                <a href="mailto:rizkyalfiann2@gmail.com" className="text-primary hover:text-primary-light transition-colors">
                  rizkyalfiann2@gmail.com
                </a>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+6281385521596" className="text-primary hover:text-primary-light transition-colors">
                  +62 81-385-521-596
                </a>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-text-secondary">Purwakarta Regency, West Java, Indonesia</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="rizkyalfiann2@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
              {submitted && <p className="text-green-500 text-sm text-center">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
