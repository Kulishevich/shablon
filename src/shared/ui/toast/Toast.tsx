import { CSSProperties, ReactNode } from 'react'

import { Typography } from '@/components/ui'
import { CloseIcon } from '@/components/ui/icons'
import { clsx } from 'clsx'
import { ToastT, Toaster, toast } from 'sonner'

import styles from './Toast.module.scss'

const DEFAULT_DURATION = 5000
const DEFAULT_POSITION = 'bottom-left'

type ToastType = 'error' | 'info' | 'success' | 'warning'
type ToastOptions = {
  message: ReactNode
  progress?: boolean
  variant?: ToastType
} & Omit<ToastT, 'id'>

const showToast = ({
  className,
  duration = DEFAULT_DURATION,
  icon,
  message,
  position = DEFAULT_POSITION,
  progress = false,
  variant = 'success',
  ...props
}: ToastOptions) => {
  const typesClass = {
    error: styles.error,
    info: styles.info,
    success: styles.success,
    warning: styles.warning,
  }[variant]

  const renderProgress = () =>
    progress && (
      <div
        className={styles.progressBar}
        style={{ '--animation-duration': `${duration}ms` } as CSSProperties}
      />
    )

  toast.custom(
    t => (
      <div className={clsx(styles.rootClass, typesClass, className)}>
        <div className={clsx(styles.contentWrapper)}>
          <Typography className={styles.message} variant={'regular_text_16'}>
            {message}
          </Typography>
          {renderProgress()}
        </div>
        <button className={styles.closeButton} onClick={() => toast.dismiss(t)} type={'button'}>
          {icon || <CloseIcon />}
        </button>
      </div>
    ),
    {
      duration,
      position,
      ...props,
    }
  )
}

export { Toaster, showToast }
