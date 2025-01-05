import React, { createContext, useState, useEffect, useContext } from 'react';
// import socketIOClient from "socket.io-client";
import { AuthContext } from './auth-context';
import { useHttp, useNotification } from 'src/hooks';
import { INotification } from 'src/types/notification';

// Create Context
export const NotificationContext = createContext<{notifications: INotification[], fetchNotifications: () => void}>({
  notifications: [],
  // fetchNotifications: () => { },
  fetchNotifications: () => { console.log("fetchNotifications function initialization. This will be overridden in the Provider."); },

});

type NotificationProviderProps = {
  children: React.ReactNode;
};

// Create Provider
export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const { accessToken, profile } = useContext(AuthContext);

  const [notifications, setNotifications] = useState<INotification[]>([]);
  const { sendRequest: requestNotification } = useHttp();
  // const notify = useNotification();

  // useEffect(() => {
  //   let eventSource: EventSource;
  //   if (profile) {
  //     eventSource = new EventSource(
  //       `${process.env.REACT_APP_PLATFORM_API_URL}/notification/${profile?.id}/sse`,
  //     );
  //
  //     eventSource.onmessage = event => {
  //       const data = JSON.parse(event.data);
  //       setNotifications(prevNotifications => [...prevNotifications, data]);
  //       notify(data.title, data.type)
  //
  //       // Do something with the data, e.g., update state or display it on the page
  //     };
  //
  //     eventSource.onerror = error => {
  //       console.error('Error occurred:', error);
  //       // Handle error, e.g., reconnect to SSE or show an error message
  //     };
  //   }
  //
  //   return () => {
  //     if (eventSource) eventSource.close();
  //   };
  // }, [profile]);

  useEffect(() => {
    if(profile && profile?.account?.company)
      fetchNotifications();
  }, [profile])

  const fetchNotifications = () =>
    requestNotification({ url: 'notification', accessToken }, (allNotifications: any) => {
        setNotifications(allNotifications);
    });

  return (
    <NotificationContext.Provider value={{notifications, fetchNotifications}}>{children}</NotificationContext.Provider>
  );
};
