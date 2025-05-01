import { FC } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Spinner: FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-center h-screen ', className)}>
      <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
    </div>
  );
};
