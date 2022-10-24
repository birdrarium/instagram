import styled from "styled-components";
const Container = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
type Props = {
  name: string;
  photo?: string;
};

function Avatar(props: Props) {
  return <Container src={props.photo} />;
}

export default Avatar;
