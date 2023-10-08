import { classNames } from "shared/lib/classNames/classNames";
import { ChangeEvent, InputHTMLAttributes, memo, useCallback, useEffect, useRef } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "id">

interface InputProps extends HTMLInputProps {
  id: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label: string;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    label,
    placeholder,
    id,
    autofocus = false,
    type = "text",
    ...otherProps
  } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const callbackRef = useCallback((inputElement) => {
    if (inputElement && autofocus) {
      inputElement.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <input
        id={id}
        ref={callbackRef}
        className={cls.inputField}
        value={value}
        onChange={onChangeHandler}
        type={type}
        placeholder={placeholder}
        {...otherProps}
      />
      <label
        htmlFor={id}
        className={cls.inputLabel}
      >
        {label}
      </label>
    </div>
  );
});
