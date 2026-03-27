import { Login } from '@/app/admin/(auth)/_components/login';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { locale as rootLocale } from 'next/root-params';
import type { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function SigninPage() {
  setRequestLocale((await rootLocale()) as Locale);
  const t = await getTranslations('signin');

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
