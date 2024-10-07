// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getToken } from '../services/auth';
import * as jwt_decode from 'jwt-decode';

const PrivateRoute = ({ element: Element }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    jwt_decode.default(token);
    return <Element />;
  } catch (error) {
    return <Navigate to="/login" />;
  }
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;