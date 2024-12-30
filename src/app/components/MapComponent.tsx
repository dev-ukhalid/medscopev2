'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import type { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapComponentProps {
  position: LatLngTuple
}

const MapComponent = ({ position }: MapComponentProps) => {
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
    <>
      <MapContainer 
        center={position} 
        zoom={16} 
        scrollWheelZoom={false}
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
    </>
  )
}

export default MapComponent