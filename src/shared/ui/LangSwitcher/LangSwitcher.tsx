import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Button, ButtonVariant } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
  short: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation(["translation"]);

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      variant={ButtonVariant.TEXT}
      className={classNames("", {}, [className])}
      onClick={handleChangeLanguage}
    >
      {t(short ? "shortLanguage" : "language", { ns: "translation" })}
    </Button>
  );
});
