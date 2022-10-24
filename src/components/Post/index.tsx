import styled from 'styled-components';
import PostButtons from './PostButtons';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

const Container = styled.div`
    width: 300px;
    height: 400px; 
`

function Post() {
    return (
        
      <Container>
        <PostHeader userName="user1" avatarPhoto="https://cdn.pixabay.com/photo/2018/04/14/20/38/cherry-blossom-3320018_960_720.jpg"></PostHeader>
        <PostImage postPhoto="https://cdn.pixabay.com/photo/2018/04/14/20/38/cherry-blossom-3320018_960_720.jpg"></PostImage>

        <PostButtons></PostButtons>
      </Container>
    );
  }
  
  export default Post;
  