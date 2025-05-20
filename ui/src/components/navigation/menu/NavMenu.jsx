import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import data from "./navMenu.data";
import navMenu from "./navMenu.styles";

const NavMenu = ({
  hoveredMenu,
  setHoveredMenu,
  activeDropdown,
  setActiveDropdown,
}) => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseEnter = (menuKey) => {
    setHoveredMenu(menuKey);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <div className={`${isLoaded ? "tablet-lg:flex" : "hidden"} relative`}>
      <div className={navMenu.wrap}>
        <div className={navMenu.dropCont}>
          {Object.keys(data).map((menuKey) => {
            const menuItem = data[menuKey];
            const href = menuItem.href;

            const content = (
              <span
                className={
                  activeDropdown === menuKey || hoveredMenu === menuKey
                    ? navMenu.activeline
                    : navMenu.deactiveline
                }
              >
                {t(`${menuKey}`)}
              </span>
            );

            return (
              <div
                key={menuKey}
                onMouseEnter={() => handleMouseEnter(menuKey)}
                onMouseLeave={handleMouseLeave}
                className={navMenu.menuItem}
              >
                {href ? <Link to={href}>{content}</Link> : content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
