import { Accordion, Text } from "@bcgov/design-system-react-components";
import "./ErrorDetail.css";

interface TechnicalDetailsProps {
  errorCode: string;
  entity: string;
  datagroup: string;
  actionedBy: string;
  source: string;
}

export const TechnicalDetails = ({
  errorCode,
  entity,
  datagroup,
  actionedBy,
  source,
}: TechnicalDetailsProps) => {
  return (
    <div>
      <Accordion label="Technical details">
        <ul>
          <li>
            <Text>
              <strong>Error Code:</strong> {errorCode}
            </Text>
          </li>
          <li>
            <Text>
              <strong>Entity:</strong> {entity}
            </Text>
          </li>
          <li>
            <Text>
              <strong>Datagroup:</strong> {datagroup}
            </Text>
          </li>
          <li>
            <Text>
              <strong>Actioned by:</strong> {actionedBy}
            </Text>
          </li>
          <li>
            <Text>
              <strong>Source:</strong> {source}
            </Text>
          </li>
        </ul>
      </Accordion>
    </div>
  );
};
