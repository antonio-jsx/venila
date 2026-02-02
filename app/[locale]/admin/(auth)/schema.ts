import * as z from 'zod/v4';

export const formLogin = z.object({
  email: z.email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type LoginSchema = z.infer<typeof formLogin>;
