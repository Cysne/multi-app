import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getToken } from '../services/auth';
import * as jwt_decode from 'jwt-decode';

const PrivateRoute = ({ element: Element }) => {
  const token = getToken();

  if (!token) {
    // Se não há token, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  try {
    // Decodifica o token
    jwt_decode(token);
    return <Element />;
  } catch (error) {
    console.error("Token inválido:", error);
    return <Navigate to="/login" />;
  }
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
