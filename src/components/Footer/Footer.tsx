import "./Footer.css";
import { Link, Text } from "@bcgov/design-system-react-components";

export const FooterPage = () => {
  return (
    <footer className="custom-footer">
      <hr className="footer-line" />
      <Text className="footer-text">
        <span>© 2025 Government of British Columbia</span>|
        <Link href="/update-log">Update log</Link>|
        <Link href="/feedback">Feedback</Link>
      </Text>
    </footer>
  );
};
