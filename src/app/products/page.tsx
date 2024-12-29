'use client'

import { motion } from 'framer-motion'
import { CircleDot, ArrowRight } from 'lucide-react'
import Navigation from '../components/Nav'

interface Product {
  id: number
  title: string
  description: string
  image: string
  category: string
  features: string[]
}

const products: Product[] = [
  {
    id: 1,
    title: "NAVI•60 Vein Illuminator",
    description: "Provides an accurate, real-time image of the vas deferens, helping doctors check vein conditions and reducing venipuncture risks.",
    image: "/product3.jpg",
    category: "Diagnostics",
    features: [
      "Real-time vein imaging",
      "Reduced healthcare costs",
      "Improved infection control",
      "Enhanced patient safety"
    ]
  },
  {
    id: 2,
    title: "Advanced Patient Monitors",
    description: "Comprehensive range of monitoring solutions including vital signs monitoring and end-tidal imaging, specially designed for COVID-19 and general patient care.",
    image: "/product2.webp",
    category: "Monitoring",
    features: [
      "Vital signs tracking",
      "End-tidal imaging",
      "Multi-function analysis",
      "COVID-19 specific features"
    ]
  },
  {
    id: 3,
    title: "Clarius HD3 Wireless Ultrasound",
    description: "Third-generation portable ultrasound device, 30% smaller and lighter, delivering best-in-class imaging with AI-powered capabilities.",
    image: "/product1.png",
    category: "Imaging",
    features: [
      "AI-powered imaging",
      "Cloud connectivity",
      "Portable design",
      "Specialty-specific solutions"
    ]
  },
  {
    id: 4,
    title: "Electrosurgical ZERO50",
    description: "50W RF electrosurgical unit designed for monopolar mode operations, providing precise control for surgical procedures.",
    image: "/p8.webp",
    category: "Surgery",
    features: [
      "50W RF power output",
      "Monopolar mode operation",
      "Precise control",
      "Compact design"
    ]
  },
  {
    id: 5,
    title: "MedGyn Cryotherapy System",
    description: "State-of-the-art cryotherapy system with three-position actuator, compatible with both nitrous oxide and carbon dioxide gas.",
    image: "/cryo.png",
    category: "Treatment",
    features: [
      "Three-position actuator",
      "Sterilizable tips available",
      "Dual gas compatibility",
      "Optimal temperature control"
    ]
  },
  {
    id: 6,
    title: "Body Composition BC",
    description: "The new standard in body composition analysis, providing accurate measurements and detailed body composition metrics.",
    image: "/p1.webp",
    category: "Diagnostics",
    features: [
      "Advanced composition analysis",
      "Detailed metrics",
      "Quick results",
      "User-friendly interface"
    ]
  },
  {
    id: 7,
    title: "AV-Heart Care",
    description: "Advanced cardiac care system for managing sudden cardiac arrest, featuring defibrillation capabilities and CPR support.",
    image: "/p3.png",
    category: "Emergency",
    features: [
      "Defibrillation system",
      "CPR support",
      "Emergency response ready",
      "Heart function monitoring"
    ]
  },
  {
    id: 8,
    title: "AV-360D Defibrillator Monitor",
    description: "Complete life support solution with defibrillation, pacing, monitoring, and AED mode, suitable for both pre-hospital and in-hospital use.",
    image: "/p7.jpg",
    category: "Emergency",
    features: [
      "Multiple operation modes",
      "Pre-hospital first aid",
      "In-hospital use",
      "Comprehensive monitoring"
    ]
  },
  {
    id: 9,
    title: "AV-S200 Portable Ventilator",
    description: "Advanced portable ventilator with assist control, offering both invasive and non-invasive ventilation options for versatile patient care.",
    image: "/p4.png",
    category: "Respiratory",
    features: [
      "Assist control feature",
      "Dual ventilation modes",
      "Intuitive control panel",
      "Lightweight design"
    ]
  },
  {
    id: 10,
    title: "NEW ASKIR 230/12V BR",
    description: "Versatile electric suction unit for various body fluid aspirations, featuring multiple power options and non-stop operation capability.",
    image: "/p6.jpeg",
    category: "Suction",
    features: [
      "Triple power options",
      "Non-stop operation",
      "Low battery alarm",
      "IP21 protection"
    ]
  },
  {
    id: 11,
    title: "6000S Emergency Ventilator",
    description: "Compact emergency and transport ventilator with multiple ventilation modes and intelligent voice guidance system.",
    image: "/p5.png",
    category: "Emergency",
    features: [
      "Multiple ventilation modes",
      "Voice guidance system",
      "Long battery life",
      "EN1789 certified"
    ]
  },
  {
    id: 12,
    title: "CPR AED Plus",
    description: "Advanced CPR system following the latest European Resuscitation Council guidelines, featuring Real CPR Help® for optimal life-saving support.",
    image: "/p2.png",
    category: "Emergency",
    features: [
      "Real CPR Help®",
      "ERC guideline compliant",
      "High-quality CPR support",
      "Depth and rate monitoring"
    ]
  }
]

export default function ProductsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const glowVariants = {
    animate: {
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }
  return (
    <> 
      <Navigation />
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative inline-block"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Advanced{" "}
                  <span className="relative inline-block">
                    <span className="text-blue-600">Medical</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="8"
                      fill="none"
                      viewBox="0 0 100 8"
                    >
                      <path
                        stroke="#2563EB"
                        strokeWidth="2"
                        d="M0 6C20 2 40 2 50 3C60 4 80 4 100 6"
                        className="stroke-blue-600"
                      />
                    </svg>
                    <motion.div
                      variants={glowVariants}
                      animate="animate"
                      className="absolute -inset-1 bg-blue-400/20 blur-lg rounded-full"
                      style={{ zIndex: -1 }}
                    />
                  </span>{" "}
                  Equipment
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Discover our comprehensive range of state-of-the-art medical solutions designed for precision diagnostics, patient care, and emergency response
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transform-gpu"
                >
                  <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-blue-600/20 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-blue-600/20 rounded-br-2xl" />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative h-64 overflow-hidden"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </motion.div>
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-6 space-y-4">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-500" />
                    
                    <h3 className="text-xl font-semibold text-gray-900 relative">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed relative text-sm">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-2 relative">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700 text-sm">
                          <CircleDot className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center pt-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              >
                <span>Download Complete Catalog</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>  
  )
}