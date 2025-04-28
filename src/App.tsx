import { AuthLayout } from './auth/layouts/AuthLayout';
import ChatLayout from './chats/layouts/ChatLayout';
import ChatPage from './chats/pages/ChatPage';

export const App = () => {
  return (
    <>
      {/* <AuthLayout /> */}
      <ChatLayout>
        <ChatPage />
      </ChatLayout>
    </>
  );
};
