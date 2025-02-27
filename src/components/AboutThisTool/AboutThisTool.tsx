import { Heading, Link, Text } from "@bcgov/design-system-react-components";
import "./AboutThisTool.css";

export const AboutThisTool = () => {
  return (
    <div className="container">
      <Heading level={4}>About this tool</Heading>
      <Text size="small">
        The Look up tool is an internal resource to SDD. If you have any
        questions or want to help document an error, please contact us at{" "}
        <Link size="small">placeholder email</Link>
      </Text>
    </div>
  );
};
