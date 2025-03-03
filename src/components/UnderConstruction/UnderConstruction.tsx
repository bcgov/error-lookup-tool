import { Heading, Text } from "@bcgov/design-system-react-components";
import './UnderConstruction.css';

interface underConstructionProps {
  title: string;
}

export const UnderConstruction = ({ title }: underConstructionProps) => {
  return (
    <div className="under-construction-text">
      <Heading level={4}>{title}</Heading>
      <Text size="small">
        This page is currently under construction! Please check back later.
      </Text>
    </div>
  );
};
