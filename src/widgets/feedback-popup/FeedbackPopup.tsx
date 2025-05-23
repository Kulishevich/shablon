'use client';
import React, { ReactNode, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import s from './FeedbackPopup.module.scss';
import { CloseIcon } from '@/shared/assets';
import { FeedbackForm } from '@/entities/feedback-form';
import { FeedbackImage } from '@/entities/feedback-image';
import { Button } from '@/shared/ui/button';

export const FeedbackPopup = ({ children, image }: { children: ReactNode; image: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <VisuallyHidden>
            <Dialog.Title>Форма обратной связи</Dialog.Title>
          </VisuallyHidden>
          <Dialog.Content className={s.content}>
            <FeedbackImage image={image} />
            <FeedbackForm />
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
