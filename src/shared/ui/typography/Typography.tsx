import { ComponentPropsWithoutRef, ElementType } from 'react';
import { clsx } from 'clsx';
import s from './Typography.module.scss';

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T;
  isRequired?: boolean;
  variant?:
    | 'h1'
    | 'h1_discount'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body_1'
    | 'body_2'
    | 'body_3'
    | 'body_4'
    | 'body_5'
    | 'body_6'
    | 'body_7'
    | 'button'
    | 'placeholder'
    | 'discount'
    | 'error'
    | 'tag';
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T>
) => {
  const {
    as: Component = 'p',
    className,
    isRequired = false,
    variant = 'body_1',
    ...rest
  } = props;
  const cn = clsx(s[variant], isRequired && s.required, className);

  return <Component className={cn} {...rest} />;
};
