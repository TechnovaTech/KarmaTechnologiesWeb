"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"


type Product = {
  id: number
  title: string
  category: string
  specifications: string[]
  image: string
}

export default function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  // 31 Detailed Products
  const allProducts: Product[] = [
    {
      id: 1,
      title: "Adapter",
      category: "General Precision Components",
      specifications: ["Length :  120 mm", "ID : 20 mm", "Material : MS"],
      image: "/mp1.jpg"
    },
    {
      id: 2,
      title: "ADG Block",
      category: "General Precision Components",
      specifications: ["Width : 55 mm", "Thickness : 50 mm", "Length : 75 mm", "Material : MS"],
      image: "/mp2.jpg"
    },
    {
      id: 3,
      title: "Angle Brackets",
      category: "General Precision Components",
      specifications: ["Material: MS", "OD : 88 mm", "ID : 38 mm", "Thickness : 60 mm"],
      image: "/mp3.jpg"
    },
    {
      id: 4,
      title: "Barrel Coolen Plate",
      category: "General Precision Components",
      specifications: ["Thickness : 25 mm", "Width : 125 mm", "Length: 205 mm"],
      image: "/mp4.jpg"
    },
    {
      id: 5,
      title: "Bracket",
      category: "General Precision Components",
      specifications: ["Material: MS", "Width : 70 mm", "Thickness : 38 mm", "Length : 25 mm"],
      image: "/mp5.jpg"
    },
    {
      id: 6,
      title: "Breaker Plate 2",
      category: "General Precision Components",
      specifications: ["Material: EN41", "OD : 60 mm", "Step OD : 40 mm", "Thickness : 38 mm"],
      image: "/mp6.jpg"
    },
    {
      id: 7,
      title: "Breaker Plates",
      category: "General Precision Components",
      specifications: ["Material: EN41", "OD : 60 mm", "Step OD : 40 mm", "Thickness : 38 mm"],
      image: "/mp7.jpg"
    },
    {
      id: 8,
      title: "BSB Housing – 2",
      category: "General Precision Components",
      specifications: ["Material: EN8", "OD : 110 mm", "ID : 85 mm", "Length: 105 mm"],
      image: "/mp8.jpg"
    },
    {
      id: 9,
      title: "BSB Housing EN8",
      category: "General Precision Components",
      specifications: ["Material: EN8", "OD : 100 mm", "ID : 50 mm", "Length: 100 mm"],
      image: "/mp9.jpg"
    },
    {
      id: 10,
      title: "BSB Housing EN8",
      category: "General Precision Components",
      specifications: ["Material: EN8", "Pitch: OD : 200 mm", "ID : 110 mm", "Step OD : 90 mm", "Length : 165 mm"],
      image: "/mp10.jpg"
    },
    {
      id: 11,
      title: "BSB Housing Small EN8",
      category: "General Precision Components",
      specifications: ["OD: 100 mm", "ID : 45 mm", "Length: 100 mm"],
      image: "/mp11.jpg"
    },
    {
      id: 12,
      title: "BSB Housing Small EN8",
      category: "General Precision Components",
      specifications: ["OD: 200 mm", "ID : 110 mm", "Step ID : 90 mm", "Length: 165 mm"],
      image: "/mp12.jpg"
    },
    {
      id: 13,
      title: "CAM ASSY",
      category: "General Precision Components",
      specifications: [],
      image: "/mp13.jpg"
    },
    {
      id: 14,
      title: "Chain Sprocket Wheel",
      category: "General Precision Components",
      specifications: ["Material: MS", "OD : 88 mm", "ID : 38 mm", "Thickness : 60 mm", "Length: 100 mm"],
      image: "/mp14.jpg"
    },
    {
      id: 15,
      title: "Extension Connector Pipe",
      category: "General Precision Components",
      specifications: ["Material:  MS"],
      image: "/mp15.jpg"
    },
    {
      id: 16,
      title: "Coolant plate ",
      category: "General Precision Components",
      specifications: ["Width: 125 mm", "Thickness : 25 mm", "Length: 100 mm"],
      image: "/mp16.jpg"
    },
    {
      id: 17,
      title: "Flance",
      category: "General Precision Components",
      specifications: ["Material: EN8", "OD: 200 mm", "ID : 110 mm", "Step OD : 90 mm", "Length : 50 mm"],
      image: "/mp17.jpg"
    },
    {
      id: 18,
      title: "Indexing Sleev MS",
      category: "General Precision Components",
      specifications: ["OD: 88 mm", "ID : 42 mm", "Length: 45 mm"],
      image: "/mp18.jpg"
    },
    {
      id: 19,
      title: "Indexing Sleev MS 2 ",
      category: "General Precision Components",
      specifications: ["OD: 88 mm", "ID : 42 mm", "Length: 45 mm"],
      image: "/mp19.jpg"
    },
    {
      id: 20,
      title: "Locking Plate",
      category: "General Precision Components",
      specifications: ["Width : 50 mm", "Thickness : 18 mm", "Length : 105 mm", "Material : MS"],
      image: "/mp20.jpg"
    },
    {
      id: 21,
      title: "Motor Shaft",
      category: "General Precision Components",
      specifications: ["Material: MS"],
      image: "/mp21.jpg"
    },
    {
      id: 22,
      title: "Nut EN8",
      category: "General Precision Components",
      specifications: ["OD: 110 mm", "ID : M60 Thread", "Length: 20 mm"],
      image: "/mp22.jpg"
    },
    {
      id: 23,
      title: "Proxy MTG (Aluminum)",
      category: "General Precision Components",
      specifications: ["Material : MS","Width : 20 mm", "Thickness : 24 mm", "Length : 50 mm"],
      image: "/mp23.jpg"
    },
    {
      id: 24,
      title: "Proxy MTG (Aluminum) 2",
      category: "General Precision Components",
      specifications: [],
      image: "/mp24.jpg"
    },
    {
      id: 25,
      title: "RECT Pedestal CI Casting",
      category: "General Precision Components",
      specifications: ["Material : MS", "Length : 105 mm", "Thickness : 25 mm", "Width : 75 mm"],
      image: "/mp25.jpg"
    },
    {
      id: 26,
      title: "Rotary Sleeve ",
      category: "General Precision Components",
      specifications: ["Material: EN418", "OD : 70 mm ", "Step OD : 38 mm", "ID : 25 mm"],
      image: "/mp26.jpg"
    },
    {
      id: 27,
      title: "Round Brass Bush ",
      category: "General Precision Components",
      specifications: ["Material: Brass", "OD: 35 mm", "ID : 25 mm", "Length : 750 mm", "Thickness : 9 mm"],
      image: "/mp27.jpg"
    },
    {
      id: 28,
      title: "Shaft Collar",
      category: "General Precision Components",
      specifications: ["Material: EN418", "OD : 88 mm", "Thickness : 45 mm", "ID : 42 mm"],
      image: "/mp28.jpg"
    },
    {
      id: 29,
      title: "Shaft, Torque",
      category: "General Precision Components",
      specifications: [ "Material : MS","Length :  75 mm", "ID : 15 mm"],
      image: "/mp29.jpg"
    },
    {
      id: 30,
      title: "Shinify Fork nut – Adjuster",
      category: "General Precision Components",
      specifications: ["Material: MS", "ID : 18 mm", "Step OD : 90 mm", "Length : 120 mm"],
      image: "/mp30.jpg"
    },
    {
      id: 31,
      title: "Weld Neck Flange",
      category: "General Precision Components",
      specifications: ["Material: ASTM A105", "Size/Diameter : 15 inch", "Thickness : 25 mm"],
      image: "/mp31.jpg"
    }
  ]



  // Add product to quote
  const addToQuote = (product: Product) => {
    const quoteItems = JSON.parse(localStorage.getItem("quoteItems") || "[]")
    const existingItem = quoteItems.find((item: any) => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      quoteItems.push({
        id: product.id,
        title: product.title,
        category: product.category,
        image: product.image,
        quantity: 1
      })
    }
    
    localStorage.setItem("quoteItems", JSON.stringify(quoteItems))
    setSuccessMessage(`${product.title} added to quote!`)
    setShowSuccess(true)
    setSelectedProduct(null)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="group cursor-pointer bg-white text-center border border-transparent hover:border-black transition-all duration-300 p-2 sm:p-3 md:p-4 rounded-sm"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative overflow-hidden bg-background h-48 mb-4 rounded-md">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-foreground font-semibold text-sm line-clamp-2">
                      {product.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">{product.category}</p>
                  </div>
                </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  className="absolute top-4 right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-accent transition-colors z-10"
                  onClick={() => setSelectedProduct(null)}
                >
                  ×
                </button>
                
                <div className="relative h-64 bg-background">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="p-8">
                  <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase font-semibold mb-2">
                    {selectedProduct.category}
                  </p>
                  <h2 className="text-3xl font-bold text-foreground font-playfair mb-6">
                    {selectedProduct.title}
                  </h2>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Specifications</h3>
                    <ul className="space-y-2">
                      {selectedProduct.specifications.map((spec: string, index: number) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => addToQuote(selectedProduct)}
                      className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold tracking-wider hover:bg-accent transition-colors"
                    >
                      Add to Quote
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-4 right-4 z-50 p-4 bg-gray-100 text-black rounded-lg shadow-lg max-w-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">✓</span>
            <span className="font-semibold">{successMessage}</span>
          </div>
        </motion.div>
      )}
    </section>
  )
}