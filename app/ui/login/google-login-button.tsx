'use client';

import { authenticateOAuth } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';

export const GoogleLoginButton = () => {
  async function handleGoogleClick() {
    try {
      await authenticateOAuth('google');
    } catch (error) {
      console.error('google sign in error', error);
    }
  }

  return (
    <Button className="mt-4 w-full" onClick={handleGoogleClick}>
      Google
    </Button>
  );
};
