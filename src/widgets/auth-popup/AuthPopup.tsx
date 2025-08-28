'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import s from './AuthPopup.module.scss';
import { CloseIcon } from '@/shared/assets';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';
import { AuthForm } from '@/entities/auth-form';
import { RegisterForm } from '@/entities/register-form';
import { RecoveryForm } from '@/entities/recovery-form';

export const AuthPopup = ({
  children,
  initialType = 'login',
}: {
  children: ReactNode;
  initialType?: 'login' | 'register' | 'recovery';
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<'login' | 'register' | 'recovery'>(initialType);

  const handleFormType = (type: 'login' | 'register' | 'recovery') => {
    setFormType(type);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <VisuallyHidden>
            <Dialog.Title>Форма авторизации</Dialog.Title>
          </VisuallyHidden>
          <Dialog.Content
            className={s.content}
            aria-describedby={formType === 'login' ? 'login-form' : 'register-form'}
          >
            <div className={s.contentWrapper}>
              {formType === 'recovery' ? (
                <>
                  <RecoveryForm
                    onClose={() => {
                      handleClose();
                      handleFormType('login');
                    }}
                    backButton={() => handleFormType('login')}
                  />
                </>
              ) : (
                <>
                  <div className={s.navigation}>
                    <Button
                      variant="burger"
                      className={clsx(s.navigationItem, {
                        [s.active]: formType === 'login',
                      })}
                      onClick={() => handleFormType('login')}
                    >
                      Вход
                    </Button>
                    <Button
                      variant="burger"
                      className={clsx(s.navigationItem, {
                        [s.active]: formType === 'register',
                      })}
                      onClick={() => handleFormType('register')}
                    >
                      Регистрация
                    </Button>
                  </div>
                  {formType === 'login' ? (
                    <AuthForm
                      onClose={handleClose}
                      onSwitchToRecovery={() => handleFormType('recovery')}
                    />
                  ) : (
                    <RegisterForm onClose={handleClose} />
                  )}
                </>
              )}
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
