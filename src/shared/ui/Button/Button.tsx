import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ButtonVariant {
  TEXT = "text",
  CONTAINED = "contained",
  OUTLINED = "outlined",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, variant, ...otherProps } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
