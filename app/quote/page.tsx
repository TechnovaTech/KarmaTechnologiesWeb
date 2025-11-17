"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuoteHero from "@/components/quote-hero"
import QuoteForm from "@/components/quote-form"

export default function QuotePage() {
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
      <QuoteHero />
      <QuoteForm />
      <Footer />
    </main>
  )
}