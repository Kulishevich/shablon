import React from 'react';
import { TextField, TextFieldProps } from '../text-field';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type ControlledTextFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'disabled' | 'onBlur' | 'onChange' | 'ref' | 'value'
> &
  UseControllerProps<T>;

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  errorMessage,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: ControlledTextFieldProps<T>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  });

  return (
    <TextField
      errorMessage={errorMessage || fieldState.error?.message}
      {...field}
      {...props}
    />
  );
};
