import React, { useCallback, useEffect, useState } from 'react'
import { useMapContext } from './MapContext'

export default function ControlBar() {
  const { map } = useMapContext()
  const [position, setPosition] = useState(() => map?.getCenter())
  const [zoom, setZoom] = useState(() => map?.getZoom())

  const reset = useCallback(() => {
    map?.setView([51.505, -0.09], 13)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map?.getCenter())
  }, [map])

  const onZoom = useCallback(() => {
    setZoom(map?.getZoom())
  }, [map])

  useEffect(() => {
    map?.on('move', onMove)
    return () => {
      map?.off('move', onMove)
    }
  }, [map, onMove])

  useEffect(() => {
    map?.on('zoom', onZoom)
    return () => {
      map?.off('zoom', onZoom)
    }
  }, [map, onZoom])

  return (
    <div className="flex w-full gap-4">
      <ControlButton onClick={() => map?.zoomIn()}>Zoom In</ControlButton>
      <ControlButton onClick={() => map?.zoomOut()}>Zoom Out</ControlButton>
      <ControlButton onClick={reset}>Reset</ControlButton>
      <InfoDisplay>Zoom: {zoom}</InfoDisplay>
      <InfoDisplay>Lat: {position?.lat.toFixed(4)}</InfoDisplay>
      <InfoDisplay>Lon: {position?.lng.toFixed(4)}</InfoDisplay>
    </div>
  )
}

function ControlButton(props: {
  children: React.ReactNode
  onClick?: React.ReactEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className="rounded bg-blue-600 px-2 py-1 transition-colors hover:bg-blue-700"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

function InfoDisplay(props: { children: React.ReactNode }) {
  return <div className="rounded bg-gray-700 px-2 py-1">{props.children}</div>
}
