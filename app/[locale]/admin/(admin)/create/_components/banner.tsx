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
    <Item className="bg-card" variant="outline">
      <ItemHeader className="border-b pb-2">
        <div className="flex items-center gap-1">
          {PRESETS.map((preset, i) => {
            const isActive = preset.bg === bg && preset.text === text;

            return (
              <button
                key={i}
                type="button"
                onClick={() => updateTheme(preset.bg, preset.text)}
                className="rounded-full p-[2px] transition"
                style={{
                  border: isActive
                    ? `2px solid ${preset.bg}`
                    : '2px solid transparent',
                }}
              >
                <span
                  className="block size-4.5 rounded-full"
                  style={{ backgroundColor: preset.bg }}
                />
              </button>
            );
          })}
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              style={{ backgroundColor: bg, color: text }}
              size="icon-sm"
              variant="outline"
            >
              <PaletteIcon className="size-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-54 space-y-1">
            <div className="flex items-center">
              <label className="font-medium text-xs" htmlFor="bg">
                {t('background')}
              </label>
              <input
                className="m-0 ml-auto size-6"
                type="color"
                value={bg}
                onChange={(e) => updateTheme(e.target.value, text)}
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
                onChange={(e) => updateTheme(bg, e.target.value)}
              />
            </div>
          </PopoverContent>
        </Popover>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>{t('title')}</ItemTitle>
        <ItemDescription>{t('description')}</ItemDescription>
      </ItemContent>
    </Item>
  );
}
