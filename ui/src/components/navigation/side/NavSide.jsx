import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import navSide from "./navSide.styles";
import menus from "../menu/navMenu.data";

const NavSide = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [activeSections, setActiveSections] = useState({});

  useEffect(() => {
    if (!isOpen) {
      setActiveSections({});
    }
  }, [isOpen]);

  const handleSectionToggle = (section) => {
    setActiveSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className={navSide.container}>
      <div className={navSide.overlay} onClick={onClose}>
        <div className={navSide.closeButton} onClick={onClose}>
          <IoMdClose size={30} color="white" />
        </div>
      </div>

      <div className={navSide.sidebar}>
        <div className={navSide.content}>
          <div className={navSide.welcome}>
            <h1 className={navSide.msg}>{t("side.welcome")},</h1>
          </div>

          <div className={navSide.itemCont}>
            {Object.keys(menus).map((menuKey) => {
              const menu = menus[menuKey];
              const totalItems =
                menu.sections?.reduce(
                  (sum, sec) => sum + (sec.items?.length || 0),
                  0
                ) ?? 0;

              if (totalItems <= 1) {
                // menu.href가 있는 경우 메뉴 자체를 링크로 출력
                if (menu.href) {
                  return (
                    <Link
                      key={menuKey}
                      to={menu.href}
                      className={navSide.itemBtn}
                    >
                      <span className={navSide.itemText}>{t(menuKey)}</span>
                    </Link>
                  );
                }

                // menu.href가 없으면 section > item 직접 출력
                return (
                  <div key={menuKey}>
                    {menu.sections.map((section) =>
                      section.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className={navSide.itemBtn}
                        >
                          <span className={navSide.itemText}>
                            {t(item.label)}
                          </span>
                        </Link>
                      ))
                    )}
                  </div>
                );
              }

              // 2개 이상일 경우 section 구조 유지
              return (
                <div key={menuKey}>
                  {menu.sections.map((section) => {
                    const count = section.items.length;

                    if (count <= 1) {
                      return (
                        <div key={section.title}>
                          {count === 1 && (
                            <Link
                              to={section.items[0].href}
                              className={navSide.itemBtn}
                            >
                              <span className={navSide.itemText}>
                                {t(section.items[0].label)}
                              </span>
                            </Link>
                          )}
                        </div>
                      );
                    }

                    return (
                      <div key={section.title}>
                        <div
                          className={navSide.itemBtn}
                          onClick={() => handleSectionToggle(section.title)}
                        >
                          <div className="flex justify-between w-full items-center">
                            <span className={navSide.itemText}>
                              {t(section.title)}
                            </span>
                            {activeSections[section.title] ? (
                              <FaChevronDown className={navSide.faChevron} />
                            ) : (
                              <FaChevronRight className={navSide.faChevron} />
                            )}
                          </div>
                        </div>

                        {activeSections[section.title] && (
                          <>
                            {section.items.map((item) => (
                              <Link
                                key={item.label}
                                to={item.href}
                                className={navSide.itemBtn}
                                onClick={onClose}
                              >
                                <span className={navSide.itemSubText}>
                                  {t(item.label)}
                                </span>
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSide;
