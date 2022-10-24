import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

function Comment() {
  return (
    <FontAwesomeIcon
      icon={faComment}
      color="white"
      fontSize="24px"
      stroke="black"
      stroke-width="15"
    />
  );
}

export default Comment;
