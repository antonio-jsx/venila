'use client';

import type { EventSchema } from '@/admin/events/schema';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Marker, useMapEvents } from 'react-leaflet';

export function MapMarker() {
  const { setValue } = useFormContext<EventSchema>();
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      setValue('address', `&lat=${e.latlng.lat}&lon=${e.latlng.lng}`, {
        shouldValidate: true,
      });
    },
  });

  return <Marker position={position} />;
}
