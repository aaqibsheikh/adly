import { Route, Routes, useLocation } from 'react-router-dom';
import AppLayout from 'src/layout/AppLayout';
import Home from 'src/pages/Home';
import { useLayoutEffect } from 'react';
import Signup from 'src/pages/Signup';
import Signin from 'src/pages/Signin';
import ForgotPassword from 'src/pages/ForgotPassword';
import OneTimePassword from 'src/pages/OneTimePassword';
import NewPassword from 'src/pages/NewPassword';
import DashboardLayout from 'src/layout/DashboardLayout';
import DashboardHome from 'src/pages/protected/DashboardHome';
import CreateCampaign from 'src/pages/protected/CreateCampaign';
import YourCampaign from 'src/pages/protected/YourCampaign';
import YourAccount from 'src/pages/protected/YourAccount';
import AccountSetup from 'src/pages/protected/AccountSetup';
import CreativeDevelopers from 'src/pages/protected/CreativeDevelopers';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    const mainElement = document.getElementById('app-layout-main');

    if (mainElement) {
      mainElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return children;
};

export default function AppRouter() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/one-time-password" element={<OneTimePassword />} />
          <Route path="/new-password" element={<NewPassword />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="create-campaign" element={<CreateCampaign />} />
          <Route path="your-campaign" element={<YourCampaign />} />
          <Route path="your-account" element={<YourAccount />} />
          <Route path="account-setup" element={<AccountSetup />} />
          <Route path="creative-developers" element={<CreativeDevelopers />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}
