import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Like() {
  const [like, setLike] = useState(false);
  return (
    <FontAwesomeIcon
      onClick={() => setLike(!like)}
      icon={faHeart}
      color={like ? "red" : "white"}
      fontSize="24px"
      stroke={like ? "red" : "black"}
      stroke-width="15"
    />
  );
}

export default Like;
