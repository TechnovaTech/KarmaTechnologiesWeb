"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import ContactHero from "@/components/contact-hero"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative bg-background">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/contactbg.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar isScrolled={isScrolled} />
        <ContactHero />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}