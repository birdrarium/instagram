import Avatar from "./Avatar";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const avatars = [
  {
    name: "myAccount",
    photo:
      "https://cdn.pixabay.com/photo/2018/04/14/20/38/cherry-blossom-3320018_960_720.jpg",
    hasNewPost: false,
    myAccount: true,
  },
  {
    name: "name1",
    photo:
      "https://cdn.pixabay.com/photo/2015/04/08/08/57/sakura-712312_960_720.jpg",
    hasNewPost: true,
    myAccount: false,
  },
  {
    name: "name2",
    photo:
      "https://cdn.pixabay.com/photo/2016/04/09/02/09/cherry-blossoms-1317308_960_720.jpg",
    hasNewPost: true,
    myAccount: false,
  },
  {
    name: "name3",
    photo: "https://tetsu-blog.org/wp-content/uploads/2021/07/23185885_s.jpg",
    hasNewPost: true,
    myAccount: false,
  },
  {
    name: "name3",
    photo: "https://www.pakutaso.com/shared/img/thumb/_RTM8849_TP_V.jpg",
    hasNewPost: true,
    myAccount: false,
  },
];

function AvatarList() {
  return (
    <Container>
      {avatars.map((avatar) => (
        <Avatar
          name={avatar.name}
          photo={avatar.photo}
          hasNewPost={avatar.hasNewPost}
          myAccount={avatar.myAccount}
        />
      ))}
    </Container>
  );
}

export default AvatarList;
