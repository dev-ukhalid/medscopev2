'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'
import type { LatLngTuple } from 'leaflet'

const MapComponent = dynamic(
  () => import('./MapComponent'),
  { ssr: false }
)

const MapSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const position: LatLngTuple = [11.984819, 8.536975]

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900"
          >
            Visit Our{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Location</span>
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
                  className="stroke-sky-500"
                />
              </svg>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Experience our state-of-the-art medical facility in person
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative w-full h-[600px] bg-gray-200 rounded-3xl overflow-hidden"
            >
              <MapComponent position={position} />
              <motion.div
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent pointer-events-none"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:p-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 bg-blue-100 rounded-xl">
                  <MapPin className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600 mt-1">
                    10 Audu Bako Way
                    <br />
                    Opposite Raisins Restaurant
                    <br />
                    Kano, Nigeria
                  </p>
                </div>
              </motion.div>
            </div>  
            <motion.a
              href={`https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}&zoom=16`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors w-full justify-center"
            >
              Get Directions
              <ExternalLink className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MapSection