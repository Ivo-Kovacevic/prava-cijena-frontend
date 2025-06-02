"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface NotificationContextType {
  showNotification: boolean;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notification: string | null;
  setNotification: React.Dispatch<React.SetStateAction<string | null>>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (notification) {
      setShowNotification(true);

      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [notification]);

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        setShowNotification,
        notification,
        setNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within an NotificationProvider");
  }
  return context;
};
