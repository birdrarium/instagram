import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Logo = styled.div`
  padding: 15px;
  display: flex;
  top: 0;
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 99;
  svg {
    font-size: 24px;
    right: 0;
    padding: 0 15px;
    position: absolute;
  }
`;

function Header() {
  return (
    <Logo>
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
        height={30}
        alt="logo"
      />
      <FontAwesomeIcon icon={faPaperPlane} />
    </Logo>
  );
}

export default Header;
