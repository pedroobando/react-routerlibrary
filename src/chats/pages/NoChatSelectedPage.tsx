import { FC } from 'react';
import { AlertCircle } from 'lucide-react';

const NoChatSelectedPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AlertCircle className="text-gray-400 h-16 w-16 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-700">No chat selected</h1>
      <p className="text-gray-500">Please select a chat to start messaging</p>
    </div>
  );
};

export default NoChatSelectedPage;
