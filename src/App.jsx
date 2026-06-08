import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MatchPage from './pages/MatchPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}