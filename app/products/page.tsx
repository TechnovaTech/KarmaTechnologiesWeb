"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import ProductsHero from "@/components/products-hero"
import ProductsGrid from "@/components/products-grid"
import Footer from "@/components/footer"

export default function ProductsPage() {
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
      <ProductsHero />
      <ProductsGrid />
      <Footer />
    </main>
  )
}