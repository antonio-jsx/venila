'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={toggleTheme} size="icon-sm" variant="ghost">
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
