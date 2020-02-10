import React, { createContext, FC } from 'react';
import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';

export interface ToastContextProps {
  showToast: (props: Pick<ArgsProps, 'description' | 'message' | 'type'>) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  showToast: () => undefined,
});

export const ToastProvider: FC = ({ children }) => {
  const showToast = ({ type, ...props }: Pick<ArgsProps, 'description' | 'message' | 'type'>) => {
    if (type) notification[type](props);
  };

  return <ToastContext.Provider value={{ showToast }}>{children}</ToastContext.Provider>;
};
