import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Creative Developer",
  description: "Welcome to my portfolio. I'm a full-stack developer building modern web experiences.",
  generator: "rizkyalfian",
  icons: {
    icon: [
      {
        url: "/incognito.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/incognito.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/incognito.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/incognito.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
