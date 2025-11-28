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
    <main className="bg-background">
      <Navbar isScrolled={isScrolled} />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  )
}