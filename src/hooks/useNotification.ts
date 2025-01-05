import { toast, TypeOptions } from 'react-toastify';

export function useNotification() {
  return (notification: string | JSX.Element, typeOptions: TypeOptions) =>
    typeOptions !== 'default'
      ? toast[typeOptions](notification, {
          position: 'top-right',
        })
      : toast(notification, {
          position: 'top-right',
          hideProgressBar: true,
          autoClose: false,
          closeButton: false,
          closeOnClick: true,
        });
}
