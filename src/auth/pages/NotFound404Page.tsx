import { FC } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileQuestion } from 'lucide-react';

const NotFound404Page: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="max-w-md w-full px-4 py-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 blur-lg"></div>
            <div className="relative bg-background rounded-full p-4">
              <FileQuestion className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight mb-2">404</h1>
        <h2 className="text-2xl font-bold tracking-tight mb-4">Página no encontrada</h2>

        <p className="text-muted-foreground mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <Button asChild size="lg" className="gap-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound404Page;
