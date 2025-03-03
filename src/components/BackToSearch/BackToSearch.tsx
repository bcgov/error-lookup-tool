import { Button } from "@bcgov/design-system-react-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './BackToSearch.css'

export const BackToSearch = () => {
  const navigate = useNavigate();
  return (
    <div className="back-to-search-container">
      <Button onPress={() => navigate("/")} variant="secondary">
      <FontAwesomeIcon icon={faArrowLeft} />
        Back to search
      </Button>
    </div>
  );
};
