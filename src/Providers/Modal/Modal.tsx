import React, { createContext, FC, useState } from 'react';
import { ModalFuncProps } from 'antd/lib/modal';
import { Modal } from 'antd';

interface ModalContextProps {
  showModal: (props: Pick<ModalFuncProps, 'title' | 'content' | 'onOk'>) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  showModal: () => undefined,
});

export const ModalProvider: FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showModal = (props: Pick<ModalFuncProps, 'title' | 'content' | 'onOk'>) => {
    Modal.confirm({
      ...props,
      visible: true,
      onCancel: () => setIsVisible(!isVisible),
      onOk: () => {
        if (props.onOk) props.onOk();
        setIsVisible(!isVisible);
      },
    });
  };

  return <ModalContext.Provider value={{ showModal }}>{children}</ModalContext.Provider>;
};
