import { FC } from 'react';
import { User } from 'lucide-react';

export const NoContactSelected: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <User className="text-gray-400 h-16 w-16 mb-4" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-700">No chat selected</h1>
        <p className="text-gray-500">Por favor seleccione un cliente para iniciar conversación</p>
      </div>
    </div>
  );
};
