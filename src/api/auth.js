import axios from 'axios';

const API_URL = 'https://backend-login-reg.onrender.com/api/auth'; // Replace with your actual API base

export const login = async (credentials) => {
  const res = await axios.post(`${API_URL}/login`, credentials);
  return res.data;
};

export const register = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');
  const res = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};