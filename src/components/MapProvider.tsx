import { useMemo, useState } from 'react'
import { MapContext } from './MapContext'
import { Map } from 'leaflet'

export default function MapProvider(props: { children: React.ReactNode }) {
  const [map, setMap] = useState<Map | null>(null)

  const contextValue = useMemo(() => ({ map, setMap }), [map, setMap])

  return (
    <MapContext.Provider value={contextValue}>
      {props.children}
    </MapContext.Provider>
  )
}
