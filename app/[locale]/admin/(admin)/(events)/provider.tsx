'use client';

import { createContext, use, useState } from 'react';

type StepperContextType = {
  steps: number;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const StepperContext = createContext<StepperContextType | null>(null);

export function Provider({
  children,
  steps,
}: React.PropsWithChildren<{ steps: number }>) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepperContext.Provider value={{ steps, currentStep, setCurrentStep }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepper() {
  const stepper = use(StepperContext);

  if (!stepper) throw new Error('Error stepper');

  return stepper;
}
