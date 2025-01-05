/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RedirectLoginOptions, LogoutOptions } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import { IProvider, Profile } from 'src/types';
import { getFromLocalStorage, removeFromLocalStorage } from 'src/utils';
import { AppConfig } from 'src/types/app-config';
import { useHttp, useNotification } from 'src/hooks';

interface IAuthContext {
  isLoadingAuth0: boolean;
  isFetchingProfile: boolean;
  accessToken: string;
  profile: Profile;
  setAccessToken: (token: string) => void;
  loginWithRedirect: (options?: RedirectLoginOptions | undefined) => Promise<void>;
  saveProfile: (profile: unknown) => void;
  logout: (options?: LogoutOptions | undefined) => void;
  fetchProfile: () => void;
  fetchAppConfig: () => void;
  userAuth0?: Record<string, any>;
  appConfig: AppConfig | null;
  customLogoutHandler: () => void;
}

export const AuthContext = React.createContext<IAuthContext>({
  isLoadingAuth0: false,
  isFetchingProfile: false,
  accessToken: '',
  profile: null,
  saveProfile: profile => {},
  setAccessToken: token => {},
  loginWithRedirect: options => new Promise(() => {}),
  logout: options => new Promise(() => {}),
  fetchProfile: () => {},
  fetchAppConfig: () => {},
  appConfig: null,
  customLogoutHandler: () => {},
});

export const AuthContextProvider = ({ children }: IProvider) => {
  const {
    // isAuthenticated,
    user: userAuth0,
    isLoading: isLoadingAuth0,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const [accessToken, setAccessToken] = useState('');
  const [profile, setProfile] = useState<Profile>(null);
  const [appConfig, setAppConfig] = useState<AppConfig | null>(null);

  const { pathname } = useLocation();
  const notify = useNotification();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const user = getFromLocalStorage(
  //     `@@auth0spajs@@::${process.env.REACT_APP_AUTH0_CLIENT_ID}::${process.env.REACT_APP_AUTH0_AUDIENCE}::openid profile email`,
  //   );
  //
  //   if (isAuthenticated && user) {
  //     const parsedBody = JSON.parse(user);
  //     setAccessToken(parsedBody.body.access_token);
  //   } else {
  //     setAccessToken('');
  //   }
  // }, [isAuthenticated]);

  useEffect(() => {
    const user = getFromLocalStorage(`::@@xploriusJwtAuthspajs@@::`);

    if (user) {
      const parsedBody = JSON.parse(user);
      const currentTime = new Date().getTime();
      const expiredAt = new Date(parsedBody.expiredAt).getTime();

      if (currentTime >= expiredAt) {
        removeFromLocalStorage('::@@xploriusJwtAuthspajs@@::');
        setAccessToken('');
        navigate('/login');
      } else {
        setAccessToken(parsedBody.accessToken);
      }
    } else {
      setAccessToken('');
    }
  }, []);

  const saveProfile = (profile: unknown) => setProfile(profile as Profile);

  const {
    isLoading: isFetchingProfile,
    sendRequest: requestProfile,
    error: isFetchingProfileError,
  } = useHttp();

  // todo move to separate root app-context
  const { sendRequest: requestConfig } = useHttp();

  const { sendRequest: getAdminProfile } = useHttp();
  const fetchAppConfig = () =>
    requestConfig({ url: 'configuration', accessToken }, (config: unknown) =>
      setAppConfig(config as AppConfig),
    );

  const fetchProfile = () => requestProfile({ url: 'user/info', accessToken }, saveProfile);
  useEffect(() => {
    if (accessToken && !pathname.includes('activate')) {
      void fetchAppConfig();
    }
  }, [accessToken]);

  useEffect(() => {
    if (!appConfig) return;

    // if (!appConfig?.isApproved && appConfig?.isApproved === undefined && (!pathname.includes('questionary'))) {
    //   navigate('/approval');
    // }

    if (appConfig?.isRegistered) {
      return void fetchProfile();
    }

    // if (appConfig?.isAdmin) {
    //   return void getAdminProfile({ url: 'admin/create', accessToken }, saveProfile);
    // }

    // if (!pathname.includes('questionary')) {
    //   navigate('/sign-up/borrower');
    // }
  }, [appConfig]);

  useEffect(() => {
    if (isFetchingProfileError && !pathname.includes('sign-up')) {
      notify(isFetchingProfileError, 'error');
    }
  }, [isFetchingProfileError]);

  useEffect(() => {
    if (!profile) return;

    // if (pathname === '/') {
    //   if (profile?.account.type === 'Borrower')
    //     navigate('/company') // todo what the platform entry point?
    //   else if (profile?.account.type === 'Lender')
    //     navigate('/deal-feed') // todo what the platform entry point?
    // }
  }, [profile]);

  const customLogoutHandler = () => {
    window.localStorage.clear();
    localStorage.removeItem('jwt');
    navigate('/');
    setAccessToken('');
  };

  return (
    <AuthContext.Provider
      value={{
        isFetchingProfile,
        isLoadingAuth0,
        accessToken,
        profile,
        loginWithRedirect,
        logout,
        saveProfile,
        setAccessToken,
        fetchProfile,
        fetchAppConfig,
        userAuth0,
        appConfig,
        customLogoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
