'use client'

import React, { useEffect, useRef } from 'react'
import maplibregl, { Marker } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const Map = () => {
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [-70.8955, 42.5180],
      zoom: 9
    })

    const elem = document.createElement('div')
    elem.style.width = "12px"
    elem.style.height = "12px"
    elem.style.backgroundColor = "#3FA17D"
    elem.style.borderRadius = "50%"
    elem.style.border = "2px solid white"
    elem.style.boxSizing = "border-box"

    const marker = new Marker({ element: elem })
      .setLngLat([-70.8955, 42.5180])
      .addTo(map)

    return () => {
      map.remove()
    }
  }, [])


  return (
    <div
      ref={mapRef}
      className="w-full h-70 rounded-lg overflow-hidden"
    />
  )
}

export default Map