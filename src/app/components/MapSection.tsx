'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const MapSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  // Updated coordinates for NO. 14 Murtala Mohammed Way, Kano
  const position = [11.991643, 8.533814]

  // Custom SVG marker icon
  const customIcon = L.divIcon({
    className: 'custom-pin',
    html: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C16.268 4 10 10.268 10 18c0 12 14 26 14 26s14-14 14-26c0-7.732-6.268-14-14-14z" 
        fill="#2563EB" 
        stroke="white" 
        stroke-width="2"
      />
      <circle cx="24" cy="18" r="7" fill="white"/>
    </svg>`,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48]
  })

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
              <span className="text-blue-600">Location</span>
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
              <MapContainer 
                center={position} 
                zoom={16} 
                style={{ height: '100%', width: '100%', borderRadius: '1.5rem' }}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  className="map-tiles"
                />
                <Marker position={position} icon={customIcon}>
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-semibold">MedEquip Headquarters</h3>
                      <p className="text-sm">
                        NO. 14 Murtala Mohammed Way
                        <br />
                        Opposite Kano Golf Club
                        <br />
                        Kano State, Nigeria
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
              <motion.div
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none"
              />
            </motion.div>
          </motion.div>

          {/* Rest of the component remains the same */}
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
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600 mt-1">
                    NO. 14 Murtala Mohammed Way
                    <br />
                    Opposite Kano Golf Club
                    <br />
                    Kano State, Nigeria
                  </p>
                </div>
              </motion.div>
            </div>  
            <motion.a
              href={`https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}&zoom=16`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors w-full justify-center"
            >
              Get Directions
              <ExternalLink className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .leaflet-container {
          z-index: 1;
        }
        .map-tiles {
          filter: hue-rotate(10deg) saturate(120%);
        }
        .leaflet-popup-content-wrapper {
          border-radius: 1rem;
        }
        .leaflet-popup-tip-container {
          margin-top: -1px;
        }
        .custom-pin {
          background: none;
          border: none;
          width: 48px !important;
          height: 48px !important;
        }
      `}</style>
    </section>
  )
}

export default MapSection