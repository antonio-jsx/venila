'use client';

import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import type { ControllerRenderProps } from 'react-hook-form';

interface Props {
  field: ControllerRenderProps;
  min?: number;
  max?: number;
}

export function QuantityField({ field, min = 0, max }: Props) {
  const value = field.value ?? 0;

  const decrease = () => {
    if (value > min) {
      field.onChange(value - 1);
    }
  };

  const increase = () => {
    if (max === undefined || value < max) {
      field.onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        disabled={value <= min}
        onClick={decrease}
        size="icon-xs"
        type="button"
        variant="outline"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <p className="rounded-full bg-input px-2.5 py-1">{value}</p>

      <Button
        disabled={max !== undefined && value >= max}
        onClick={increase}
        size="icon-xs"
        type="button"
        variant="outline"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
