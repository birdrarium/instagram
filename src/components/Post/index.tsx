import styled from "styled-components";
import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

function Post() {
  return (
    <Container>
      <PostHeader
        userName="user1"
        avatarPhoto="https://cdn.pixabay.com/photo/2017/02/14/12/28/stone-tower-2065817_960_720.jpg"
      ></PostHeader>
      <PostImage postPhoto="https://cdn.pixabay.com/photo/2020/07/23/01/16/heritage-5430081__340.jpg" />

      <PostButtons></PostButtons>
    </Container>
  );
}

export default Post;
