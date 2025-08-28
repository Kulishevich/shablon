'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import s from './NotificationPopup.module.scss';
import { CloseIcon } from '@/shared/assets';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';
import Image from 'next/image';

interface NotificationData {
  type: 'success' | 'error';
  title: string;
  message: string;
  button?: ReactNode;
}

interface NotificationContextType {
  showNotification: (data: NotificationData) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<NotificationData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const showNotification = (data: NotificationData) => {
    setNotification(data);
    setIsOpen(true);
  };

  const hideNotification = () => {
    setIsOpen(false);
    setTimeout(() => setNotification(null), 300);
  };

  return (
    <NotificationContext.Provider value={{ showNotification, hideNotification }}>
      {children}
      {notification && (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className={s.overlay}>
              <VisuallyHidden>
                <Dialog.Title>{notification.title}</Dialog.Title>
              </VisuallyHidden>
              <Dialog.Content className={s.content} aria-describedby={notification.title}>
                <div className={s.contentWrapper}>
                  <Image
                    src={notification.type === 'success' ? '/success.png' : '/error.png'}
                    alt="icon"
                    width={64}
                    height={64}
                    className={s.icon}
                  />
                  <div className={s.textContent}>
                    <div className={clsx(s.title, 'h3')}>{notification.title}</div>
                    <div className={clsx(s.message, 'body_3')}>{notification.message}</div>
                  </div>
                  {notification.button}
                </div>
                <Dialog.DialogClose asChild>
                  <Button className={s.closeButton} onClick={hideNotification}>
                    <CloseIcon />
                  </Button>
                </Dialog.DialogClose>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </NotificationContext.Provider>
  );
};

export const NotificationPopup = ({
  children,
  type,
  title,
  message,
  button,
  initialState = false,
}: {
  children: ReactNode;
  type: 'success' | 'error';
  title: string;
  message: string;
  button?: ReactNode;
  initialState?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(initialState);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <VisuallyHidden>
            <Dialog.Title>{title}</Dialog.Title>
          </VisuallyHidden>
          <Dialog.Content className={s.content}>
            <div className={s.contentWrapper}>
              <Image
                src={type === 'success' ? '/success.png' : '/error.png'}
                alt="icon"
                width={64}
                height={64}
                className={s.icon}
              />
              <div className={s.textContent}>
                <div className={clsx(s.title, 'h3')}>{title}</div>
                <div className={clsx(s.message, 'body_3')}>{message}</div>
              </div>
              {button}
            </div>
            <Dialog.DialogClose asChild>
              <Button className={s.closeButton}>
                <CloseIcon />
              </Button>
            </Dialog.DialogClose>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
