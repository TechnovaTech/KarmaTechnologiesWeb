"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content"
import AboutStats from "@/components/about-stats"
import TechnologySection from "@/components/technology-section"
import ExcellenceSection from "@/components/excellence-section"
import Footer from "@/components/footer"

export default function AboutPage() {
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
      <AboutHero />
      <AboutContent />
      <AboutStats />
      <TechnologySection />
      <ExcellenceSection />
      <Footer />
    </main>
  )
}