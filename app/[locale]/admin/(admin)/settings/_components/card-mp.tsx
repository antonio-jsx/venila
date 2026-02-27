'use client';

import { MercadoPago } from '@/admin/settings/_components/icon/mp';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useMP } from '@/hooks/mp';
import { useTranslations } from 'next-intl';

export function CardMercadopago() {
  const t = useTranslations('admin.settings.payments.mercadopago');

  const { openModal } = useMP();

  return (
    <Card>
      <div className="ml-4 flex size-8 items-center justify-center rounded-lg bg-yellow-500/20">
        <MercadoPago className="size-6" />
      </div>
      <CardHeader>
        <CardTitle>Mercado Pago</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" size="sm" onClick={openModal}>
          {t('button')}
        </Button>
      </CardFooter>
    </Card>
  );
}
