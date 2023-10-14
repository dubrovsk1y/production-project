import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button, Input, Text, TextTheme } from "shared/ui";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from "../../model/services/login/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
  handleSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, handleSuccess } = props;
  const { t } = useTranslation(["actions", "loginModal", "error"]);
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleSubmit = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === "fulfilled") {
      handleSuccess();
    }
  }, [dispatch, handleSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
