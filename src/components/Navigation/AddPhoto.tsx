import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 50px;
  height: 50px;
`;

function AddPhoto() {
  return (
    <Container>
      <FontAwesomeIcon icon={faCirclePlus} />
    </Container>
  );
}

export default AddPhoto;
