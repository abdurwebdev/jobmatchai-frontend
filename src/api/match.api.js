import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const analyzeMatch = (resume, jobDescription) =>
  api.post('/match', { resume, jobDescription });