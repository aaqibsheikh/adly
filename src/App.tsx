import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContextProvider, NotificationProvider } from 'src/contexts';

import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE as string;

export default function App() {
  const navigate = useNavigate();

  return (
    <AuthContextProvider>
      <NotificationProvider>
        <ToastContainer />

        <AppRouter />
      </NotificationProvider>
    </AuthContextProvider>
  );
}
