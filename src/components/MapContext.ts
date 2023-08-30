import { createContext, useContext } from 'react'
import { Map } from 'leaflet'

type MapContextType = {
  map: Map | null
  setMap: React.Dispatch<React.SetStateAction<Map | null>>
}

export const MapContext = createContext<MapContextType>({
  map: null,
  setMap: () => {},
})
export const useMapContext = () => useContext(MapContext)
