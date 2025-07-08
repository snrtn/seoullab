import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menus from "./menu/navMenu.data";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import CustomIconLink from "@common/CustomIconLink";
import useMediaQuery from "@hooks/useMediaQuery";

const Footer = () => {
  const { t } = useTranslation();
  const isLargeScreen = useMediaQuery(1024);
  const [openSections, setOpenSections] = useState({
    navigator: true,
  });

  useEffect(() => {
    if (!isLargeScreen) {
      setOpenSections({
        navigator: true,
      });
    } else {
      setOpenSections({
        navigator: false,
      });
    }
  }, [isLargeScreen]);

  const toggleSection = (section) => {
    if (isLargeScreen) {
      setOpenSections((prevState) => ({
        ...prevState,
        [section]: !prevState[section],
      }));
    }
  };

  return (
    <div className="h-full bg-bgGrayWhite py-24 section-padding">
      <div className="flex flex-col tablet-lg:flex-row gap-20 justify-between">
        {/* 좌측: 메뉴 섹션 */}
        <div className="flex flex-col flex-[2] gap-2">
          <div className="flex flex-col gap-8 flex-[4]">
            <h1
              className="font-medium cursor-pointer font-roboto"
              onClick={() => toggleSection("navigator")}
            >
              SEOUL LAB
            </h1>

            {openSections.navigator && (
              <div className="grid gap-2 grid-cols-8 max-[900px]:grid-cols-2 ">
                {Object.keys(menus).map((menuKey) => {
                  const menu = menus[menuKey];
                  const totalItems =
                    menu?.sections?.reduce(
                      (sum, sec) => sum + (sec.items?.length || 0),
                      0
                    ) ?? 0;

                  return (
                    <div key={menuKey}>
                      <h2 className="font-roboto">
                        {menu.href ? (
                          <Link to={menu.href} className="hover:underline">
                            {t(menuKey)}
                          </Link>
                        ) : (
                          t(menuKey)
                        )}
                      </h2>

                      {totalItems > 1 && (
                        <ul className="py-2">
                          {menu.sections.map((section) =>
                            section.items.map((item) => (
                              <li key={item.label} className="py-1">
                                <Link
                                  to={item.href}
                                  className="text-cLightBlack hover:text-cBlack"
                                >
                                  {t(item.label)}
                                </Link>
                              </li>
                            ))
                          )}
                        </ul>
                      )}
                    </div>
                  );
                })}
                <Link
                  title="Réservation une place"
                  target="_blank"
                  to="https://maps.app.goo.gl/HQBzF8BhbYVMLhg36"
                  className="hover:underline"
                >
                  Plan d’accès
                </Link>
                <Link
                  title="Réservation une place"
                  target="_blank"
                  to="https://widget.thefork.com/152f5889-d257-457e-8f85-343b0e00a500"
                  className="hover:underline"
                >
                  Réservation
                </Link>
              </div>
            )}
          </div>

          <div className="mt-10 mb-10">
            <hr />
          </div>

          <div className="flex mt-8 gap-4">
            <CustomIconLink
              to="https://www.instagram.com/restaurant.seoul.lab/?hl=fr"
              bgColor="#E1306C"
              icon={FaInstagram}
              title="instagram, restaurant.seoul.lab"
            />
            <CustomIconLink
              to="mailto:seoul.lab.paris@gmail.com"
              bgColor="#60A5FA"
              icon={FaEnvelope}
              title="seoul.lab.paris@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
