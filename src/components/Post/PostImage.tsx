import styled from "styled-components";
const Container = styled.img`
  border: 1px solid black;
  width: 100%;
  height: auto;
  object-fit: cover;
`;
type Props = {
  postPhoto: string;
};

function PostImage(props: Props) {
  return <Container src={props.postPhoto} />;
}

export default PostImage;
