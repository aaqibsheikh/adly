import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ACTIONS } from 'src/constants';

interface INavTools {
  navigateBack: () => void;
  navigateToSignup: () => void;
  navigateConfirmEmail: () => void;
  getUrl: (
    action: keyof typeof NAV_ACTIONS,
    params?: Record<string, string | number | boolean>,
  ) => string;
  pathname: string;
  search: string;
  state: unknown;
}

// TODO: Refactoring

export function useNavigation(): INavTools {
  const { pathname, search, state } = useLocation();
  const navigate = useNavigate();

  return useMemo(() => {
    const navigateBack = () => navigate(-1);
    const navigateToSignup = () => navigate('/');
    const navigateConfirmEmail = () => navigate('/confirm-email');

    const getUrl = (
      action: keyof typeof NAV_ACTIONS,
      params?: Record<string, string | number | boolean>,
    ) => {
      switch (action) {
        case 'LOG_IN':
          return '/log-in';
        case 'SIGN_UP':
          return '/sign-up';
        case 'OPEN_DASHBOARD':
          return '/profile';
        case 'OPEN_EMAIL_CONFIRMATION':
          return '/confirm-email';
        case 'OPEN_CREATE_PASSWORD':
          return '/create-password';

        default:
          throw new Error('Invalid url');
      }
    };

    return {
      navigateBack,
      navigateToSignup,
      navigateConfirmEmail,
      getUrl,
      pathname,
      search,
      state,
    };
  }, [pathname, search, state]);
}
