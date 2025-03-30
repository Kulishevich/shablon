import { clsx } from 'clsx';
import { ToastT, Toaster, toast } from 'sonner';

import styles from './Toast.module.scss';
import { Typography } from '../typography';
import { ErrorIcon, SuccessIcon } from '@/shared/assets';

const DEFAULT_DURATION = 5000;
const DEFAULT_POSITION = 'bottom-left';

type ToastType = 'error' | 'info' | 'success' | 'warning';
type ToastOptions = {
  message: string;
  title: string;
  variant?: ToastType;
} & Omit<ToastT, 'id'>;

const showToast = ({
  className,
  duration = DEFAULT_DURATION,
  icon,
  message,
  title,
  position = DEFAULT_POSITION,
  variant = 'success',
  ...props
}: ToastOptions) => {
  const typesClass = {
    error: styles.error,
    info: styles.info,
    success: styles.success,
    warning: styles.warning,
  }[variant];

  toast.custom(
    (t) => (
      <div className={clsx(styles.rootClass, typesClass, className)}>
        <Typography className={styles.title} variant={'h5'}>
          {variant === 'error' && <ErrorIcon />}
          {variant === 'success' && <SuccessIcon />}
          {title}
        </Typography>
        <Typography className={styles.message} variant={'body_7'}>
          {message}
        </Typography>
      </div>
    ),
    {
      duration,
      position,
      ...props,
    }
  );
};

export { Toaster, showToast };
