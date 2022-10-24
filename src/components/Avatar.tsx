import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const AvatarImage = styled.img<{ hasNewPost: boolean }>`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
  ${(props) =>
    props.hasNewPost
      ? "background-image: -webkit-gradient(linear, left bottom, right top, color-stop(0.33, orange), color-stop(0.13, yellow), color-stop(0.1, pink), color-stop(1, purple)); padding: 3px; width: 66px; height: 66px"
      : ""};
`;

const Container = styled.div`
  position: relative;
  svg {
    border-radius: 50%;
    border: 2px solid white;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: blue;
    color: white;
    width: 15px;
    height: 15px;
    padding: 2px;
  }
`;

type Props = {
  name: string;
  photo?: string;
  hasNewPost: boolean;
  myAccount: boolean;
};

function Avatar(props: Props) {
  return (
    <Container>
      <AvatarImage src={props.photo} hasNewPost={props.hasNewPost} />
      {props.myAccount && <FontAwesomeIcon icon={faPlus} />}
    </Container>
  );
}

export default Avatar;
