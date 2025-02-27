import { Button } from "@bcgov/design-system-react-components";
import { useNavigate } from "react-router-dom";

export const BackToSearch = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onPress={() => navigate("/")} variant="secondary">
        Back to list
      </Button>
    </div>
  );
};
