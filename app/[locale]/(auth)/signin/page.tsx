import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Login } from '../_components/login';
import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function SigninPage({ params }: PageProps<'/[locale]/signin'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations('signin');

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <CardDescription>{t('describe')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Login />
      </CardContent>
    </Card>
  );
}
