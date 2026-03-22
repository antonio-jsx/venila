'use client';

import { Button } from '@/components/ui/button';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from '@/components/ui/item';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { PaletteIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

const PRESETS = [
  { bg: '#6366f1', text: '#ffffff' },
  { bg: '#0f172a', text: '#ffffff' },
  { bg: '#f59e0b', text: '#000000' },
  { bg: '#10b981', text: '#ffffff' },
  { bg: '#ef4444', text: '#ffffff' },
  { bg: '#e5e7eb', text: '#000000' },
];

function parseTheme(value?: string) {
  if (!value) return { bg: '#6366f1', text: '#ffffff' };
  const [bg, text] = value.split(',');
  return {
    bg: bg || '#6366f1',
    text: text || '#ffffff',
  };
}

export function Banner() {
  const t = useTranslations('admin.events.form.theme');

  const { watch, setValue } = useFormContext();
  const themeValue = watch('theme');
  const { bg, text } = useMemo(() => parseTheme(themeValue), [themeValue]);

  const updateTheme = (newBg: string, newText: string) => {
    setValue('theme', `${newBg},${newText}`, {
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <Item className="bg-card p-0" variant="outline">
      <ItemHeader
        className="relative flex h-16 w-full flex-col items-center justify-center rounded-t-md transition-colors"
        style={{ backgroundColor: bg, color: text }}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="bg-white/20 hover:bg-white/30 dark:hover:bg-white/30"
              style={{ color: text }}
              size="sm"
              variant="ghost"
            >
              <PaletteIcon className="mr-1 h-4 w-4" />
              {t('btn_theme')}
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-54 space-y-1.5">
            <p className="font-medium text-xs">{t('example')}</p>
            <div className="grid grid-cols-6 gap-1">
              {PRESETS.map((preset, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => updateTheme(preset.bg, preset.text)}
                  className="size-6 rounded-md"
                  style={{ backgroundColor: preset.bg }}
                />
              ))}
            </div>

            <div className="flex items-center">
              <label className="font-medium text-xs" htmlFor="bg">
                {t('background')}
              </label>
              <input
                className="m-0 ml-auto size-6"
                type="color"
                value={bg}
                onChange={(e) => updateTheme(e.target.value, bg)}
              />
            </div>

            <div className="flex items-center">
              <label className="font-medium text-xs" htmlFor="text">
                {t('text')}
              </label>
              <input
                className="m-0 ml-auto size-6"
                type="color"
                value={text}
                onChange={(e) => updateTheme(e.target.value, text)}
              />
            </div>
          </PopoverContent>
        </Popover>
        <div
          className="absolute right-2 bottom-2 size-4 rounded-sm"
          style={{ backgroundColor: text }}
        />
      </ItemHeader>

      <ItemContent className="px-3 pb-2">
        <ItemTitle>{t('title')}</ItemTitle>
        <ItemDescription>{t('description')}</ItemDescription>
      </ItemContent>
    </Item>
  );
}
