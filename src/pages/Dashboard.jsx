// src/pages/Dashboard.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/qrcode-generator">
          <Button>Gerador de QR Code</Button>
        </Link>
        <Link to="/ip-address-finder">
          <Button>Localizador de IP</Button>
        </Link>
        <Link to="/movie-search-engine">
          <Button>Busca de Filmes</Button>
        </Link>
        <Link to="/todo-app">
          <Button>Todo App</Button>
        </Link>
        <Link to="/quiz-app">
          <Button>Quiz App</Button>
        </Link>
        <Link to="/language-translator">
          <Button>Tradutor de Idiomas</Button>
        </Link>
      </nav>
    </DashboardContainer>
  );
};

export default Dashboard;