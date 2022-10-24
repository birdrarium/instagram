import styled from 'styled-components';
import AddPhoto from './AddPhoto';
import Home from './Home';
import Account from './Account';
import Explore from './Explore';

const Container = styled.div`
    width: 300px;
    height: 30px; 
    display: flex;
    justify-content: space-around;

`

function Navigation() {
    return (
        
      <Container>
       <Home></Home>
       <Explore></Explore>
       <AddPhoto></AddPhoto>
       <Account></Account>
      </Container>
    );
  }
  
  export default Navigation;
  