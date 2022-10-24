import styled from "styled-components";
import Comment from "./Comment";
import Like from "./Like";
import Share from "./Share";

const Container = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;
  margin: 5px;
`;

const Button = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  margin: 5px;
`;

type Props = {
  photo?: string;
};

function PostButtons() {
  return (
    <Container>
      <Button>
        <Like></Like>
      </Button>
      <Button>
        <Comment></Comment>
      </Button>
      <Button>
        <Share></Share>
      </Button>
    </Container>
  );
}

export default PostButtons;
