import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to={'/auth'} />;
  }

  return children;
};
