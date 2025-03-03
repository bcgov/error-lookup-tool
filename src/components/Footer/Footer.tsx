import "./Footer.css";
import { Link, Text } from "@bcgov/design-system-react-components";

export const FooterPage = () => {
  return (
    <footer className="custom-footer">
      <hr className="footer-line" />
      <Text size="small" className="footer-text">
        <span>© 2025 Government of British Columbia</span>|
        <Link size="small" href="/update-log">
          Update log
        </Link>
        |
        <Link size="small" href="/feedback">
          Feedback
        </Link>
      </Text>
    </footer>
  );
};
