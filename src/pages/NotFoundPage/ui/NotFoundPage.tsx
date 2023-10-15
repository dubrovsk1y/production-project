import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation(["notFoundPage"]);

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("title", { ns: "notFoundPage" })}
    </div>
  );
});

export default NotFoundPage;
