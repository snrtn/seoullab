import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navMenu from "./navMenu.styles";
import { useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";

const Dropdown = ({ menuKey, data, isActive, setActiveDropdown }) => {
  const { t } = useTranslation();
  const [dropdownTop, setDropdownTop] = useState(107);
  const isTabletScreen = useMediaQuery(1024);
  const responsive = isTabletScreen ? 600 : 760;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const newTop = position < responsive ? 107 : 43;
      const oldTop = position > responsive ? 107 : 43;
      setDropdownTop(newTop);

      if (position >= 2600) {
        setDropdownTop(oldTop);
      }

      if (isTabletScreen) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTabletScreen, responsive, setActiveDropdown]);

  if (!isActive) return null;

  // ✅ 드롭다운 항목이 1개 이하일 경우 표시 안 함
  const totalItems =
    data[menuKey]?.sections?.reduce(
      (sum, section) => sum + (section.items?.length || 0),
      0
    ) ?? 0;

  if (totalItems <= 1) return null;

  return (
    <div
      onMouseEnter={() => setActiveDropdown(menuKey)}
      onMouseLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setActiveDropdown(null);
        }
      }}
      style={{ top: `${dropdownTop}px`, position: "fixed", zIndex: 50 }}
      className={navMenu.drop}
    >
      <div className={navMenu.dropContent}>
        {data[menuKey].sections.map((section) => (
          <div key={section.title}>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
              {section.items.map((item) => (
                <Link key={item.label} to={item.href}>
                  <div className={navMenu.listItem}>{t(item.label)}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
