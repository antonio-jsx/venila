import { Login } from '@/app/admin/(auth)/_components/login';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('signin');
  return { title: t('title') };
}

export default async function SigninPage() {
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
