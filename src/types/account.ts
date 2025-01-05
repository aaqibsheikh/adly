export type AccountType = 'borrower' | 'lender' | 'partner';
export type LenderType = 'retail' | 'institutional';

export enum PartnerType {
  AngelInvestor = 'Angel Investor',
  Accelerator = 'Accelerator or Incubator',
  VentureCapitalist = 'Venture Capitalist',
  Other = 'Other',
}

export interface IAccountResponse {
  email: string;
  name: string;
  id: string;
  status: string;
  role: IRoleType;
}

export interface IRoleType {
  id: number;
  name: string;
}

export enum ERoles {
  USER_ROLE = 'User',
  SUPER_USER_ROLE = 'SuperUser',
  ADMIN_ROLE = 'Admin',
  OWNER_ROLE = 'Owner',
  DEACTIVATED = 'Deactivated',
  INVITED = 'Invited',
  SIGNATORY = 'Signatory',
  MANAGER = 'Manager',
  VIEWER = 'Viewer',
}

export enum EStatuses {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  SUSPENDED = 'Suspended',
}

export interface ICompany {
  id: string;
  logo: null | string;
  legalEntityName: null | string;
  legalEntityType: null | string;
  companyName: string;
  companyNumber: null | number
  description: null | string;
  website: null | string;
  companyAge: null | number;
  location: null | string;
  industryGroups: null | string;
  peopleQuantity: null | number;
  mrr: null | number;
  debtRatio: null | number;

  businessRegistrationNumber: null | string;
  taxIdentificationNumber: null | string;
  legalEntityIdentifier: null | string;
  legalForm: null | string;
  TradeName: null | string;
  incorporationDate: null;
  countryOfIncorporation: null | string;
  addressLine1: null | string;
  addressLine2: null | string;
  city: null | string;
  region: null | string;
  postalCode: null | string;
  privacy: false | boolean;
}
