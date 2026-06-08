import { create } from 'zustand';
import { analyzeMatch } from '../api/match.api';

export const useMatchStore = create((set) => ({
  result: null,
  loading: false,
  error: null,

  analyze: async (resume, jobDescription) => {
    set({ loading: true, error: null, result: null });
    try {
      const res = await analyzeMatch(resume, jobDescription);
      set({ result: res.data, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || 'Analysis failed', loading: false });
    }
  },

  reset: () => set({ result: null, error: null }),
}));