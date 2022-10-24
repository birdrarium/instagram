import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    width: 50px;
    height: 50px; 
`

function Home() {
    return (
        
      <Container>
        <FontAwesomeIcon icon={faHome}/>
      </Container>
    );
  }
  
  export default Home;
  