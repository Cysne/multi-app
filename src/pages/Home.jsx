import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Bem-vindo ao Multi App</h1>
      <p>Escolha uma das opções abaixo para começar:</p>
      <Link to="/login">
        <button>Ir para Login</button>
      </Link>
    </HomeContainer>
  );
};

export default Home;
