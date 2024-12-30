'use client'

import { motion, Variants } from 'framer-motion'
import { ChevronRight, CircleDot, ArrowRight } from 'lucide-react'

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
  }
]

export default function ProductsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const glowVariants: Variants = {
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

  const cardVariants: Variants = {
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

  const buttonVariants: Variants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const viewMoreVariants: Variants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const arrowVariants: Variants = {
    rest: { x: 0 },
    hover: { 
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
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
                  <span className="text-sky-600">Medical</span>
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
                      className="stroke-sky-600"
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
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              State-of-the-art medical solutions designed for precision diagnostics and patient care
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transform-gpu"
              >
                <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-sky-600/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-sky-600/20 rounded-br-2xl" />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-64 overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-sky-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="relative p-8 space-y-4">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-500" />
                  
                  <h3 className="text-2xl font-semibold text-gray-900 relative">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 relative">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CircleDot className="w-4 h-4 text-sky-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href="/products"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="relative inline-flex items-center text-sky-600 font-semibold group mt-4 cursor-pointer"
                  >
                    <span className="relative z-10">Learn More</span>
                    <motion.span
                      variants={buttonVariants}
                      className="ml-2 relative z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.span>
                    <span className="absolute inset-0 w-full h-full bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center pt-8">
            <motion.a
              href="/products"
              initial="rest"
              whileHover="hover"
              variants={viewMoreVariants}
              className="inline-flex items-center px-8 py-4 bg-sky-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
              <span>View All Products</span>
              <motion.span variants={arrowVariants} className="ml-2">
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}