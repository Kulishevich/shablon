import * as React from 'react'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as Dropdown from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/dropdown/Dropdown.module.scss'

type Props = {
  align?: 'center' | 'end' | 'start'
  className?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof Dropdown.Root>

export const DropDownMenu = ({ align = 'end', children, className, trigger, ...rest }: Props) => {
  return (
    <div className={className}>
      <Dropdown.Root {...rest}>
        <Dropdown.Trigger className={s.trigger}>{trigger}</Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content align={align} className={s.content}>
            {children}
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </div>
  )
}

DropDownMenu.displayName = 'DropdownMenu'
