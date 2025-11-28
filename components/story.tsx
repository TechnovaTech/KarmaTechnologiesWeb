"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Story() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} id="story" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary mb-4 text-sm tracking-widest">PRECISION MANUFACTURING</h2>
          <h3 className="text-foreground font-playfair font-bold text-4xl">
            Our vision is to be recognized by all its customers as a world-class business.
          </h3>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="space-y-24">
          {/* Story Item 1 */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{ y }}>
            <motion.div style={{ opacity }} className="relative aspect-square overflow-hidden rounded-sm">
              <Image src="/precision-manufacturing-process.jpg" alt="Manufacturing process" fill className="object-cover" />
            </motion.div>
            <motion.div style={{ opacity }} className="space-y-6">
              <h4 className="text-2xl font-playfair text-foreground font-bold">Accuracy</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                We maintain the highest standards of precision in every component we produce. Our advanced machinery and
                quality control systems ensure consistent excellence.
              </p>
              <div className="w-12 h-px bg-primary" />
              <p className="text-gray-600 text-base">
                Every measurement is verified multiple times throughout the manufacturing process.
              </p>
            </motion.div>
          </motion.div>

          {/* Story Item 2 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            style={{ y: useTransform(scrollYProgress, [0.2, 1], [80, -80]) }}
          >
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0, 1, 1, 0]) }}
              className="space-y-6 order-2 md:order-1"
            >
              <h4 className="text-2xl font-playfair text-foreground font-bold">Reduced Human Error</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our state-of-the-art automation systems minimize human error and ensure consistent quality across all
                batches. Precision machinery works alongside our skilled operators.
              </p>
              <div className="w-12 h-px bg-primary" />
              <p className="text-gray-600 text-base">
                Advanced quality assurance protocols catch any discrepancies immediately.
              </p>
            </motion.div>
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0, 1, 1, 0]) }}
              className="relative aspect-square overflow-hidden order-1 md:order-2 rounded-sm"
            >
              <Image src="/precision-machinery-automation.jpg" alt="Modern machinery" fill className="object-cover" />
            </motion.div>
          </motion.div>

          {/* Story Item 3 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            style={{ y: useTransform(scrollYProgress, [0.4, 1], [60, -100]) }}
          >
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0.4, 0.65, 0.9, 1], [0, 1, 1, 0]) }}
              className="relative aspect-square overflow-hidden rounded-sm"
            >
              <Image src="/industrial-component-detail.jpg" alt="Industrial components" fill className="object-cover" />
            </motion.div>
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0.4, 0.65, 0.9, 1], [0, 1, 1, 0]) }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-playfair text-foreground font-bold">Speed & Versatility</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                We deliver rapid turnaround times without compromising quality. Our flexible manufacturing processes
                adapt to your specific requirements and timelines.
              </p>
              <div className="w-12 h-px bg-primary" />
              <p className="text-gray-600 text-base">
                From prototypes to mass production, we handle projects of any scale with expertise.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
