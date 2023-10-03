/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonVariant, Modal } from "shared/ui";
import { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(["actions"]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleCloseAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const handleOpenAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={handleOpenAuthModal}
        variant={ButtonVariant.OUTLINED}
        className={classNames(cls.links, {}, [])}
      >
        {t("login", { ns: "actions" })}
      </Button>

      <Modal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad iusto voluptas ratione cupiditate excepturi repellendus quas fugiat aliquam delectus magnam accusamus reiciendis molestiae soluta nemo optio, neque a ut.</p>
      </Modal>
    </div>
  );
};
