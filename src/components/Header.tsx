import styled from 'styled-components';
const Logo = styled.div`
  padding: 10px;
  display: flex;
`

function Header() {
  return (
    <Logo>
      <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" height={30} />
    </Logo>
  );
}

export default Header;
