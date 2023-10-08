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
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, { [cls.square]: square }, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
