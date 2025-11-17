"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PrecisionSection from "@/components/precision-section"
import About from "@/components/about"
import Stats from "@/components/stats"
import Collections from "@/components/collections"
import AdditionalServices from "@/components/additional-services"
import WhyChooseUs from "@/components/why-choose-us"
import Story from "@/components/story"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Stats />
      <Collections />
      <AdditionalServices />
      <WhyChooseUs />
      <Story />
      <Footer />
    </main>
  )
}
