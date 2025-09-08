'use client';
import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import s from './ConfirmationDialog.module.scss';
import { CloseIcon } from '@/shared/assets';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';

interface ConfirmationDialogProps {
  children: ReactNode;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: 'danger' | 'warning' | 'info';
}

export const ConfirmationDialog = ({
  children,
  message,
  confirmText = 'Подтвердить',
  cancelText = 'Отмена',
  onConfirm,
  onCancel,
  isOpen,
  onOpenChange,
  variant = 'danger',
}: ConfirmationDialogProps) => {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange?.(false);
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <VisuallyHidden>
            <Dialog.Title>{message}</Dialog.Title>
          </VisuallyHidden>
          <Dialog.Content className={s.content}>
            <div className={s.contentWrapper}>
              <div className={s.textContent}>
                <div className={clsx(s.message, 'h5')}>{message}</div>
              </div>
              <div className={s.buttonGroup}>
                <Button
                  type="button"
                  variant={variant === 'danger' ? 'primary' : 'primary'}
                  onClick={handleConfirm}
                  className={clsx(s.confirmButton, s[variant])}
                >
                  {confirmText}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className={s.cancelButton}
                >
                  {cancelText}
                </Button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
