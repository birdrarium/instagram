import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 50px;
  height: 50px;
`;

function Explore() {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
    </Container>
  );
}

export default Explore;
