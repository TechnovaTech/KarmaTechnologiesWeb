"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    image: "/s1.png",
    title: "Precise CNC Machine Component From Roundbar And Forgings."
  },
  {
    image: "/s2.png",
    title: "Ferrous & Non Ferrous Material Machined Components."
  },
  {
    image: "/s3.png",
    title: "Stainless Steel Components."
  },
  {
    image: "/s4.png",
    title: "Alloy Steel Machined Components."
  }
]

export default function About() {
  return (
    <section id="about" className="relative -mt-12 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              
              <h2 className="text-3xl font-bold text-black mb-6 leading-tight">
                Who We Are
              </h2>

              <div className="space-y-4 text-black leading-relaxed">
                <p >
                  At KARMA MechTech, we specialize in precision CNC machining with a strong focus on quality, accuracy, and reliability.
                  Based in Saint-Laurent, Montréal, our facility is equipped to produce high-tolerance aluminum, steel, and custom metal components.
                </p>

                <p>
                  We support low-volume, complex, and prototype machining with 4-axis and 5-axis capabilities.
                  Our team combines advanced technology with skilled craftsmanship to deliver consistent results.
                </p>

                <p >
                  Every part we produce undergoes thorough inspection to ensure it meets strict industrial standards.
                  We are committed to quick turnaround times, transparent communication, and long-term customer partnerships.
                  At KARMA MechTech, precision isn’t just a service—it’s our identity.”
                </p>

            

              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-120 w-auto overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="Industrial Machinery"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}