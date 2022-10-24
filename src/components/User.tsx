import styled from "styled-components";
const Container = styled.div`
  width: 50px;
  height: 50px;
`;
type Props = {
  name: string;
  photo?: string;
};

function User() {
  return <Container></Container>;
}

export default User;
