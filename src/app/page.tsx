import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-10 pt-8">
        <div className="flex justify-center">
          {/* Album Cover - larger and centered */}
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
        </div>
      </div>

      <Footer />
    </main>
  )
} 