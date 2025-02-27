import { Header, Button } from "@bcgov/design-system-react-components";
import lookupIcon from "../assets/look-up-logo.svg";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderStyles.css";

type MenuItem = {
  label: string;
  path: string;
};

export const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { label: "Troubleshooting Help", path: "/troubleshooting" },
    { label: "Update Log", path: "/update-log" },
    { label: "Feedback", path: "/feedback" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="header-container">
      <Header
        logoImage={
          <img src={lookupIcon} alt="Look Up Logo" className="logo-image" />
        }
        title="Error Messages"
        titleElement="span"
      />

      <div ref={menuRef} className="menu-button-container">
        <Button
          variant="secondary"
          onPress={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
          aria-label="Open menu"
        >
          Menu
          <div className="hamburger-icon">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </Button>

        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul className="menu-list">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    className="menu-item-button"
                    onClick={() => handleMenuItemClick(item.path)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
