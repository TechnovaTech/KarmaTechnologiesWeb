"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    icon: "🔧",
    title: "Precise CNC Machine Component From Roundbar And Forgings."
  },
  {
    icon: "⚙️", 
    title: "Ferrous & Non Ferrous Material Machined Components."
  },
  {
    icon: "🔩",
    title: "Stainless Steel Components."
  },
  {
    icon: "🏭",
    title: "Alloy Steel Machined Components."
  }
]

export default function About() {
  return (
    <section id="about" className="relative -mt-32 z-20">
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
                About Karma Technologies
              </h2>
              
              <div className="space-y-4 text-black leading-relaxed">
                <p >
                  Karma Technologies is one of the leading manufacturers of precision machined 
                  components based in Canada. The company was founded 
                  with the vision and commitment to provide excellent quality products and 
                  services to customers. We are precision engineering company with range 
                  of finest cnc machines in India.
                </p>
                
                <p>
                  We are delighted to offer authentic CNC parts, industrial components, and 
                  much more in addition to our practical experience in machine repair. The 
                  whole range of the cut, band, and bore operations, as well as many more 
                  specialized machine types including wide belt sanders, boring machines, 
                  dowel inserters, tenoners, molders, and profilers, are all areas in which we 
                  have experience in CNC equipment.
                </p>
                
                <p >
                  Our state-of-the-art manufacturing facility is equipped with advanced CNC 
                  machinery and cutting-edge technology. We maintain strict quality control 
                  standards throughout our production process to ensure that every component 
                  meets the highest industry specifications and customer requirements.
                </p>
                
                <p >
                  With years of experience in precision engineering, we serve various industries 
                  including automotive, aerospace, industrial machinery, and custom manufacturing. 
                  Our skilled team of engineers and technicians work closely with clients to 
                  deliver tailored solutions that exceed expectations.
                </p>

              </div>
              
              <div className="mt-6">
                <a href="/about" className="inline-block px-6 py-3 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Learn More
                </a>
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
              <div className="relative h-200 w-auto overflow-hidden">
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