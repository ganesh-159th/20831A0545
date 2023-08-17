import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getTrains = async () => {
  try {
    const response = await api.get('/trains');
    return response.data;
  } catch (error) {
    console.error('Error fetching trains:', error);
    throw error;
  }
};
