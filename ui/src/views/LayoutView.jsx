import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useMediaQuery from "@hooks/useMediaQuery";
import Header from "@navigation/Header";
import Footer from "@navigation/Footer";
import NavSide from "@navigation/side/NavSide";
import Dropdown from "@navigation/menu/Dropdown";
import data from "@navigation/menu/navMenu.data";

const LayoutView = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isLargeScreen = useMediaQuery(1024);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const handleCartMouseEnter = () => {
    setIsCartDropdownOpen(true);
    setShowDropdown(false);
  };

  const handleCartMouseLeave = () => {
    setIsCartDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (!isLargeScreen && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isLargeScreen, isMenuOpen]);

  useEffect(() => {
    if (showDropdown || isDropdownOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    if (showDropdown || isCartDropdownOpen) {
      setIsDropdownOpen(false);
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showDropdown, isDropdownOpen, isCartDropdownOpen]);

  const handleSearchResults = (results, term) => {
    setSuggestions(results);
    setSearchTerm(term);
    setShowDropdown(true);
  };

  const handleClearSuggestions = () => {
    setSuggestions([]);
    setShowDropdown(false);
  };

  return (
    <div className="mt-[112px] max-[1022px]:mt-[45px]">
      <header>
        <Header
          onMenuToggle={toggleMenu}
          hoveredMenu={hoveredMenu}
          setHoveredMenu={setHoveredMenu}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          openSideMenu={openSideMenu}
          handleCartMouseEnter={handleCartMouseEnter}
          handleCartMouseLeave={handleCartMouseLeave}
          onSearchChange={handleSearchResults}
          onClear={handleClearSuggestions}
          toggleDropdown={toggleDropdown}
        />
        <NavSide isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        {activeDropdown && (
          <Dropdown
            menuKey={activeDropdown}
            data={data}
            isActive={!!activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutView;
