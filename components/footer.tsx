import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/rizkyalfiaann_?igsh=MTJ3Z2Q5dDJzcDFuNA%3D%3D&utm_source=qr ", label: "Instagram" },
    { icon: Mail, href: "mailto:rizkyalfiann2@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2 gradient-text">Portfolio</h3>
            <p className="text-text-secondary text-sm">
              Crafting modern web experiences with clean code and thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-background transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-text-secondary">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
