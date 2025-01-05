import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { FeatureFlag } from '../types';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts';

type Props = {
  isAccess: boolean;
  isApproved?: boolean | undefined;
  redirectPath?: string;
  featureFlag?: string;
};

export default function ProtectedRoute({ isAccess, isApproved, redirectPath = '/', featureFlag }: Props) {
  const { appConfig } = useContext(AuthContext);
  const [featureEnabled, setFeatureEnabled] = useState(false);
  // todo should be moved to app config context
  const [appConfigLoaded, setAppConfigLoaded] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (appConfig && featureFlag && isApproved) {
      setFeatureEnabled(isFeatureActive(featureFlag));
      setAppConfigLoaded(true);
    }
  }, [appConfig, featureFlag])

  // TODO: create a hook with this function .
  const isFeatureActive = (name: string): boolean => {
    const feature = appConfig?.featureFlags.find((item: FeatureFlag) => item.name === name);
    if (feature) {
      return feature.isActive;
    }
    return false;
  }
  if (!isAccess) {
    return <Navigate to={redirectPath} replace />;
  }

  if (
    appConfig !== null &&
    (!appConfig?.isApproved || appConfig?.isApproved === undefined) &&
    !(pathname.includes('questionary') || pathname.includes('sign-up') || pathname.includes('congratulations') || pathname.includes('activate'))
  ) {
    return <Navigate to={redirectPath} replace />;
  }

  return featureFlag ? featureEnabled ? <Outlet /> : appConfigLoaded ? <Navigate to={redirectPath} replace /> : <>Loading</> : <Outlet />;
}
