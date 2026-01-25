'use client';

import { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

type LatLng = [number, number];

interface MapLeafletProps {
  center?: LatLng;
  zoom?: number;
  markers?: LatLng[];
  selectable?: boolean;
  draggable?: boolean;
  onChangeLocation?: (coords: LatLng) => void;
  height?: number | string;
}

function ClickHandler({
  enabled,
  onSelect,
}: {
  enabled?: boolean;
  onSelect?: (coords: LatLng) => void;
}) {
  useMapEvents({
    click(e) {
      if (!enabled || !onSelect) return;
      onSelect([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

export default function MapLeaflet({
  center = [51.505, -0.09],
  zoom = 13,
  markers = [],
  selectable = false,
  draggable = false,
  onChangeLocation,
  height = 200,
}: MapLeafletProps) {
  const [internalMarker, setInternalMarker] = useState<LatLng | null>(null);

  const allMarkers =
    selectable && internalMarker ? [...markers, internalMarker] : markers;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ClickHandler
        enabled={selectable}
        onSelect={(coords) => {
          setInternalMarker(coords);
          onChangeLocation?.(coords);
        }}
      />

      {allMarkers.map((pos, idx) => (
        <Marker
          // biome-ignore lint/suspicious/noArrayIndexKey: <no key>
          key={idx}
          position={pos}
          draggable={draggable}
          eventHandlers={
            draggable
              ? {
                  dragend: (e) => {
                    const m = e.target;
                    const p = m.getLatLng();
                    onChangeLocation?.([p.lat, p.lng]);
                  },
                }
              : undefined
          }
        />
      ))}
    </MapContainer>
  );
}
