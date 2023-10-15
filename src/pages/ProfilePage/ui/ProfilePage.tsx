import { profileReducer } from "entities/Profile";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation(["profilePage"]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>{t("title", { ns: "profilePage" })}</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
