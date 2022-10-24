import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 50px;
  height: 50px;
`;

function Account() {
  return (
    <Container>
      <FontAwesomeIcon icon={faUser} />
    </Container>
  );
}

export default Account;
