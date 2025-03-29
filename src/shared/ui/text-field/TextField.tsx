'use client';
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

import s from './TextField.module.scss';
import { Typography } from '../typography';
import { SearchIcon } from '../../assets';

export type TextFieldProps = {
  errorMessage?: ReactNode | string;
  isRequired?: boolean;
  label?: string;
  variant?: 'password' | 'search' | 'text';
} & ComponentPropsWithoutRef<'input'>;

type TextFieldRef = ElementRef<'input'>;

export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      disabled,
      errorMessage,
      isRequired = false,
      label,
      onChange,
      placeholder,
      value,
      variant = 'text',
      ...rest
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const id = useId();

    const isPassword = variant === 'password';
    const inputType = !showPassword && isPassword ? 'password' : 'text';
    const isSearch = variant === 'search';

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      if (inputRef.current) {
        inputRef.current.value = e.target.value;
      }
    };

    // const clearInputHandler = () => {
    //   if (inputRef.current) {
    //     inputRef.current.value = "";
    //   }
    // };

    // const showPasswordHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    //   setShowPassword((prev) => !prev);
    // };

    useEffect(() => {
      if (inputRef) {
        if (typeof value === 'string' && inputRef.current) {
          inputRef.current.value = value;
        }
      }
    }, [value]);

    return (
      <div className={s.container}>
        {label && (
          <Typography
            as={'label'}
            variant='h6'
            className={clsx(disabled && s.disabled)}
            htmlFor={id}
            isRequired={isRequired}
          >
            {label}
          </Typography>
        )}
        <div className={s.inputContainer}>
          {isSearch && (
            <SearchIcon
              className={clsx(s.iconSearch, disabled && s.disabled)}
            />
          )}
          <input
            className={clsx(
              s.input,
              s[variant],
              errorMessage && s.error,
              disabled && s.disabled,
              className
            )}
            disabled={disabled}
            id={id}
            onChange={inputChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={inputType}
            value={value}
            {...rest}
          />
          {/* {isPassword && !!inputRef && (
            <Button
              className={clsx(
                s.passwordControl,
                errorMessage && s.error,
                disabled && s.disabled,
                s.showIcon
              )}
              disabled={disabled}
              onClick={showPasswordHandler}
              variant={"icon"}
            >
              {showPassword ? (
                <EyeOutlineIcon className={s.icon} />
              ) : (
                <EyeOffOutlineIcon className={s.icon} />
              )}
            </Button>
          )}
          {isSearch && !!inputRef && (
            <Button
              className={clsx(s.clearIcon, disabled && s.disabled)}
              disabled={disabled}
              onClick={clearInputHandler}
              variant={"icon"}
            >
              <CloseOutlineIcon className={s.icon} />
            </Button>
          )} */}
        </div>
        {errorMessage && (
          <Typography as={'span'} variant={'error'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
