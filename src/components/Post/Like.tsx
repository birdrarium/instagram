import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Like() {
  return (
    <FontAwesomeIcon
      icon={faHeart}
      color="white"
      fontSize="24px"
      stroke="black"
      stroke-width="15"
    />
  );
}

export default Like;
