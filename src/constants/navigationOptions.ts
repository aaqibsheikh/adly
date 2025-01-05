export enum NAV_ACTIONS {
  SIGN_UP,
  LOG_IN,
  OPEN_EMAIL_CONFIRMATION,
  OPEN_CREATE_PASSWORD,
  OPEN_DASHBOARD,
}

export const myDealsMenuOptions = [
  { name: 'snapshot', url: '/my-deals/snapshot' },
  { name: 'liveDeals', url: 'my-deals/live-deals' },
  { name: 'pendingDeals', url: 'my-deals/pending-deals' },
  { name: 'completed', url: 'my-deals/completed' },
  { name: 'dealRoom', url: 'my-deals/deal-room' },
];

export const myAccountMenuOptions = [
  { name: 'profile', url: '/my-account/profile' },
  { name: 'questionnaire', url: '/my-account/questionnaire' },
  { name: 'integrations', url: '/my-account/integrations' },
  { name: 'identityVerification', url: '/my-account/identity-verification' },
  { name: 'paymentGateway', url: '/my-account/payment-gateway' },
  { name: 'termsOfBusiness', url: '/my-account/terms-of-business' },
  { name: 'settings', url: '/my-account/settings' },
];

export const SideBarSubmenus: Record<string, { name: string; url: string }[]> = {
  myDeals: myDealsMenuOptions,
  myAccount: myAccountMenuOptions,
};
