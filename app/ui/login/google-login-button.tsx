'use client';

import { Button } from '@/app/ui/button';
import { signIn } from 'next-auth/react';

export const GoogleLoginButton = () => {
  return (
    <Button
      className="mt-4 w-full"
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
    >
      Google
    </Button>
  );
};
