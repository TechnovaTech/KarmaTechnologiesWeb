"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

type Product = {
  id: number
  title: string
  category: string
  description: string
  specifications: string[]
  image: string
}

const products: Product[] = [
  { 
    id: 1, 
    title: "Round Brass Bush", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: Brass", "OD: 35 mm", "ID : 25 mm", "Length : 750 mm","Thickness : 9 mm"],
    image: "/p1.jpg"
  },
  { 
    id: 2, 
    title: "Extension Connector Pipe", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: MS"],
    image: "/p2.jpg"
  },
  { 
    id: 3, 
    title: "Motor Shaft", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: MS"],
    image: "/p3.jpg"
  },
  { 
    id: 4, 
    title: "Bracket", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: MS", "Width : 70 mm", "Thickness : 38 mm", "Length : 25 mm"],
    image: "/p4.jpg"
  },
  { 
    id: 5, 
    title: "Shaft Collar", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: EN418", "OD : 88 mm", "Thickness : 45 mm", "ID : 42 mm"],
    image: "/p5.jpg"
  },
  { 
    id: 6, 
    title: "Rotary Sleeve", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: EN418", "OD : 70 mm", "Step OD : 38 mm", "ID : 25 mm"],
    image: "/p6.jpg"
  },
  { 
    id: 7, 
    title: "RECT Pedestal CI Casting", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: MS", "Length : 105 mm", "Thickness : 25 mm", "Width : 75 mm"],
    image: "/p7.jpg"
  },
  { 
    id: 8, 
    title: "Angle Brackets", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: MS", "OD : 88 mm", "ID : 38 mm", "Thickness : 60 mm"],
    image: "/p8.jpg"
  },
  { 
    id: 9, 
    title: "Barrel Coolen Plate", 
    category: "General Precision Components",
    description: "",
    specifications: ["Thickness : 25 mm", "Width : 125 mm", "Length: 205 mm"],
    image: "/p9.jpg"
  },
  { 
    id: 10, 
    title: "Flance", 
    category: "General Precision Components",
    description: "",
    specifications: ["Material: EN8", "OD : 200 mm", "Step OD : 90 mm", "ID : 110 mm", "Length : 50 mm"],
    image: "/p10.jpg"
  },
]

export default function Collections() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
    <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Decorative elements */}
        <div className="absolute top-12 left-1/4 w-px h-32 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute top-12 right-1/4 w-px h-32 bg-gradient-to-b from-black/20 to-transparent" />
        
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 sm:px-6 py-2 border border-black/30 rounded-full mb-4 sm:mb-6">
            <h2 className="text-black text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] font-light">WE ARE OFFERING</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 font-playfair">
            Our Premium
            <span className="block text-black">Products</span>
          </h3>
          <div className="w-16 sm:w-24 h-px bg-black mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group cursor-pointer bg-white text-center border border-transparent hover:border-black transition-all duration-300 p-2 sm:p-3 md:p-4 rounded-sm"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden bg-white h-32 sm:h-40 md:h-48 mb-2 sm:mb-3 md:mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-black font-semibold text-xs sm:text-sm md:text-base leading-tight">
                  {product.title}
                </h4>
                <p className="text-black/70 text-xs sm:text-sm">{product.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  className="absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
                  onClick={() => setSelectedProduct(null)}
                >
                  ×
                </button>
                
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <p className="text-sm tracking-[0.2em] text-gray-600 uppercase font-semibold mb-2">
                    {selectedProduct.category}
                  </p>
                  <h2 className="text-3xl font-bold text-black font-playfair mb-4">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-black mb-4">Specifications</h3>
                    <ul className="space-y-2">
                      {selectedProduct.specifications.map((spec: string, index: number) => (
                        <li key={index} className="flex items-center gap-3 text-gray-700">
                          <span className="w-2 h-2 bg-black rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <button className="w-full px-6 py-3 bg-black text-white font-semibold tracking-wider hover:bg-gray-800 transition-colors rounded-sm">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
