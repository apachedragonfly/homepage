import React from "react"
import type { Metadata } from "next"
import { Beth_Ellen } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const bethEllen = Beth_Ellen({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Jeremy Saunders | Singer-Songwriter",
  description: "Official website of Jeremy Saunders - Singer, Songwriter, and Performer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bethEllen.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 