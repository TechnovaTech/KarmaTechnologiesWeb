"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { useQuote } from "@/contexts/quote-context"
import { useLanguage } from "@/contexts/language-context"

type Product = {
  id: number
  title: string
  category: string
  description: string
  specifications: string[]
  image: string
}

export default function Collections() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { addToQuote } = useQuote()
  const { t, language } = useLanguage()
  
  const products: Product[] = [
    {
      id: 1,
      title: t('products.adapter.title'),
      category: t('collections.category'),
      description: t('products.adapter.description'),
      specifications: [t('products.adapter.spec1'), t('products.adapter.spec2'), t('products.adapter.spec3')],
      image: "/mp1.jpg"
    },
    {
      id: 2,
      title: t('products.adgBlock.title'),
      category: t('collections.category'),
      description: t('products.adgBlock.description'),
      specifications: [t('products.adgBlock.spec1'), t('products.adgBlock.spec2'), t('products.adgBlock.spec3'), t('products.adgBlock.spec4')],
      image: "/mp2.jpg"
    },
    {
      id: 3,
      title: t('products.angleBrackets.title'),
      category: t('collections.category'),
      description: t('products.angleBrackets.description'),
      specifications: [t('products.angleBrackets.spec1'), t('products.angleBrackets.spec2'), t('products.angleBrackets.spec3'), t('products.angleBrackets.spec4')],
      image: "/mp3.jpg"
    },
    {
      id: 4,
      title: t('products.barrelCoolenPlate.title'),
      category: t('collections.category'),
      description: t('products.barrelCoolenPlate.description'),
      specifications: [t('products.barrelCoolenPlate.spec1'), t('products.barrelCoolenPlate.spec2'), t('products.barrelCoolenPlate.spec3')],
      image: "/mp4.jpg"
    },
    {
      id: 5,
      title: t('products.bracket.title'),
      category: t('collections.category'),
      description: t('products.bracket.description'),
      specifications: [t('products.bracket.spec1'), t('products.bracket.spec2'), t('products.bracket.spec3'), t('products.bracket.spec4')],
      image: "/mp5.jpg"
    },
    {
      id: 6,
      title: t('products.breakerPlate2.title'),
      category: t('collections.category'),
      description: t('products.breakerPlate2.description'),
      specifications: [t('products.breakerPlate2.spec1'), t('products.breakerPlate2.spec2'), t('products.breakerPlate2.spec3'), t('products.breakerPlate2.spec4')],
      image: "/mp6.jpg"
    },
    {
      id: 7,
      title: t('products.breakerPlates.title'),
      category: t('collections.category'),
      description: t('products.breakerPlates.description'),
      specifications: [t('products.breakerPlates.spec1'), t('products.breakerPlates.spec2'), t('products.breakerPlates.spec3'), t('products.breakerPlates.spec4')],
      image: "/mp7.jpg"
    },
    {
      id: 8,
      title: t('products.bsbHousing2.title'),
      category: t('collections.category'),
      description: t('products.bsbHousing2.description'),
      specifications: [t('products.bsbHousing2.spec1'), t('products.bsbHousing2.spec2'), t('products.bsbHousing2.spec3'), t('products.bsbHousing2.spec4')],
      image: "/mp8.jpg"
    },
    {
      id: 9,
      title: t('products.bsbHousingEN8.title'),
      category: t('collections.category'),
      description: t('products.bsbHousingEN8.description'),
      specifications: [t('products.bsbHousingEN8.spec1'), t('products.bsbHousingEN8.spec2'), t('products.bsbHousingEN8.spec3'), t('products.bsbHousingEN8.spec4')],
      image: "/mp9.jpg"
    },
    {
      id: 10,
      title: t('products.bsbHousingLarge.title'),
      category: t('collections.category'),
      description: t('products.bsbHousingLarge.description'),
      specifications: [t('products.bsbHousingLarge.spec1'), t('products.bsbHousingLarge.spec2'), t('products.bsbHousingLarge.spec3'), t('products.bsbHousingLarge.spec4'), t('products.bsbHousingLarge.spec5')],
      image: "/mp10.jpg"
    },
    {
      id: 11,
      title: t('products.bsbHousingSmall.title'),
      category: t('collections.category'),
      description: t('products.bsbHousingSmall.description'),
      specifications: [t('products.bsbHousingSmall.spec1'), t('products.bsbHousingSmall.spec2'), t('products.bsbHousingSmall.spec3')],
      image: "/mp11.jpg"
    },
    {
      id: 12,
      title: t('products.bsbHousingExtended.title'),
      category: t('collections.category'),
      description: t('products.bsbHousingExtended.description'),
      specifications: [t('products.bsbHousingExtended.spec1'), t('products.bsbHousingExtended.spec2'), t('products.bsbHousingExtended.spec3'), t('products.bsbHousingExtended.spec4')],
      image: "/mp12.jpg"
    },
    {
      id: 13,
      title: t('products.camAssy.title'),
      category: t('collections.category'),
      description: t('products.camAssy.description'),
      specifications: [],
      image: "/mp13.jpg"
    },
    {
      id: 14,
      title: t('products.chainSprocketWheel.title'),
      category: t('collections.category'),
      description: t('products.chainSprocketWheel.description'),
      specifications: [t('products.chainSprocketWheel.spec1'), t('products.chainSprocketWheel.spec2'), t('products.chainSprocketWheel.spec3'), t('products.chainSprocketWheel.spec4'), t('products.chainSprocketWheel.spec5')],
      image: "/mp14.jpg"
    },
    {
      id: 15,
      title: t('products.extensionConnectorPipe.title'),
      category: t('collections.category'),
      description: t('products.extensionConnectorPipe.description'),
      specifications: [t('products.extensionConnectorPipe.spec1')],
      image: "/mp15.jpg"
    },
    {
      id: 16,
      title: t('products.coolantPlate.title'),
      category: t('collections.category'),
      description: t('products.coolantPlate.description'),
      specifications: [t('products.coolantPlate.spec1'), t('products.coolantPlate.spec2'), t('products.coolantPlate.spec3')],
      image: "/mp16.jpg"
    },
    {
      id: 17,
      title: t('products.flance.title'),
      category: t('collections.category'),
      description: t('products.flance.description'),
      specifications: [t('products.flance.spec1'), t('products.flance.spec2'), t('products.flance.spec3'), t('products.flance.spec4'), t('products.flance.spec5')],
      image: "/mp17.jpg"
    },
    {
      id: 18,
      title: t('products.indexingSleeve.title'),
      category: t('collections.category'),
      description: t('products.indexingSleeve.description'),
      specifications: [t('products.indexingSleeve.spec1'), t('products.indexingSleeve.spec2'), t('products.indexingSleeve.spec3')],
      image: "/mp18.jpg"
    },
    {
      id: 19,
      title: t('products.indexingSleeve2.title'),
      category: t('collections.category'),
      description: t('products.indexingSleeve2.description'),
      specifications: [t('products.indexingSleeve2.spec1'), t('products.indexingSleeve2.spec2'), t('products.indexingSleeve2.spec3')],
      image: "/mp19.jpg"
    },
    {
      id: 20,
      title: t('products.lockingPlate.title'),
      category: t('collections.category'),
      description: t('products.lockingPlate.description'),
      specifications: [t('products.lockingPlate.spec1'), t('products.lockingPlate.spec2'), t('products.lockingPlate.spec3'), t('products.lockingPlate.spec4')],
      image: "/mp20.jpg"
    },
    {
      id: 21,
      title: t('products.motorShaft.title'),
      category: t('collections.category'),
      description: t('products.motorShaft.description'),
      specifications: [t('products.motorShaft.spec1')],
      image: "/mp21.jpg"
    },
    {
      id: 22,
      title: t('products.nutEN8.title'),
      category: t('collections.category'),
      description: t('products.nutEN8.description'),
      specifications: [t('products.nutEN8.spec1'), t('products.nutEN8.spec2'), t('products.nutEN8.spec3')],
      image: "/mp22.jpg"
    },
    {
      id: 23,
      title: t('products.proxyMTG.title'),
      category: t('collections.category'),
      description: t('products.proxyMTG.description'),
      specifications: [t('products.proxyMTG.spec1'), t('products.proxyMTG.spec2'), t('products.proxyMTG.spec3'), t('products.proxyMTG.spec4')],
      image: "/mp23.jpg"
    },
    {
      id: 24,
      title: t('products.proxyMTG2.title'),
      category: t('collections.category'),
      description: t('products.proxyMTG2.description'),
      specifications: [],
      image: "/mp24.jpg"
    },
    {
      id: 25,
      title: t('products.rectPedestal.title'),
      category: t('collections.category'),
      description: t('products.rectPedestal.description'),
      specifications: [t('products.rectPedestal.spec1'), t('products.rectPedestal.spec2'), t('products.rectPedestal.spec3'), t('products.rectPedestal.spec4')],
      image: "/mp25.jpg"
    },
    {
      id: 26,
      title: t('products.rotarySleeve.title'),
      category: t('collections.category'),
      description: t('products.rotarySleeve.description'),
      specifications: [t('products.rotarySleeve.spec1'), t('products.rotarySleeve.spec2'), t('products.rotarySleeve.spec3'), t('products.rotarySleeve.spec4')],
      image: "/mp26.jpg"
    },
    {
      id: 27,
      title: t('products.roundBrassBush.title'),
      category: t('collections.category'),
      description: t('products.roundBrassBush.description'),
      specifications: [t('products.roundBrassBush.spec1'), t('products.roundBrassBush.spec2'), t('products.roundBrassBush.spec3'), t('products.roundBrassBush.spec4'), t('products.roundBrassBush.spec5')],
      image: "/mp27.jpg"
    },
    {
      id: 28,
      title: t('products.shaftCollar.title'),
      category: t('collections.category'),
      description: t('products.shaftCollar.description'),
      specifications: [t('products.shaftCollar.spec1'), t('products.shaftCollar.spec2'), t('products.shaftCollar.spec3'), t('products.shaftCollar.spec4')],
      image: "/mp28.jpg"
    },
    {
      id: 29,
      title: t('products.shaftTorque.title'),
      category: t('collections.category'),
      description: t('products.shaftTorque.description'),
      specifications: [t('products.shaftTorque.spec1'), t('products.shaftTorque.spec2'), t('products.shaftTorque.spec3')],
      image: "/mp29.jpg"
    },
    {
      id: 30,
      title: t('products.shinifyForkNut.title'),
      category: t('collections.category'),
      description: t('products.shinifyForkNut.description'),
      specifications: [t('products.shinifyForkNut.spec1'), t('products.shinifyForkNut.spec2'), t('products.shinifyForkNut.spec3'), t('products.shinifyForkNut.spec4')],
      image: "/mp30.jpg"
    },
    {
      id: 31,
      title: t('products.weldNeckFlange.title'),
      category: t('collections.category'),
      description: t('products.weldNeckFlange.description'),
      specifications: [t('products.weldNeckFlange.spec1'), t('products.weldNeckFlange.spec2'), t('products.weldNeckFlange.spec3')],
      image: "/mp31.jpg"
    }
  ]

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
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 font-playfair">
            {t('collections.title')}
            <span className="block text-black"></span>
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
                
                <div className="relative h-96 bg-gray-100">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    className="object-contain"
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
                    <h3 className="text-xl font-bold text-black mb-4">{t('collections.specs')}</h3>
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
                    <button 
                      onClick={() => {
                        addToQuote(selectedProduct)
                        setSelectedProduct(null)
                      }}
                      className="w-full px-6 py-3 bg-black text-white font-semibold tracking-wider hover:bg-gray-800 transition-colors"
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
    </section>
  )
}
