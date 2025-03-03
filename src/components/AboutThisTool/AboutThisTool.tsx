import { Heading, Link, Text } from "@bcgov/design-system-react-components";
import "./AboutThisTool.css";

export const AboutThisTool = () => {
  return (
    <div className="about-this-tool">
      <Heading level={4}>About this tool</Heading>
      <Text size="small">
        The Look up tool is an internal resource to SDD. If you have any
        questions or want to help document an error, please{" "}
        <Link size="small" href="mailto:placeholder@gov.bc.ca">contact us at placeholder email</Link>
      </Text>
    </div>
  );
};
