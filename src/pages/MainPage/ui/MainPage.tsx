import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(() => {
  const { t } = useTranslation(["mainPage"]);

  return <div>{t("title", { ns: "mainPage" })}</div>;
});

export default MainPage;
