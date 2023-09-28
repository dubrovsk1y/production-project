import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation(["aboutPage"]);

  return (
    <div>
      {t("title", { ns: "aboutPage" })}
    </div>
  );
};

export default AboutPage;
