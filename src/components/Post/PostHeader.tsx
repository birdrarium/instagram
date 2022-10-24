import styled from 'styled-components';
const Container = styled.div`
    width: 300px;
    height: 50px; 
    display: flex;
    align-items: center;
    justify-text: left;
    margin-top: 10px;
`
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
  object-fit: cover;
`

type Props = {
   userName: string;
   avatarPhoto?: string;
}

function PostHeader(props: Props) {
    return (
        
      <Container>
        <Avatar src={props.avatarPhoto}></Avatar>
        {props.userName}
      </Container>
    );
  }
  
  export default PostHeader;
  