import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { AuthLayout } from '@/auth/layouts/AuthLayout';
import NotFound404Page from '@/auth/pages/NotFound404Page';
import LoginPage from '@/auth/pages/LoginPage';
import { sleep } from '@/lib/sleep';
import { Spinner } from '@/components/Spinner';

// import RegisterPage from '@/auth/pages/RegisterPage';
// import ChatLayout from '@/chats/layouts/ChatLayout';
// import ChatPage from '@/chats/pages/ChatPage';

const RegisterPage = lazy(() => import('@/auth/pages/RegisterPage'));

const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import('@/chats/layouts/ChatLayout');
});

const ChatPage = lazy(() => import('@/chats/pages/ChatPage'));
const NoChatSelectedPage = lazy(() => import('@/chats/pages/NoChatSelectedPage'));

const AppRouter = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <NotFound404Page />,
    children: [
      {
        // path: '/auth/login',
        index: true,
        element: <LoginPage />,
      },
      {
        path: '/auth/register',
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: '/chat',
    element: (
      <Suspense fallback={<Spinner />}>
        <ChatLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <NoChatSelectedPage />,
      },
      {
        path: '/chat/:clientId',
        element: <ChatPage />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/auth" />,
  },
  {
    path: '*',
    element: <NotFound404Page />,
  },
]);

export default AppRouter;
