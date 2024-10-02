import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getToken } from '../services/auth'; // Verifique se o caminho está correto
import jwtDecode from 'jwt-decode';

const PrivateRoute = ({ element: Element }) => {
  const token = getToken();

  if (token) {
    try {
      // Verifica se o token é válido decodificando-o
      jwtDecode(token);
      return <Element />;
    } catch (error) {
      console.error("Token inválido:", error);
      // Se o token for inválido, redireciona para a página de login
      return <Navigate to="/login" />;
    }
  } else {
    // Se não houver token, redireciona para a página de login
    return <Navigate to="/login" />;
  }
};

// Validação de tipos para os props do componente
PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
