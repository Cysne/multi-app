// src/services/auth.js
import db from '../../db.json';

export const login = async ({ email, password }) => {
  const user = db.users.find(user => user.email === email && user.password === password);

  if (!user) {
    throw new Error('Falha na autenticação');
  }

  localStorage.setItem('token', user.token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
};