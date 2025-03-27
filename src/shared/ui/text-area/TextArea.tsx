import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { clsx } from 'clsx';

import s from './TextArea.module.scss';
import { Typography } from '../typography';

export type TextAreaProps = {
  errorMessage?: string;
  label?: string;
} & ComponentPropsWithoutRef<'textarea'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, errorMessage, label, ...rest }, ref) => {
    const showError = !!errorMessage;

    return (
      <div className={s.container}>
        {label && (
          <Typography className={s.label} variant={'body_1'}>
            {label}
          </Typography>
        )}
        <textarea
          className={clsx(s.textarea, showError && s.error, className)}
          ref={ref}
          {...rest}
        />

        {showError && (
          <Typography className={s.error} variant={'body_1'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);
