'use client';

import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

export function MapMarker() {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return <Marker position={position} />;
}
