import * as React from 'react'
import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './Dropdown.module.scss'

type ItemProps = ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const Item = ({ ...rest }: ItemProps) => {
  return <DropdownMenu.Item asChild className={s.item} {...rest} />
}

Item.displayName = 'DropdownMenu.Item'
