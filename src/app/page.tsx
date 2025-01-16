import React from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaTiktok, FaXTwitter, FaGithub, FaYoutube, FaSpotify, FaMusic } from "react-icons/fa6"
import type { IconType } from 'react-icons'

type SocialLink = {
  icon: IconType
  href: string
  label: string
}

const SOCIAL_LINKS: SocialLink[] = [
  { icon: FaInstagram, href: "https://www.instagram.com/jeremyspictures", label: "Instagram" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@jeremystoks", label: "TikTok" },
  { icon: FaXTwitter, href: "https://www.x.com/jeremyonX", label: "X" },
  { icon: FaYoutube, href: "https://www.youtube.com/@jeremycraigsaunders", label: "YouTube" },
  { icon: FaSpotify, href: "https://open.spotify.com/artist/6LgLJCfIgQ5VDL8J9F1sfv?si=sSQE05U3THStGVu0FuQkeg", label: "Spotify" },
  { icon: FaMusic, href: "https://music.apple.com/ca/artist/jeremy-craig-saunders/1715078505", label: "Apple Music" },
]

export default function Home() {
  return (
    <main className="min-h-screen fade-in">
      <Header />
      
      <div className="container mx-auto px-10 pt-8 flex flex-col items-center gap-12">
        {/* Album Cover */}
        <div className="w-full max-w-[500px] flex-shrink-0 overflow-hidden rounded-lg">
          <div className="relative aspect-square w-full transition-transform duration-300 hover:scale-105">
            <Image
              src="/album-cover.jpg"
              alt="Jeremy Saunders"
              fill
              className="rounded-lg object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Social Icons - slightly larger */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              className="hover:opacity-80 transition-opacity p-2"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-[24px] h-[24px] text-[var(--text)]" />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
} 