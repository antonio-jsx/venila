import 'dotenv/config';
import { auth } from '@/lib/auth';

const main = async (): Promise<void> => {
  const internalAdapter = (await auth.$context).internalAdapter;
  const password = (await auth.$context).password;

  const exists = await internalAdapter.findUserByEmail(process.env.USER_EMAIL!);

  if (exists) {
    console.log(`this email exist`);
    process.exit(0);
    return;
  }

  const user = await internalAdapter.createUser({
    email: process.env.USER_EMAIL!,
    emailVerified: true,
    role: 'admin',
    name: process.env.USER_NAME!,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await internalAdapter.linkAccount({
    accountId: user.id,
    providerId: 'credential',
    password: await password.hash(process.env.USER_PASSWORD!),
    userId: user.id,
  });

  process.exit(0);
};

void main();
