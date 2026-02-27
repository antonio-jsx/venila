import * as z from 'zod/v4';

export const mpSchema = z.object({
  publicKey: z.string().min(1),
  accessToken: z.string().min(1),
});

export type MpSchema = z.infer<typeof mpSchema>;
