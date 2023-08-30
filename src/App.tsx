import ControlBar from './components/ControlBar'
import LeafletMap from './components/LeafletMap'

function App() {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex h-full w-[1200px] flex-col items-center justify-center gap-4">
        <h1 className="text-3xl">Leaflet Demo</h1>
        <LeafletMap />
        <ControlBar />
      </div>
    </div>
  )
}

export default App
