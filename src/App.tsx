import { RouterProvider } from 'react-router';
import AppRouter from './router/AppRouter';

export const App = () => {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
};
