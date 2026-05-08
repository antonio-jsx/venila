'use client';

import { formLogin, type LoginSchema } from '@/app/admin/(auth)/schema';
import { SaveAction } from '@/components/buttons/save-action';
import { FormField } from '@/components/form-field';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

export function Login() {
  const t = useTranslations('signin');

  const form = useForm({
    resolver: zodResolver(formLogin),
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(data: LoginSchema) {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: '/admin',
    });

    if (error) {
      alert(error.message);
    }
  }

  return (
    <form className="space-y-2.5" onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        control={form.control}
        label={t('form.email')}
        name="email"
        render={(field) => <Input {...field} />}
      />

      <FormField
        control={form.control}
        label={t('form.password')}
        name="password"
        render={(field) => <Input {...field} type="password" />}
      />

      <SaveAction state={form.formState.isSubmitting} text={t('button')} />
    </form>
  );
}
