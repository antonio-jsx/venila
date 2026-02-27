'use client';

import { Progress } from '@/components/ui/progress';
import { useStepper } from '../provider';

export function Stepper() {
  const { steps, currentStep } = useStepper();

  const progress = (currentStep * 100) / steps;

  return <Progress value={progress} />;
}
