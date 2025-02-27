import { Header, Button } from "@bcgov/design-system-react-components";
import lookupIcon from "../assets/look-up-logo.svg";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  return (
    <div className="header-container" style={{ position: "relative" }}>
      <Header
        logoImage={
          <img
            src={lookupIcon}
            alt="Look Up Logo"
            style={{ width: "auto", height: "32px" }}
          />
        }
        title="Error Messages"
        titleElement="span"
      />

      <div
        ref={menuRef}
        style={{
          position: "absolute",
          top: "12px",
          right: "64px",
        }}
      >
        <Button
          variant="secondary"
          onPress={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
          aria-label="Open menu"
        >
          Menu
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "3px",
              marginLeft: "8px",
            }}
          >
            <span
              style={{
                width: "18px",
                height: "2px",
                background: "currentColor",
              }}
            ></span>
            <span
              style={{
                width: "18px",
                height: "2px",
                background: "currentColor",
              }}
            ></span>
            <span
              style={{
                width: "18px",
                height: "2px",
                background: "currentColor",
              }}
            ></span>
          </div>
        </Button>

        {isMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              width: "220px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 1000,
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <button
                  onClick={() => handleMenuItemClick("/troubleshooting-help")}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 16px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    borderBottom: "1px solid #eee",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f5f5f5")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  Troubleshooting Help
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuItemClick("/update-log")}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 16px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    borderBottom: "1px solid #eee",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f5f5f5")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  Update Log
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuItemClick("/feedback")}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 16px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f5f5f5")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  Feedback
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
