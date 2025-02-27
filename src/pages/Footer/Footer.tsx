import "./Footer.css";
import { Link } from "@bcgov/design-system-react-components";

export const FooterPage = () => {
  return (
    <footer className="custom-footer">
      <hr className="footer-line" />
      <p className="footer-text">
        <span>© 2025 Government of British Columbia</span>|
        <Link size="small" href="/update-log">
          Update log
        </Link>
        |
        <Link size="small" href="/feedback">
          Feedback
        </Link>
      </p>
    </footer>
  );
};
