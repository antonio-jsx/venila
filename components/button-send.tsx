'use client';

import { Button } from '@/ui/button';
import { Spinner } from '@/ui/spinner';
import type { ComponentProps } from 'react';

type ButtonSendProps = ComponentProps<typeof Button> & {
  state: boolean;
};

export function ButtonSend({
  children,
  state,
  disabled,
  ...props
}: ButtonSendProps) {
  return (
    <Button type="submit" size="sm" disabled={state || disabled} {...props}>
      {state && <Spinner />}
      {children}
    </Button>
  );
}
