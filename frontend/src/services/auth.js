import api from './api';

export const login = (token) => {
  localStorage.setItem('usertoken', token);
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  window.bus.$emit('logged-in');
  window.auth = 'loggedin';
};

export const logout = () => {
  localStorage.removeItem('usertoken');
  delete api.defaults.headers.common.Authorization;
  window.bus.$emit('logged-out');
  window.auth = '';
};
