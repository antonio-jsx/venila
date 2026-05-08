'use client';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import type { ComponentProps } from 'react';

type ButtonSendProps = ComponentProps<typeof Button> & {
  text?: string;
  state: boolean;
};

export function SaveAction({
  children,
  state,
  disabled,
  size = 'sm',
  text,
  ...props
}: ButtonSendProps) {
  return (
    <Button disabled={state || disabled} size={size} type="submit" {...props}>
      {state && <Spinner />}
      {text || children}
    </Button>
  );
}
