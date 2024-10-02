import { useState } from 'react';
import { login } from '../services/auth'; // Certifique-se de que essa função está implementada corretamente
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/dashboard'); // Certifique-se de que a rota '/dashboard' está configurada
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Página de Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe o erro em vermelho */}
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Senha" 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
