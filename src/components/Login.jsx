import { useState } from 'react'; // Importa o hook useState do React
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import { login } from '../services/auth'; // Importa a função de login do serviço de autenticação
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate do React Router
import { loginSchema } from '../utils/validators'; // Importa o esquema de validação
import { handleError } from '../utils/errorHandler'; // Importa o manipulador de erros

// Define o estilo do container principal do login
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Define o estilo do formulário de login
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

// Define o estilo do botão
const Button = styled.button`
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

// Componente principal de Login
const Login = () => {
  const [email, setEmail] = useState(''); // Define o estado para o email
  const [password, setPassword] = useState(''); // Define o estado para a senha
  const [error, setError] = useState(''); // Define o estado para o erro
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    try {
      await loginSchema.validate({ email, password }); // Valida os dados de entrada
      await login({ email, password }); // Chama a função de login com email e senha
      navigate('/dashboard'); // Navega para o dashboard se o login for bem-sucedido
    } catch (err) {
      handleError(err); // Lida com o erro usando o manipulador de erros
      setError(err.message); // Define a mensagem de erro se o login falhar
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe o erro em vermelho */}
        <Input
          type="email"
          value={email} // Valor do campo de entrada é ligado ao estado email
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado email conforme o usuário digita
          placeholder="Email" // Placeholder do campo de entrada
          required
        />
        <Input
          type="password"
          value={password} // Valor do campo de entrada é ligado ao estado password
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Senha" // Placeholder do campo de entrada
          required
        />
        <Button type="submit">Login</Button> {/* Botão que envia o formulário */}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; // Exporta o componente Login como padrão