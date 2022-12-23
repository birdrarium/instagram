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
      "https://cdn.pixabay.com/photo/2017/04/15/11/51/mt-fuji-2232246__340.jpg",
    hasNewPost: false,
    myAccount: true,
  },
  {
    name: "name1",
    photo:
      "https://cdn.pixabay.com/photo/2017/02/14/12/28/stone-tower-2065817_960_720.jpg",
    hasNewPost: true,
    myAccount: false,
  },
  {
    name: "name2",
    photo:
      "https://cdn.pixabay.com/photo/2019/05/22/14/10/orchid-4221620__480.jpg",
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
