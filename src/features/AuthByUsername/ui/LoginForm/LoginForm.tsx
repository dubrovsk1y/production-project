import { classNames } from "shared/lib/classNames/classNames";
import { Button, Input } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation(["actions"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autoFocus
        id="username"
        label="Username"
        placeholder="Username"
        value={username}
        onChange={setUsername}
      />
      <Input
        id="password"
        label="Password"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      <Button className={cls.loginBtn}>{t("login", { ns: "actions" })}</Button>
    </div>
  );
};
