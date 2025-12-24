"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"


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
  const { t, language } = useLanguage()
  
  // Remove translateSpec function since specifications are now translated

  // 31 Detailed Products
  const allProducts: Product[] = [
    {
      id: 1,
      title: t('products.adapter.title'),
      category: t('collections.category'),
      specifications: [t('products.adapter.spec1'), t('products.adapter.spec2'), t('products.adapter.spec3')],
      image: "/mp1.jpg"
    },
    {
      id: 2,
      title: t('products.adgBlock.title'),
      category: t('collections.category'),
      specifications: [t('products.adgBlock.spec1'), t('products.adgBlock.spec2'), t('products.adgBlock.spec3'), t('products.adgBlock.spec4')],
      image: "/mp2.jpg"
    },
    {
      id: 3,
      title: t('products.angleBrackets.title'),
      category: t('collections.category'),
      specifications: [t('products.angleBrackets.spec1'), t('products.angleBrackets.spec2'), t('products.angleBrackets.spec3'), t('products.angleBrackets.spec4')],
      image: "/mp3.jpg"
    },
    {
      id: 4,
      title: t('products.barrelCoolenPlate.title'),
      category: t('collections.category'),
      specifications: [t('products.barrelCoolenPlate.spec1'), t('products.barrelCoolenPlate.spec2'), t('products.barrelCoolenPlate.spec3')],
      image: "/mp4.jpg"
    },
    {
      id: 5,
      title: t('products.bracket.title'),
      category: t('collections.category'),
      specifications: [t('products.bracket.spec1'), t('products.bracket.spec2'), t('products.bracket.spec3'), t('products.bracket.spec4')],
      image: "/mp5.jpg"
    },
    {
      id: 6,
      title: t('products.breakerPlate2.title'),
      category: t('collections.category'),
      specifications: [t('products.breakerPlate2.spec1'), t('products.breakerPlate2.spec2'), t('products.breakerPlate2.spec3'), t('products.breakerPlate2.spec4')],
      image: "/mp6.jpg"
    },
    {
      id: 7,
      title: t('products.breakerPlates.title'),
      category: t('collections.category'),
      specifications: [t('products.breakerPlates.spec1'), t('products.breakerPlates.spec2'), t('products.breakerPlates.spec3'), t('products.breakerPlates.spec4')],
      image: "/mp7.jpg"
    },
    {
      id: 8,
      title: t('products.bsbHousing2.title'),
      category: t('collections.category'),
      specifications: [t('products.bsbHousing2.spec1'), t('products.bsbHousing2.spec2'), t('products.bsbHousing2.spec3'), t('products.bsbHousing2.spec4')],
      image: "/mp8.jpg"
    },
    {
      id: 9,
      title: t('products.bsbHousingEN8.title'),
      category: t('collections.category'),
      specifications: [t('products.bsbHousingEN8.spec1'), t('products.bsbHousingEN8.spec2'), t('products.bsbHousingEN8.spec3'), t('products.bsbHousingEN8.spec4')],
      image: "/mp9.jpg"
    },
    {
      id: 10,
      title: t('products.bsbHousingLarge.title'),
      category: t('collections.category'),
      specifications: [t('products.bsbHousingLarge.spec1'), t('products.bsbHousingLarge.spec2'), t('products.bsbHousingLarge.spec3'), t('products.bsbHousingLarge.spec4'), t('products.bsbHousingLarge.spec5')],
      image: "/mp10.jpg"
    },
    {
      id: 11,
      title: t('products.bsbHousingSmall.title'),
      category: t('collections.category'),
      specifications: [t('products.bsbHousingSmall.spec1'), t('products.bsbHousingSmall.spec2'), t('products.bsbHousingSmall.spec3')],
      image: "/mp11.jpg"
    },
    {
      id: 12,
      title: t('products.bsbHousingExtended.title'),
      category: t('collections.category'),
      specifications: [t('products.bsbHousingExtended.spec1'), t('products.bsbHousingExtended.spec2'), t('products.bsbHousingExtended.spec3'), t('products.bsbHousingExtended.spec4')],
      image: "/mp12.jpg"
    },
    {
      id: 13,
      title: t('products.camAssy.title'),
      category: t('collections.category'),
      specifications: [],
      image: "/mp13.jpg"
    },
    {
      id: 14,
      title: t('products.chainSprocketWheel.title'),
      category: t('collections.category'),
      specifications: [t('products.chainSprocketWheel.spec1'), t('products.chainSprocketWheel.spec2'), t('products.chainSprocketWheel.spec3'), t('products.chainSprocketWheel.spec4'), t('products.chainSprocketWheel.spec5')],
      image: "/mp14.jpg"
    },
    {
      id: 15,
      title: t('products.extensionConnectorPipe.title'),
      category: t('collections.category'),
      specifications: [t('products.extensionConnectorPipe.spec1')],
      image: "/mp15.jpg"
    },
    {
      id: 16,
      title: t('products.coolantPlate.title'),
      category: t('collections.category'),
      specifications: [t('products.coolantPlate.spec1'), t('products.coolantPlate.spec2'), t('products.coolantPlate.spec3')],
      image: "/mp16.jpg"
    },
    {
      id: 17,
      title: t('products.flance.title'),
      category: t('collections.category'),
      specifications: [t('products.flance.spec1'), t('products.flance.spec2'), t('products.flance.spec3'), t('products.flance.spec4'), t('products.flance.spec5')],
      image: "/mp17.jpg"
    },
    {
      id: 18,
      title: t('products.indexingSleeve.title'),
      category: t('collections.category'),
      specifications: [t('products.indexingSleeve.spec1'), t('products.indexingSleeve.spec2'), t('products.indexingSleeve.spec3')],
      image: "/mp18.jpg"
    },
    {
      id: 19,
      title: t('products.indexingSleeve2.title'),
      category: t('collections.category'),
      specifications: [t('products.indexingSleeve2.spec1'), t('products.indexingSleeve2.spec2'), t('products.indexingSleeve2.spec3')],
      image: "/mp19.jpg"
    },
    {
      id: 20,
      title: t('products.lockingPlate.title'),
      category: t('collections.category'),
      specifications: [t('products.lockingPlate.spec1'), t('products.lockingPlate.spec2'), t('products.lockingPlate.spec3'), t('products.lockingPlate.spec4')],
      image: "/mp20.jpg"
    },
    {
      id: 21,
      title: t('products.motorShaft.title'),
      category: t('collections.category'),
      specifications: [t('products.motorShaft.spec1')],
      image: "/mp21.jpg"
    },
    {
      id: 22,
      title: t('products.nutEN8.title'),
      category: t('collections.category'),
      specifications: [t('products.nutEN8.spec1'), t('products.nutEN8.spec2'), t('products.nutEN8.spec3')],
      image: "/mp22.jpg"
    },
    {
      id: 23,
      title: t('products.proxyMTG.title'),
      category: t('collections.category'),
      specifications: [t('products.proxyMTG.spec1'), t('products.proxyMTG.spec2'), t('products.proxyMTG.spec3'), t('products.proxyMTG.spec4')],
      image: "/mp23.jpg"
    },
    {
      id: 24,
      title: t('products.proxyMTG2.title'),
      category: t('collections.category'),
      specifications: [],
      image: "/mp24.jpg"
    },
    {
      id: 25,
      title: t('products.rectPedestal.title'),
      category: t('collections.category'),
      specifications: [t('products.rectPedestal.spec1'), t('products.rectPedestal.spec2'), t('products.rectPedestal.spec3'), t('products.rectPedestal.spec4')],
      image: "/mp25.jpg"
    },
    {
      id: 26,
      title: t('products.rotarySleeve.title'),
      category: t('collections.category'),
      specifications: [t('products.rotarySleeve.spec1'), t('products.rotarySleeve.spec2'), t('products.rotarySleeve.spec3'), t('products.rotarySleeve.spec4')],
      image: "/mp26.jpg"
    },
    {
      id: 27,
      title: t('products.roundBrassBush.title'),
      category: t('collections.category'),
      specifications: [t('products.roundBrassBush.spec1'), t('products.roundBrassBush.spec2'), t('products.roundBrassBush.spec3'), t('products.roundBrassBush.spec4'), t('products.roundBrassBush.spec5')],
      image: "/mp27.jpg"
    },
    {
      id: 28,
      title: t('products.shaftCollar.title'),
      category: t('collections.category'),
      specifications: [t('products.shaftCollar.spec1'), t('products.shaftCollar.spec2'), t('products.shaftCollar.spec3'), t('products.shaftCollar.spec4')],
      image: "/mp28.jpg"
    },
    {
      id: 29,
      title: t('products.shaftTorque.title'),
      category: t('collections.category'),
      specifications: [t('products.shaftTorque.spec1'), t('products.shaftTorque.spec2'), t('products.shaftTorque.spec3')],
      image: "/mp29.jpg"
    },
    {
      id: 30,
      title: t('products.shinifyForkNut.title'),
      category: t('collections.category'),
      specifications: [t('products.shinifyForkNut.spec1'), t('products.shinifyForkNut.spec2'), t('products.shinifyForkNut.spec3'), t('products.shinifyForkNut.spec4')],
      image: "/mp30.jpg"
    },
    {
      id: 31,
      title: t('products.weldNeckFlange.title'),
      category: t('collections.category'),
      specifications: [t('products.weldNeckFlange.spec1'), t('products.weldNeckFlange.spec2'), t('products.weldNeckFlange.spec3')],
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
    setSuccessMessage(t('products.grid.addedToQuote', { product: product.title }))
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
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('collections.specs')}</h3>
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
                      {t('collections.addToQuote')}
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