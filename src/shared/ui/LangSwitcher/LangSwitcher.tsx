import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonVariant } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation(["actions"]);

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      variant={ButtonVariant.TEXT}
      className={classNames("", {}, [className])}
      onClick={handleChangeLanguage}
    >
      {t("translate", { ns: "actions" })}
    </Button>
  );
};
