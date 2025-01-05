export interface AppConfig {
  type: string;
  featureFlags: FeatureFlag[];
  isAdmin: boolean;
  isRegistered: boolean;
  isApproved: boolean;
  isSurveyCompleted: boolean;
}

export interface FeatureFlag {
  "isActive": boolean,
  "name": string,
}