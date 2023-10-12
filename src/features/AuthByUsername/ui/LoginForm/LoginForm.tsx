import { classNames } from "shared/lib/classNames/classNames";
import { Button, Input, Text } from "shared/ui";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextTheme } from "shared/ui/Text/Text";
import { loginByUsername } from "../../model/services/login/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation(["actions", "loginModal", "error"]);
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text text={t("form.title", { ns: "loginModal" })} />
      {error && <Text text={t(error, { ns: "error" })} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        id="username"
        label={t("form.username.label", { ns: "loginModal" })}
        placeholder={t("form.username.placeholder", { ns: "loginModal" })}
        value={username}
        onChange={handleChangeUsername}
      />
      <Input
        id="password"
        label={t("form.password.label", { ns: "loginModal" })}
        placeholder={t("form.password.placeholder", { ns: "loginModal" })}
        value={password}
        onChange={handleChangePassword}
      />
      <Button
        disabled={isLoading}
        className={cls.loginBtn}
        onClick={handleSubmit}
      >
        {t("login", { ns: "actions" })}
      </Button>
    </div>
  );
});
