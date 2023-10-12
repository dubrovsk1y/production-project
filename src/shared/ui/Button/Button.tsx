import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import cls from "./Button.module.scss";

export enum ButtonVariant {
  TEXT = "text",
  CONTAINED = "contained",
  OUTLINED = "outlined",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    className,
    variant = ButtonVariant.OUTLINED,
    square = false,
    disabled = false,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[variant]])}
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
