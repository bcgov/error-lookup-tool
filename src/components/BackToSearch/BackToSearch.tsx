import { Button } from "@bcgov/design-system-react-components";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackToSearch = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onPress={() => navigate("/")} variant="secondary">
        <ArrowBackIcon />
        Back to search
      </Button>
    </div>
  );
};
