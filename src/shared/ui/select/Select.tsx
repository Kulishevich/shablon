import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { ArrowIosDownOutlineIcon } from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'
import { SelectGroup, SelectItem } from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

export type OptionsValue = {
  icon?: ReactNode
  option: string
  value: string
}
export type SelectProps = {
  className?: string
  label?: string
  options?: OptionsValue[]
  placeHolder?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>
export const Select = forwardRef<ElementRef<typeof RadixSelect.Trigger>, SelectProps>(
  (
    {
      className,
      defaultValue,
      disabled,
      label,
      onValueChange,
      options = [],
      placeHolder,
      value,
      ...rest
    },
    ref
  ) => {
    const mappedOptions = options?.map((item, index) => (
      <SelectItem className={s.selectItem} key={item.value + index} value={item.value}>
        <RadixSelect.ItemText asChild>
          <div className={s.option}>
            {item.icon}
            {item.option}
          </div>
        </RadixSelect.ItemText>
      </SelectItem>
    ))

    return (
      <RadixSelect.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      >
        {label && (
          <Typography as={'label'} grey>
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger className={clsx(s.trigger, className)} ref={ref}>
          <RadixSelect.Value placeholder={placeHolder} />
          <RadixSelect.Icon asChild>
            <ArrowIosDownOutlineIcon className={s.icon} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={s.content} position={'popper'}>
            <RadixSelect.Viewport>
              <SelectGroup>{mappedOptions}</SelectGroup>
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  }
)
