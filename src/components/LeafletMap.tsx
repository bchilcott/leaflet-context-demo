import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useMapContext } from './MapContext'

export default function LeafletMap() {
  const { setMap } = useMapContext()

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      className="h-[800px] w-full"
      zoomControl={false}
      attributionControl={false}
      ref={setMap}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}
