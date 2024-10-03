// src/services/auth.js
export const login = async ({ email, password }) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Falha na autenticação');
  }

  const data = await response.json();
  localStorage.setItem('token', data.token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};