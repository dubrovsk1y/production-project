import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonVariant } from "shared/ui";
import cls from "./Error.module.scss";

interface ErrorProps {
  className?: string;
}

export const Error = ({ className }: ErrorProps) => {
  const { t } = useTranslation(["error", "actions"]);

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.Error, {}, [className])}>
      <p>{t("somethingWentWrong", { ns: "error" })}</p>
      <Button onClick={handleReloadPage} variant={ButtonVariant.OUTLINED}>
        {t("reloadPage", { ns: "actions" })}
      </Button>
    </div>
  );
};
