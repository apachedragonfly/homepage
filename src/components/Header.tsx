import React from 'react'
import Link from "next/link"
import { FaInstagram, FaTiktok, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6"

const SOCIAL_LINKS = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
] as const

const Header = () => {
  return (
    <header className="w-full h-16 bg-transparent pt-4">
      <div className="max-w-7xl mx-auto px-8 h-full flex justify-between items-center">
        <h1 className="text-2xl dark:text-[#FFFFFF] text-[#000000]">
          Jeremy Saunders
        </h1>
        
        <div className="flex items-center gap-8">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              className="hover:opacity-80 transition-opacity"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5 dark:text-[#FFFFFF] text-[#000000]" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header 