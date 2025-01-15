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
      <div className="max-w-7xl mx-auto px-8 h-full flex justify-center items-center">
        <h1 className="text-[28px] dark:text-[#FFFFFF] text-[#000000]">
          Jeremy Saunders
        </h1>
      </div>
    </header>
  )
}

export default Header 