import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AuthLayout } from '@/auth/layouts/AuthLayout';
import NotFound404Page from '@/auth/pages/NotFound404Page';
import LoginPage from '@/auth/pages/LoginPage';
import { sleep } from '@/lib/sleep';
import { Spinner } from '@/components/Spinner';
import { PrivateRoute } from '@/auth/components/PrivateRoute';
import { useQuery } from '@tanstack/react-query';
import { checkAuth } from '@/chats/fake/fake-data';

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

// const AppRouter = createBrowserRouter([
//   {
//     path: '/auth',
//     element: <AuthLayout />,
//     errorElement: <NotFound404Page />,
//     children: [
//       {
//         // path: '/auth/login',
//         index: true,
//         element: <LoginPage />,
//       },
//       {
//         path: '/auth/register',
//         element: <RegisterPage />,
//       },
//     ],
//   },

//   {
//     path: '/chat',
//     element: (
//       <Suspense fallback={<Spinner />}>
//         <PrivateRoute isAuthenticated={!!verificToken()}>
//           <ChatLayout />
//         </PrivateRoute>
//       </Suspense>
//     ),
//     children: [
//       {
//         index: true,
//         element: <NoChatSelectedPage />,
//       },
//       {
//         path: '/chat/:clientId',
//         element: <ChatPage />,
//       },
//     ],
//   },
//   {
//     path: '/',
//     element: <Navigate to="/auth" />,
//   },
//   {
//     path: '*',
//     element: <NotFound404Page />,
//   },
// ]);

const AppRouter = () => {
  const {
    data: user,
    // isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      return checkAuth(token);
    },
    // staleTime: 1000 * 60 * 2,
    retry: 2,
  });

  if (isError) {
    // throw new Error(error.message);
    console.log(error.message);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense fallback={<Spinner />}>
              <PrivateRoute isAuthenticated={!!user}>
                <ChatLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>

        <Route path="*" element={<Navigate to={'/auth'} />} />
        <Route path="/" element={<Navigate to={'/auth'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
