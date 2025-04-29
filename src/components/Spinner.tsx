import { FC } from 'react';
import { Loader2 } from 'lucide-react';

export const Spinner: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
    </div>
  );
};
