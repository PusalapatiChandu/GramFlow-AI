import axios from 'axios';

// Spring Boot Backend
export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Python AI Service (Direct for certain models if needed, though backend mostly proxies it)
export const aiClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});
