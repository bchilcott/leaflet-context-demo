import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import './index.css'
import MapProvider from './components/MapProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapProvider>
      <App />
    </MapProvider>
  </React.StrictMode>,
)
