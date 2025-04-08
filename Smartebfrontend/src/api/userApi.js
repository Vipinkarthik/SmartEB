import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/users';

export const signupUser = async (data) => {
  const res = await axios.post(`${BASE_URL}/signup`, data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post(`${BASE_URL}/login`, data);
  return res.data;
};
