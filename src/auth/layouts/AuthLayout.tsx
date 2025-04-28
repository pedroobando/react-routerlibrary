import { FC } from 'react';
import LoginPage from '@/auth/pages/LoginPage';

export const AuthLayout: FC = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginPage />
      </div>
    </div>
  );
};
