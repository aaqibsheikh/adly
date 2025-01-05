export interface INotification {
  title: string;
  message: string;
  type: string | null;
  iconType: string;
  actionType: string;
  actionPayload: {
    text: string;
    urlType: string;
    url: string;
  },
  actionTaken: boolean;
  read: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
}