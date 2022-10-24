import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faCirclePlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid gray;
`;

function Navigation() {
  return (
    <Container>
      <FontAwesomeIcon icon={faHome} fontSize="24" />
      <FontAwesomeIcon icon={faSearch} fontSize="24" />
      <FontAwesomeIcon icon={faCirclePlus} fontSize="24" />
      <FontAwesomeIcon icon={faUser} fontSize="24" />
    </Container>
  );
}

export default Navigation;
